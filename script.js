/* =========================================
   LOGIC SECTION (App functionality)
   WITH SMART MERGE ALGORITHM
========================================= */

const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyZDjVPjnW_-kTHSSD0ccBX4ez-y9QrQ7M7Vmmg4WDZnPhC5YQr4VxbGyqXrBh4iaHbwg/exec';
const driveFolderUrl = "https://drive.google.com/drive/folders/1Yj5zDY-j68gUI9kwHvzTOWipZ2IuwAfM?usp=drive_link";

function getDirectImageUrl(url) {
    if (!url) return '';
    const match = url.match(/id=([a-zA-Z0-9_-]+)/) || url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) { return `https://drive.google.com/uc?export=view&id=${match[1]}`; }
    return url;
}

function getFallbackUrl(url) {
    if (!url) return '';
    const match = url.match(/id=([a-zA-Z0-9_-]+)/) || url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) { return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w800`; }
    return url;
}

// פונקציה לשליפת שם נקי (ללא קוד HTML שנמצא בתוך השם) לטובת זיהוי חכם
function getCleanName(htmlString) {
    if (!htmlString) return '';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    if (tempDiv.childNodes.length > 0 && tempDiv.childNodes[0].nodeType === 3) {
        return tempDiv.childNodes[0].nodeValue.trim();
    }
    return tempDiv.innerText.trim();
}

let currentEditingPerson = null;
let svgConnections = [];
let scale = 0.55, pointX = 0, pointY = 0;

// בניית מילון חכם לחיפוש אנשים מהענן לפי מזהים או שמות
function buildCloudMap(cloudData, mapById, mapByName) {
    if (!cloudData) return;
    const add = p => {
        if (!p) return;
        if (p.id && !p.id.startsWith('node-')) mapById.set(p.id, p);
        
        if (p.heb) {
            if (p.originalHeb) mapByName.set(p.originalHeb.trim(), p);
            mapByName.set(getCleanName(p.heb), p);
        }
    };
    if (cloudData.blood) add(cloudData.blood);
    if (cloudData.spouse) add(cloudData.spouse);
    if (cloudData.nodes) cloudData.nodes.forEach(add);
    if (cloudData.children) cloudData.children.forEach(c => buildCloudMap(c, mapById, mapByName));
}

// שפיכת הנתונים מהענן לתוך המבנה המקומי של data.js בלי לשבור את המבנה החדש
function applyCloudDataToLocal(localData, mapById, mapByName) {
    if (!localData) return;
    if (Array.isArray(localData)) {
        localData.forEach(item => applyCloudDataToLocal(item.tree || item, mapById, mapByName));
        return;
    }

    const updatePerson = p => {
        if (!p) return;
        let cloudMatch = null;
        
        if (p.id && !p.id.startsWith('node-')) {
            cloudMatch = mapById.get(p.id);
        }
        
        if (!cloudMatch && p.heb) {
            cloudMatch = mapByName.get(getCleanName(p.heb));
        }
        
        if (cloudMatch) {
            const fields = ['heb', 'eng', 'birth', 'death', 'gender', 'customImage', 'perished', 'images', 'files', 'story', 'tag', 'originalHeb'];
            fields.forEach(f => {
                if (cloudMatch[f] !== undefined && cloudMatch[f] !== null && cloudMatch[f] !== "") {
                    // התעלמות מקישורי תמונות שבורים
                    if (f === 'customImage' && cloudMatch[f].includes('undefined')) return;
                    
                    // שמירה על מבנה HTML במידה ויש קוביות מרחפות בקובץ המקומי שעדיין לא התעדכנו לענן
                    if (f === 'heb') {
                        if (p.heb && p.heb.includes('<div') && (!cloudMatch.heb || !cloudMatch.heb.includes('<div'))) {
                            let htmlPart = p.heb.substring(p.heb.indexOf('<div'));
                            p.heb = getCleanName(cloudMatch.heb) + "\n" + htmlPart;
                            return;
                        }
                    }
                    p[f] = cloudMatch[f];
                }
            });
        }
    };

    if(localData.blood) updatePerson(localData.blood);
    if(localData.spouse) updatePerson(localData.spouse);
    if(localData.nodes) localData.nodes.forEach(updatePerson);
    if(localData.children) localData.children.forEach(c => applyCloudDataToLocal(c, mapById, mapByName));
}

fetch(WEB_APP_URL)
    .then(r => r.json())
    .then(data => {
        const dataString = JSON.stringify(data);
        const hasOldLocalLinks = dataString.includes('Downloads/') || dataString.includes('03-לנדוור');
        
        if(data && data.fogel && data.landwehr && !hasOldLocalLinks) {
            const mapById = new Map();
            const mapByName = new Map();
            
            const processCloud = (c) => {
                if (Array.isArray(c)) c.forEach(item => buildCloudMap(item.tree || item, mapById, mapByName));
                else buildCloudMap(c, mapById, mapByName);
            };
            
            processCloud(data.fogel);
            processCloud(data.landwehr);
            if (data.dawid) processCloud(data.dawid);

            applyCloudDataToLocal(treeDataFogel, mapById, mapByName);
            applyCloudDataToLocal(treeDataLandwehr, mapById, mapByName);
            if (typeof treeDataDawid !== 'undefined') applyCloudDataToLocal(treeDataDawid, mapById, mapByName);
            
            document.getElementById('loadingStatus').textContent = 'סונכרן בהצלחה ✅';
            document.getElementById('loadingStatus').style.color = 'green';
        } else {
            saveToDrive();
            document.getElementById('loadingStatus').textContent = 'עודכן ונשמר לענן ✅';
            document.getElementById('loadingStatus').style.color = 'green';
        }
        document.getElementById('initial-loader').style.display = 'none';
        renderTree();
    }).catch(e => {
        console.error("Fetch Error:", e);
        document.getElementById('loadingStatus').textContent = 'עובד ללא סנכרון ⚠️';
        document.getElementById('initial-loader').style.display = 'none';
        renderTree();
    });

function renderTree() {
    svgConnections = [];
    document.getElementById('treeFogel').innerHTML = '';
    document.getElementById('treeLandwehr').innerHTML = '';

    const rootUlFogel = document.createElement('ul');
    rootUlFogel.appendChild(buildTreeNode(treeDataFogel));
    document.getElementById('treeFogel').appendChild(rootUlFogel);
    
    const rootUlLandwehr = document.createElement('ul');
    treeDataLandwehr.forEach(tree => rootUlLandwehr.appendChild(buildTreeNode(tree)));
    document.getElementById('treeLandwehr').appendChild(rootUlLandwehr);

    resetDefaultView();
    setTimeout(() => { fitToScreen(); }, 100);
}

function createPersonBox(personData, roleClass, colorClass) {
    const div = document.createElement('div');
    const extraClass = personData.cousinWife ? 'cousin-wife' : '';
    const genderClass = personData.gender === 'female' ? 'female-node' : (personData.gender === 'male' ? 'male-node' : '');
    div.className = `person ${roleClass} ${extraClass} ${colorClass} ${genderClass}`;
    if (personData.id) div.id = personData.id;
    
    const hasMedia = (personData.images && personData.images.length) || (personData.files && personData.files.length) || personData.story;
    let customImgHtml = '';
    
    let finalImgUrl = personData.customImage || (personData.images && personData.images.length > 0 ? personData.images[0] : (personData.image || null));
    
    if (finalImgUrl) {
        if (finalImgUrl.includes('http')) {
            const directUrl = getDirectImageUrl(finalImgUrl);
            const fallbackUrl = getFallbackUrl(finalImgUrl);
            const ts = new Date().getTime();
            customImgHtml = `<img src="${directUrl}&t=${ts}" onerror="this.onerror=null;this.src='${fallbackUrl}&t=${ts}';" style="width:40px; height:40px; border-radius:50%; object-fit:cover; margin-bottom:5px; border:2px solid rgba(0,0,0,0.2);" onload="drawSVGConnections()">`;
        } else {
            customImgHtml = `<img src="${finalImgUrl}" style="width:40px; height:40px; border-radius:50%; object-fit:cover; margin-bottom:5px; border:2px solid rgba(0,0,0,0.2); display:none;" onload="this.style.display='block'; drawSVGConnections();" onerror="this.style.display='none';">`;
        }
    }
    
    let datesHtml = '';
    let b = personData.birth ? personData.birth.trim() : '';
    let d = personData.death ? personData.death.trim() : '';
    if (b || d) datesHtml = `<div class="node-dates">${d ? `${b} - ${d}` : b}</div>`;
    
    let starHtml = personData.perished ? `<div class="holocaust-icon" title="נרצח/ה בשואה"></div>` : '';
    
    div.innerHTML = `${starHtml}${customImgHtml}<div class="heb">${personData.heb}</div><div class="eng">${personData.eng || ''}</div>${datesHtml}${personData.tag ? `<div class="tag">${personData.tag}</div>` : ''}${hasMedia ? `<div class="has-media">📄 מידע וקבצים</div>` : ''}`;
    
    div.addEventListener('click', (e) => { e.stopPropagation(); openModal(personData); });
    return div;
}

function createBridge(bridgeId) {
    const bridge = document.createElement('div');
    bridge.className = 'marriage-bridge';
    if (bridgeId) bridge.id = bridgeId;
    bridge.innerHTML = `<span class="m-text">בעל ואישה</span><div class="m-line"></div><span class="m-text">husband & wife</span>`;
    return bridge;
}

function buildTreeNode(item) {
    const li = document.createElement('li');
    li.dataset.defaultExpanded = item.defaultExpanded === true ? 'true' : 'false';
    if (item.customSvgRow) li.classList.add('custom-svg-row');
    if (item.rootId) li.id = item.rootId;
    
    const unit = document.createElement('div');
    unit.className = 'family-unit';
    if (item.id) unit.id = item.id;

    if (item.type === 'single') {
        item.blood.id = item.blood.id || 'node-' + Math.random().toString(36).substr(2, 9);
        unit.appendChild(createPersonBox(item.blood, 'blood', item.color));
    } else if (item.type === 'couple') {
        item.blood.id = item.blood.id || 'node-' + Math.random().toString(36).substr(2, 9);
        item.bridgeId = item.bridgeId || 'bridge-' + Math.random().toString(36).substr(2, 9);
        const bloodBox = createPersonBox(item.blood, 'blood', item.color);
        const spouseBox = createPersonBox(item.spouse, 'spouse', item.color);
        const bridge = createBridge(item.bridgeId);

        if (item.spouseSide === 'left') {
            unit.appendChild(spouseBox); unit.appendChild(bridge); unit.appendChild(bloodBox);
        } else {
            unit.appendChild(bloodBox); unit.appendChild(bridge); unit.appendChild(spouseBox);
        }
    } else if (item.type === 'multi') {
        item.nodes.forEach((n, idx) => {
            n.id = n.id || 'node-' + Math.random().toString(36).substr(2, 9);
            unit.appendChild(createPersonBox(n, n.role, item.color));
            if (idx < item.nodes.length - 1) unit.appendChild(createBridge());
        });
    }

    li.appendChild(unit);

    if (item.children && item.children.length > 0) {
        unit.classList.add('has-children');
        const isExpanded = item.defaultExpanded === true;
        if (!isExpanded) li.classList.add('collapsed');
        
        const badge = document.createElement('span');
        badge.className = 'toggle-badge';
        badge.textContent = isExpanded ? '-' : '+';
        unit.appendChild(badge);
        
        const ul = document.createElement('ul');
        const childIds = item.children.map(child => {
            if (child.type === 'multi') {
                const blood = child.nodes.find(n => n.role === 'blood') || child.nodes[0];
                blood.id = blood.id || 'node-' + Math.random().toString(36).substr(2, 9);
                return blood.id;
            } else {
                child.blood.id = child.blood.id || 'node-' + Math.random().toString(36).substr(2, 9);
                return child.blood.id;
            }
        });

        let sourceId;
        if (item.type === 'couple') sourceId = item.bridgeId;
        else if (item.type === 'multi') {
            const b = item.nodes.find(n => n.role === 'blood');
            sourceId = b ? b.id : item.nodes[0].id;
        } else {
            sourceId = item.blood.id;
        }

        svgConnections.push({ parentElId: sourceId, childElIds: childIds, liElement: li });
        item.children.forEach(child => ul.appendChild(buildTreeNode(child)));
        li.appendChild(ul);
        
        badge.addEventListener('click', (e) => {
            e.stopPropagation();
            li.classList.toggle('collapsed');
            badge.textContent = li.classList.contains('collapsed') ? '+' : '-';
            drawSVGConnections();
        });
    }
    return li;
}

function drawSVGConnections() {
    const canvas = document.getElementById('canvas');
    const svg = document.getElementById('svg-lines');
    if(!svg) return;
    const canvasRect = canvas.getBoundingClientRect();
    svg.style.width = canvas.scrollWidth + 'px';
    svg.style.height = canvas.scrollHeight + 'px';
    svg.innerHTML = '';

    function getNativeCoords(el) {
        const r = el.getBoundingClientRect();
        return {
            x: (r.left - canvasRect.left) / scale + (r.width / scale / 2),
            y: (r.top - canvasRect.top) / scale,
            bottom: (r.bottom - canvasRect.top) / scale,
            height: r.height / scale
        };
    }

    function drawOrthogonalTreeLines(sourceId, targetIds, railOffsetFromChildrenTop, strokeColor, strokeWidth, dashArray) {
        const sourceEl = document.getElementById(sourceId);
        if (!sourceEl || sourceEl.offsetWidth === 0) return;

        const validTargets = targetIds.map(id => document.getElementById(id)).filter(el => el && el.offsetWidth > 0);
        if (validTargets.length === 0) return;

        const sourceCoords = getNativeCoords(sourceEl);
        const startX = sourceCoords.x;
        let startY;
        
        if (sourceEl.classList.contains('marriage-bridge')) {
            startY = sourceCoords.y + (sourceCoords.height / 2);
        } else {
            startY = sourceCoords.bottom;
        }

        const childCoords = validTargets.map(el => getNativeCoords(el));
        const minChildY = Math.min(...childCoords.map(c => c.y));
        const railY = minChildY - railOffsetFromChildrenTop;

        const allX = [startX, ...childCoords.map(c => c.x)];
        const minX = Math.min(...allX);
        const maxX = Math.max(...allX);

        function addPath(d) {
            const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            p.setAttribute('d', d);
            p.setAttribute('stroke', strokeColor);
            p.setAttribute('stroke-width', strokeWidth);
            p.setAttribute('fill', 'none');
            if (dashArray) p.setAttribute('stroke-dasharray', dashArray);
            svg.appendChild(p);
        }

        addPath(`M ${startX} ${startY} L ${startX} ${railY}`);
        if (minX !== maxX) addPath(`M ${minX} ${railY} L ${maxX} ${railY}`);
        childCoords.forEach(c => addPath(`M ${c.x} ${railY} L ${c.x} ${c.y}`));
    }

    svgConnections.forEach(conn => {
        if (conn.liElement && conn.liElement.classList.contains('collapsed')) return;
        drawOrthogonalTreeLines(conn.parentElId, conn.childElIds, 32, '#222', '2', null);
    });

    // Special cousin/family lines
    drawOrthogonalTreeLines('bridge-fredel-josef', ['box-mina', 'box-inda-lea'], 58, '#111111', '2', null);
    drawOrthogonalTreeLines('bridge-landwehr-parents', ['box-sima', 'box-nava'], 40, '#b45309', '2.8', null);
}

const canvasEl = document.getElementById('canvas');
if (typeof ResizeObserver !== 'undefined' && canvasEl) {
    const resizeObserver = new ResizeObserver(() => { drawSVGConnections(); });
    resizeObserver.observe(canvasEl);
}

function openModal(person) {
    currentEditingPerson = person;
    
    // Handle inline HTML in name (like the floating parents)
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = person.heb;
    const cleanName = tempDiv.childNodes[0].nodeValue ? tempDiv.childNodes[0].nodeValue.trim() : tempDiv.innerText.trim();
    
    document.getElementById('modal-title').textContent = cleanName + (person.eng ? ` (${person.eng})` : '');
    document.getElementById('modal-story').innerHTML = person.story || 'אין הערות מחקר ספציפיות נוספות עבור כרטיס זה.';
    
    let datesText = [];
    if(person.birth) datesText.push(`שנת לידה: ${person.birth}`);
    if(person.death) datesText.push(`שנת פטירה: ${person.death}`);
    document.getElementById('modal-dates').textContent = datesText.join(' | ');
    
    const profileImg = document.getElementById('modal-profile-img');
    let finalImgUrl = person.customImage || (person.images && person.images.length > 0 ? person.images[0] : (person.image || null));
    
    if (finalImgUrl) {
        if (finalImgUrl.includes('http')) {
            const ts = new Date().getTime();
            profileImg.src = `${getDirectImageUrl(finalImgUrl)}&t=${ts}`;
            profileImg.onerror = function() { this.onerror = null; this.src = `${getFallbackUrl(finalImgUrl)}&t=${ts}`; };
        } else {
            profileImg.src = finalImgUrl;
            profileImg.onerror = function() { this.style.display = 'none'; };
        }
        profileImg.style.display = 'block';
    } else {
        profileImg.style.display = 'none';
    }
    
    const imgSection = document.getElementById('image-section');
    const imgsContainer = document.getElementById('modal-images');
    imgsContainer.innerHTML = '';
    
    if (person.images && person.images.length > 0) {
        person.images.forEach(imgSrc => {
            const a = document.createElement('a'); a.href = imgSrc; a.target = '_blank';
            const img = document.createElement('img'); img.className = 'modal-img';
            const ts = new Date().getTime();
            img.src = `${getDirectImageUrl(imgSrc)}&t=${ts}`;
            img.onerror = function() { this.onerror = null; this.src = `${getFallbackUrl(imgSrc)}&t=${ts}`; };
            a.appendChild(img); imgsContainer.appendChild(a);
        });
        imgSection.style.display = 'block';
    } else {
        imgSection.style.display = 'none';
    }
    
    const filesContainer = document.getElementById('modal-files');
    filesContainer.innerHTML = '';
    if (person.files && person.files.length > 0) {
        person.files.forEach(f => {
            const a = document.createElement('a'); a.className = 'file-link'; a.href = f.path; a.target = '_blank'; a.textContent = `🔗 ${f.name}`; filesContainer.appendChild(a);
        });
    } else {
        filesContainer.innerHTML = '<span style="color: #666; font-size: 13px;">אין קבצים אישיים.</span>';
    }
    
    const globalContainer = document.getElementById('global-files');
    if(globalContainer.innerHTML === '') {
        const globalArchiveFiles = [
            { name: "תיקיית Google Drive המלאה של הארכיון", path: driveFolderUrl },
            { name: "00-קראו-אותי.txt (מדריך הארכיון המלא)", path: "https://drive.google.com/file/d/1r5ctjXz-s5ogfpdvDGz4t8GOZqNEnf-w/view?usp=drivesdk" },
            { name: "01-עצים / Family Tree-print-poster.pdf", path: "https://drive.google.com/file/d/1KgSHz2mMJ_5KkYP4OE882ZzKQW-Y0Tvp/view?usp=drivesdk" },
            { name: "02-פוגל / פוגל-דף-הנצחה.pdf", path: "https://drive.google.com/file/d/1LXAkkSLRvkq6YUasl10JvXQLVUBJOqZU/view?usp=drivesdk" },
            { name: "03-לנדוור / דף הקראת שמות מעודכן עם תמונות.pdf", path: "https://drive.google.com/file/d/1XSbmG457Ik6_CFm36Pp46rRVbjuYA6LQ/view?usp=drivesdk" }
        ];
        globalArchiveFiles.forEach(f => {
            const a = document.createElement('a'); a.className = 'file-link'; a.href = f.path; a.target = '_blank'; a.textContent = `📂 ${f.name}`; globalContainer.appendChild(a);
        });
    }
    
    document.getElementById('modal-body').style.display = 'flex';
    document.getElementById('modal-edit').style.display = 'none';
    document.getElementById('modal-overlay').style.display = 'flex';
}

function enterEditMode() {
    document.getElementById('modal-body').style.display = 'none';
    document.getElementById('modal-edit').style.display = 'block';
    
    const cleanName = getCleanName(currentEditingPerson.heb);

    document.getElementById('editNameHeb').value = cleanName || '';
    document.getElementById('editNameEng').value = currentEditingPerson.eng || '';
    document.getElementById('editBirth').value = currentEditingPerson.birth || '';
    document.getElementById('editDeath').value = currentEditingPerson.death || '';
    document.getElementById('editImage').value = '';
    document.getElementById('editPerished').checked = currentEditingPerson.perished === true;
    
    if (currentEditingPerson.gender === 'female') document.querySelector('input[name="editGender"][value="female"]').checked = true;
    else if (currentEditingPerson.gender === 'male') document.querySelector('input[name="editGender"][value="male"]').checked = true;
    else document.querySelectorAll('input[name="editGender"]').forEach(el => el.checked = false);
}

function cancelEdit() {
    document.getElementById('modal-edit').style.display = 'none';
    document.getElementById('modal-body').style.display = 'flex';
}

function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; }

const compressImage = async (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = event => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const maxWidth = 500;
                let width = img.width;
                let height = img.height;
                if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                }
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', 0.8));
            };
            img.onerror = () => reject('שגיאה בפענוח התמונה');
        };
        reader.onerror = () => reject('שגיאה בקריאת הקובץ');
    });
};

async function saveEdit() {
    let newHeb = document.getElementById('editNameHeb').value;
    
    // שמירת השם המקורי לפני עריכה, לטובת זיהוי עתידי (מיזוג חכם)
    if (!currentEditingPerson.originalHeb) {
        currentEditingPerson.originalHeb = getCleanName(currentEditingPerson.heb);
    }

    if(currentEditingPerson.heb && currentEditingPerson.heb.includes('<div')) {
        let htmlPart = currentEditingPerson.heb.substring(currentEditingPerson.heb.indexOf('<div'));
        currentEditingPerson.heb = newHeb + "\n" + htmlPart;
    } else {
        currentEditingPerson.heb = newHeb;
    }

    currentEditingPerson.eng = document.getElementById('editNameEng').value;
    currentEditingPerson.birth = document.getElementById('editBirth').value;
    currentEditingPerson.death = document.getElementById('editDeath').value;
    currentEditingPerson.perished = document.getElementById('editPerished').checked;
    
    const genderEl = document.querySelector('input[name="editGender"]:checked');
    if (genderEl) currentEditingPerson.gender = genderEl.value;

    const fileInput = document.getElementById('editImage');
    if (fileInput.files.length > 0) {
        document.getElementById('uploadStatus').style.display = 'block';
        document.getElementById('uploadStatus').textContent = 'מכווץ ושומר בענן...';
        try {
            const file = fileInput.files[0];
            const base64 = await compressImage(file);
            const uploadResponse = await fetch(WEB_APP_URL, {
                method: 'POST',
                body: JSON.stringify({ action: 'uploadImage', base64: base64, mimeType: 'image/jpeg', personName: newHeb })
            });
            const textResp = await uploadResponse.text();
            let uploadResult;
            try { uploadResult = JSON.parse(textResp); } catch(e) { throw new Error(textResp); }
            
            if (uploadResult && uploadResult.id) {
                let oldImg = currentEditingPerson.customImage || (currentEditingPerson.images && currentEditingPerson.images.length > 0 ? currentEditingPerson.images[0] : null);
                if (oldImg && !oldImg.includes('undefined')) {
                    if (!currentEditingPerson.files) currentEditingPerson.files = [];
                    if (!currentEditingPerson.files.some(f => f.path === oldImg)) currentEditingPerson.files.push({ name: `תמונה ישנה בארכיון - ${newHeb}`, path: oldImg });
                }
                currentEditingPerson.customImage = `https://drive.google.com/uc?export=view&id=${uploadResult.id}`;
                currentEditingPerson.images = [];
            } else {
                alert('שגיאה מהשרת: ' + (uploadResult.error || 'לא התקבל לינק.'));
                document.getElementById('uploadStatus').style.display = 'none';
                return;
            }
        } catch(e) {
            alert('שגיאה בהעלאת התמונה: ' + e.message);
            document.getElementById('uploadStatus').style.display = 'none';
            return;
        }
        document.getElementById('uploadStatus').style.display = 'none';
    }
    await saveToDrive();
    closeModal();
    renderTree();
}

async function saveToDrive() {
    try {
        document.getElementById('loadingStatus').textContent = 'שומר... ☁️';
        document.getElementById('loadingStatus').style.color = '#b83b5e';
        await fetch(WEB_APP_URL, {
            method: 'POST',
            body: JSON.stringify({ action: 'saveConfig', data: { fogel: treeDataFogel, landwehr: treeDataLandwehr } })
        });
        document.getElementById('loadingStatus').textContent = 'שמור בענן ✅';
        document.getElementById('loadingStatus').style.color = 'green';
    } catch(e) {
        console.error(e);
        document.getElementById('loadingStatus').textContent = 'שגיאת שמירה ❌';
    }
}

function resetDefaultView() {
    document.querySelectorAll('.tree li').forEach(li => {
        if (li.querySelector(':scope > ul')) {
            const shouldExpand = li.dataset.defaultExpanded === 'true';
            const badge = li.querySelector(':scope > .family-unit > .toggle-badge');
            if (shouldExpand) {
                li.classList.remove('collapsed');
                if (badge) badge.textContent = '-';
            } else {
                li.classList.add('collapsed');
                if (badge) badge.textContent = '+';
            }
        }
    });
    fitToScreen();
}

function expandAll() {
    document.querySelectorAll('.tree li.collapsed').forEach(li => {
        li.classList.remove('collapsed');
        const badge = li.querySelector(':scope > .family-unit > .toggle-badge');
        if (badge) badge.textContent = '-';
    });
    fitToScreen();
}

function collapseAll() {
    document.querySelectorAll('.tree > ul > li li').forEach(li => {
        if (li.querySelector(':scope > ul')) {
            li.classList.add('collapsed');
            const badge = li.querySelector(':scope > .family-unit > .toggle-badge');
            if (badge) badge.textContent = '+';
        }
    });
    fitToScreen();
}

function updateTransform() {
    if(!canvasEl) return;
    canvasEl.style.transition = 'none';
    canvasEl.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    drawSVGConnections();
    requestAnimationFrame(() => {
        canvasEl.style.transition = 'transform 0.06s ease-out';
    });
}

function zoom(delta, focalX, focalY) {
    const newScale = Math.min(Math.max(0.12, scale + delta), 2.5);
    if (newScale === scale) return;
    
    if (focalX !== undefined && focalY !== undefined) {
        const vpRect = document.getElementById('viewport').getBoundingClientRect();
        const cx = vpRect.left + vpRect.width / 2 + pointX;
        const cy = vpRect.top + pointY;
        const ratio = newScale / scale;
        pointX += (focalX - cx) * (1 - ratio);
        pointY += (focalY - cy) * (1 - ratio);
    }
    scale = newScale;
    updateTransform();
}

function fitToScreen() {
    if(!canvasEl) return;
    canvasEl.style.transform = 'none';
    drawSVGConnections();
    const rect = canvasEl.getBoundingClientRect();
    scale = Math.min(0.95, Math.max(0.16, (window.innerWidth * 0.94) / rect.width));
    pointX = 0;
    pointY = 20;
    updateTransform();
}

// Touch and mouse events
(function() {
    const vp = document.getElementById('viewport');
    if(!vp) return;
    let pinchDistance = null;
    let mobilePanning = false;
    let mStartX = 0;
    let mStartY = 0;

    vp.addEventListener('mousedown', function(e) {
        if (e.target.closest('.person') || e.target.closest('.toggle-badge') || e.target.closest('.toolbar') || e.target.closest('.legend') || e.target.closest('#modal-content')) return;
        mobilePanning = true;
        vp.classList.add('grabbing');
        mStartX = e.clientX - pointX;
        mStartY = e.clientY - pointY;
    });

    window.addEventListener('mousemove', function(e) {
        if (!mobilePanning || e.touches) return;
        pointX = e.clientX - mStartX;
        pointY = e.clientY - mStartY;
        updateTransform();
    });

    window.addEventListener('mouseup', function() {
        mobilePanning = false;
        vp.classList.remove('grabbing');
    });

    vp.addEventListener('wheel', function(e) {
        if (e.target.closest('#modal-content')) return;
        e.preventDefault();
        zoom(e.deltaY < 0 ? 0.08 : -0.08, e.clientX, e.clientY);
    }, { passive: false });

    vp.addEventListener('touchstart', function(e) {
        if (e.target.closest('.person') || e.target.closest('.toggle-badge') || e.target.closest('.toolbar') || e.target.closest('.legend') || e.target.closest('#modal-content')) {
            return;
        }
        if (e.touches.length === 1) {
            mobilePanning = true;
            mStartX = e.touches[0].clientX - pointX;
            mStartY = e.touches[0].clientY - pointY;
        } else if (e.touches.length === 2) {
            mobilePanning = false;
            pinchDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
        }
    }, {passive: false});

    vp.addEventListener('touchmove', function(e) {
        if (e.target.closest('.toolbar') || e.target.closest('.legend') || e.target.closest('#modal-content')) {
            return;
        }
        if (e.touches.length === 1 && mobilePanning) {
            e.preventDefault();
            pointX = e.touches[0].clientX - mStartX;
            pointY = e.touches[0].clientY - mStartY;
            updateTransform();
        } else if (e.touches.length === 2 && pinchDistance !== null) {
            e.preventDefault();
            const currentDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            const delta = (currentDist - pinchDistance) * 0.005;
            const focalX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
            const focalY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
            zoom(delta, focalX, focalY);
            pinchDistance = currentDist;
        }
    }, {passive: false});

    vp.addEventListener('touchend', function(e) {
        if (e.touches.length === 0) {
            mobilePanning = false;
            pinchDistance = null;
        } else if (e.touches.length === 1) {
            mobilePanning = true;
            mStartX = e.touches[0].clientX - pointX;
            mStartY = e.touches[0].clientY - pointY;
            pinchDistance = null;
        }
    });
})();

function exportTreeAsImage(mode) {
    var loader = document.getElementById('snapshot-loader');
    var loaderText = document.getElementById('loader-text');
    
    document.body.classList.remove('print-basic', 'printing-export');
    loader.style.display = 'flex';
    loaderText.textContent = "מכין את העץ לצילום איכותי... ⏳";

    document.body.classList.add('printing-export');
    if (mode === 'basic') {
        document.body.classList.add('print-basic');
    }

    var canvas = document.getElementById('canvas');
    var oldScale = scale;
    var oldX = pointX;
    var oldY = pointY;

    scale = 1;
    pointX = 0;
    pointY = 0;
    canvas.style.transition = 'none';
    canvas.style.transform = 'none';
    if (typeof drawSVGConnections === 'function') drawSVGConnections();

    setTimeout(function() {
        var w = canvas.scrollWidth;
        var h = canvas.scrollHeight;
        var svg = document.getElementById('svg-lines');
        svg.style.width = w + 'px';
        svg.style.height = h + 'px';
        if (typeof drawSVGConnections === 'function') drawSVGConnections();

        loaderText.textContent = "מצלם את כל הענפים והקווים... 📸";

        html2canvas(canvas, {
            scale: 1.5,
            useCORS: true,
            allowTaint: false,
            backgroundColor: '#f4f6f9',
            width: w,
            height: h,
            windowWidth: w,
            windowHeight: h,
            onclone: function(clonedDoc) {
                var imgs = clonedDoc.querySelectorAll('.person img');
                for(var i = 0; i < imgs.length; i++) {
                    var img = imgs[i];
                    if (img.src && img.src.indexOf('drive.google.com') !== -1) {
                        img.src = 'https://images.weserv.nl/?url=' + encodeURIComponent(img.src);
                    }
                }
            }
        }).then(function(renderedCanvas) {
            restoreView(oldScale, oldX, oldY, svg);
            loaderText.textContent = "פותח חלון שמירה... 💾";

            renderedCanvas.toBlob(function(blob) {
                loader.style.display = 'none';
                if (!blob) {
                    alert("שגיאה ביצירת הקובץ.");
                    return;
                }
                var filename = mode === 'basic' ? 'family-tree-basic.png' : 'family-tree-advanced.png';
                var url = URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                setTimeout(function() { URL.revokeObjectURL(url); }, 1000);
            }, 'image/png');
        }).catch(function(err) {
            console.error(err);
            restoreView(oldScale, oldX, oldY, svg);
            loader.style.display = 'none';
            alert("שגיאה ביצירת התמונה: " + err.message);
        });
    }, 600);
}

function restoreView(oldScale, oldX, oldY, svg) {
    document.body.classList.remove('print-basic', 'printing-export');
    svg.style.width = '100%';
    svg.style.height = '100%';
    scale = oldScale;
    pointX = oldX;
    pointY = oldY;
    updateTransform();
}

window.addEventListener('resize', () => { drawSVGConnections(); });
window.addEventListener('load', () => setTimeout(drawSVGConnections, 500));
