// Version: v10.0 Upload Feature
/* =========================================
   LOGIC SECTION (App functionality)
   UNIQUE ID ENGINE, MULTIPLE UPLOADS, SYNC
========================================= */

const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxslzuCpMXxgEdtAhtCinEVYHJbZncXBT2ktiSHIXBoDz4ZEOypsutHLjYy9rAludDSOA/exec';

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

function getCleanName(htmlString) {
    if (!htmlString) return '';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    if (tempDiv.childNodes.length > 0 && tempDiv.childNodes[0].nodeType === 3) {
        return tempDiv.childNodes[0].nodeValue.trim();
    }
    return tempDiv.innerText.trim();
}

function getLettersOnly(str) {
    if(!str) return '';
    return str.replace(/[^a-zA-Z\u0590-\u05FF]/g, '');
}

let currentEditingPerson = null;
let contextTargetId = null;
let svgConnections = [];
let scale = 0.55, pointX = 0, pointY = 0;

function buildCloudMap(cloudData, mapById, mapByName) {
    if (!cloudData) return;
    const add = p => {
        if (!p) return;
        if (p.id && !p.id.startsWith('node-')) mapById.set(p.id, p);
        if (p.heb) {
            if (p.originalHeb) mapByName.set(getLettersOnly(p.originalHeb), p);
            mapByName.set(getLettersOnly(p.heb), p);
        }
        if (p.floatingParents) p.floatingParents.forEach(add);
        if (p.floatingSiblings) p.floatingSiblings.forEach(add);
    };
    if (cloudData.blood) add(cloudData.blood);
    if (cloudData.spouse) add(cloudData.spouse);
    if (cloudData.nodes) cloudData.nodes.forEach(add);
    if (cloudData.children) cloudData.children.forEach(c => buildCloudMap(c, mapById, mapByName));
}

function applyCloudDataToLocal(localData, mapById, mapByName) {
    if (!localData) return;
    if (Array.isArray(localData)) {
        localData.forEach(item => applyCloudDataToLocal(item.tree || item, mapById, mapByName));
        return;
    }

    const updatePerson = p => {
        if (!p) return;
        let cloudMatch = null;
        if (p.id && !p.id.startsWith('node-')) cloudMatch = mapById.get(p.id);
        if (!cloudMatch && p.heb) cloudMatch = mapByName.get(getLettersOnly(p.heb));
        
        if (cloudMatch) {
            const fields = ['heb', 'eng', 'birth', 'death', 'gender', 'customImage', 'perished', 'images', 'files', 'stories', 'tag', 'originalHeb'];
            fields.forEach(f => {
                if (cloudMatch[f] !== undefined && cloudMatch[f] !== null && cloudMatch[f] !== "") {
                    if (f === 'customImage' && cloudMatch[f].includes('undefined')) return;
                    p[f] = cloudMatch[f];
                }
            });
            if(cloudMatch.id) p.id = cloudMatch.id;
        }
        if (p.floatingParents) p.floatingParents.forEach(updatePerson);
        if (p.floatingSiblings) p.floatingSiblings.forEach(updatePerson);
    };

    if(localData.blood) updatePerson(localData.blood);
    if(localData.spouse) updatePerson(localData.spouse);
    if(localData.nodes) localData.nodes.forEach(updatePerson);
    if(localData.children) localData.children.forEach(c => applyCloudDataToLocal(c, mapById, mapByName));
}

fetch(WEB_APP_URL)
    .then(async r => {
        const text = await r.text();
        try { return JSON.parse(text); } 
        catch(e) { throw new Error("Invalid Server Response"); }
    })
    .then(data => {
        if (!data.images) {
            alert("⚠️ שגיאת סנכרון חמורה!\nהשרת של גוגל מריץ גרסה ישנה של הקוד, ולכן התמונות החדשות לא נשאבות.\nאנא חזור ל-Apps Script, מחק הכל, הדבק את הקוד החדש, ולחץ על Deploy -> New Deployment.");
            document.getElementById('loadingStatus').textContent = 'שגיאת שרת: לא מקוון ❌';
            document.getElementById('loadingStatus').style.color = 'red';
        } else {
            document.getElementById('loadingStatus').textContent = 'מסד ו-ID תמונות סונכרנו ✅';
            document.getElementById('loadingStatus').style.color = 'green';
        }
        
        let treeConfig = data.tree || data; 
        let dynamicImages = data.images || {};
        
        if(treeConfig.fogel && treeConfig.landwehr) {
            const mapById = new Map();
            const mapByName = new Map();
            const processCloud = (c) => {
                if (Array.isArray(c)) c.forEach(item => buildCloudMap(item.tree || item, mapById, mapByName));
                else buildCloudMap(c, mapById, mapByName);
            };
            processCloud(treeConfig.fogel);
            processCloud(treeConfig.landwehr);

            applyCloudDataToLocal(treeDataFogel, mapById, mapByName);
            applyCloudDataToLocal(treeDataLandwehr, mapById, mapByName);

            function applyDynamicImages(node) {
                if(!node) return;
                
                if (node.id && dynamicImages[node.id]) {
                    node.customImage = dynamicImages[node.id].url;
                } 
                else {
                    let cName = getLettersOnly(getCleanName(node.heb));
                    if (cName && dynamicImages[cName]) {
                        node.customImage = dynamicImages[cName].url;
                    }
                }
                
                if(node.floatingParents) node.floatingParents.forEach(applyDynamicImages);
                if(node.floatingSiblings) node.floatingSiblings.forEach(applyDynamicImages);
                if(node.blood) applyDynamicImages(node.blood);
                if(node.spouse) applyDynamicImages(node.spouse);
                if(node.nodes) node.nodes.forEach(applyDynamicImages);
                if(node.children) node.children.forEach(applyDynamicImages);
            }
            applyDynamicImages(treeDataFogel);
            treeDataLandwehr.forEach(applyDynamicImages);
        } else {
            saveToDrive();
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
    
    if (!personData.id) personData.id = 'node-' + Math.random().toString(36).substr(2, 9);
    div.id = personData.id;
    
    let customImgHtml = '';
    let finalImgUrl = personData.customImage || (personData.images && personData.images.length > 0 ? personData.images[0] : (personData.image || null));
    
    if (finalImgUrl) {
        if (finalImgUrl.includes('http')) {
            const directUrl = getDirectImageUrl(finalImgUrl);
            const fallbackUrl = getFallbackUrl(finalImgUrl);
            const ts = new Date().getTime();
            customImgHtml = `<img src="${directUrl}&t=${ts}" onerror="this.onerror=null;this.src='${fallbackUrl}&t=${ts}';" onload="drawSVGConnections()">`;
        } else {
            customImgHtml = `<img src="${finalImgUrl}" style="display:none;" onload="this.style.display='block'; drawSVGConnections();">`;
        }
    }
    
    let datesHtml = '';
    let b = personData.birth ? personData.birth.trim() : '';
    let d = personData.death ? personData.death.trim() : '';
    if (b || d) datesHtml = `<div class="node-dates">${d ? `${b} -${d}` : b}</div>`;
    
    let starHtml = personData.perished ? `<div class="holocaust-icon" title="נרצח/ה בשואה"></div>` : '';
    
    div.innerHTML = `${starHtml}${customImgHtml}<div class="heb">${personData.heb}</div><div class="eng">${personData.eng || ''}</div>${datesHtml}${personData.tag ? `<div class="tag">${personData.tag}</div>` : ''}`;
    
    div.onclick = function(e) {
        e.preventDefault(); 
        e.stopPropagation(); 
        openModal(personData); 
    };
    div.oncontextmenu = function(e) {
        e.preventDefault(); 
        e.stopPropagation();
        handleContextMenu(e, personData.id);
    };
    
    return div;
}

function applyFloating(personBox, personData, colorClass) {
    if ((!personData.floatingParents || personData.floatingParents.length !== 2) &&
        (!personData.floatingSiblings || personData.floatingSiblings.length === 0)) {
        return personBox;
    }

    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'center';
    wrapper.appendChild(personBox);

    if (personData.floatingParents && personData.floatingParents.length === 2) {
        const fpContainer = document.createElement('div');
        fpContainer.style.position = 'absolute';
        fpContainer.style.top = '-105px';
        fpContainer.style.left = '50%';
        fpContainer.style.transform = 'translateX(-50%)';
        fpContainer.style.display = 'flex';
        fpContainer.style.alignItems = 'center';
        fpContainer.style.zIndex = '10';

        const p1 = createPersonBox(personData.floatingParents[0], 'blood', colorClass);
        const bridgeId = 'bridge-' + Math.random().toString(36).substr(2, 9);
        const bridge = createBridge(bridgeId);
        const p2 = createPersonBox(personData.floatingParents[1], 'blood', colorClass);

        fpContainer.appendChild(p1);
        fpContainer.appendChild(bridge);
        fpContainer.appendChild(p2);
        wrapper.appendChild(fpContainer);

        svgConnections.push({
            customLine: true,
            type: 'verticalToParent',
            sourceId: bridgeId,
            targetId: personBox.id
        });
    }

    if (personData.floatingSiblings && personData.floatingSiblings.length > 0) {
        const sibBox = createPersonBox(personData.floatingSiblings[0], 'blood', colorClass);
        
        const sibContainer = document.createElement('div');
        sibContainer.style.position = 'absolute';
        sibContainer.style.top = '50%';
        sibContainer.style.left = '-140px'; 
        sibContainer.style.transform = 'translateY(-50%)';
        sibContainer.style.zIndex = '10';

        sibContainer.appendChild(sibBox);
        wrapper.appendChild(sibContainer);

        svgConnections.push({
            customLine: true,
            type: 'horizontal',
            sourceId: sibBox.id,
            targetId: personBox.id
        });
    }

    return wrapper;
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
    
    const unit = document.createElement('div');
    unit.className = 'family-unit';

    if (item.type === 'single') {
        if (!item.blood.id) item.blood.id = 'node-' + Math.random().toString(36).substr(2, 9);
        let bloodBox = createPersonBox(item.blood, 'blood', item.color);
        bloodBox = applyFloating(bloodBox, item.blood, item.color);
        unit.appendChild(bloodBox);
    } else if (item.type === 'couple') {
        if (!item.blood.id) item.blood.id = 'node-' + Math.random().toString(36).substr(2, 9);
        if (!item.spouse.id) item.spouse.id = 'node-' + Math.random().toString(36).substr(2, 9);
        if (!item.bridgeId) item.bridgeId = 'bridge-' + Math.random().toString(36).substr(2, 9);
        
        let bloodBox = createPersonBox(item.blood, 'blood', item.color);
        bloodBox = applyFloating(bloodBox, item.blood, item.color);
        
        let spouseBox = createPersonBox(item.spouse, 'spouse', item.color);
        spouseBox = applyFloating(spouseBox, item.spouse, item.color);
        
        const bridge = createBridge(item.bridgeId);

        if (item.spouseSide === 'left') { unit.appendChild(spouseBox); unit.appendChild(bridge); unit.appendChild(bloodBox); } 
        else { unit.appendChild(bloodBox); unit.appendChild(bridge); unit.appendChild(spouseBox); }
    } else if (item.type === 'multi') {
        item.nodes.forEach((n, idx) => {
            if (!n.id) n.id = 'node-' + Math.random().toString(36).substr(2, 9);
            let nBox = createPersonBox(n, n.role, item.color);
            nBox = applyFloating(nBox, n, item.color);
            unit.appendChild(nBox);
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
                if (!blood.id) blood.id = 'node-' + Math.random().toString(36).substr(2, 9);
                return blood.id; 
            } 
            else { 
                if (!child.blood.id) child.blood.id = 'node-' + Math.random().toString(36).substr(2, 9);
                return child.blood.id; 
            }
        });

        let sourceId;
        if (item.type === 'couple') sourceId = item.bridgeId;
        else if (item.type === 'multi') { sourceId = (item.nodes.find(n => n.role === 'blood') || item.nodes[0]).id; } 
        else { sourceId = item.blood.id; }

        svgConnections.push({ parentElId: sourceId, childElIds: childIds, liElement: li });
        item.children.forEach(child => ul.appendChild(buildTreeNode(child)));
        li.appendChild(ul);
        
        badge.onclick = function(e) {
            e.stopPropagation();
            li.classList.toggle('collapsed');
            badge.textContent = li.classList.contains('collapsed') ? '+' : '-';
            drawSVGConnections();
        };
    }
    return li;
}

function handleContextMenu(e, id) {
    contextTargetId = id;
    const menu = document.getElementById('context-menu');
    if(menu) {
        menu.style.display = 'block';
        let left = e.pageX; let top = e.pageY;
        if(left + 200 > window.innerWidth) left -= 150;
        menu.style.left = left + 'px';
        menu.style.top = top + 'px';
    }
}

document.addEventListener('click', () => { 
    const menu = document.getElementById('context-menu');
    if(menu) menu.style.display = 'none'; 
});

function findNodeInfo(dataArray, targetId) {
    for (let i = 0; i < dataArray.length; i++) {
        let node = dataArray[i];
        if (node.blood && node.blood.id === targetId) return { obj: node, array: dataArray, index: i, role: 'blood' };
        if (node.spouse && node.spouse.id === targetId) return { obj: node, array: dataArray, index: i, role: 'spouse' };
        if (node.nodes) {
            let found = node.nodes.find(n => n.id === targetId);
            if(found) return { obj: node, array: dataArray, index: i, role: 'multi' };
        }
        
        if (node.blood && node.blood.floatingParents) {
            let found = node.blood.floatingParents.find(n => n.id === targetId);
            if (found) return { floatingSource: node.blood, role: 'floatingParents', item: found };
        }
        if (node.spouse && node.spouse.floatingParents) {
            let found = node.spouse.floatingParents.find(n => n.id === targetId);
            if (found) return { floatingSource: node.spouse, role: 'floatingParents', item: found };
        }
        if (node.blood && node.blood.floatingSiblings) {
            let found = node.blood.floatingSiblings.find(n => n.id === targetId);
            if (found) return { floatingSource: node.blood, role: 'floatingSiblings', item: found };
        }
        if (node.spouse && node.spouse.floatingSiblings) {
            let found = node.spouse.floatingSiblings.find(n => n.id === targetId);
            if (found) return { floatingSource: node.spouse, role: 'floatingSiblings', item: found };
        }

        if (node.children && node.children.length > 0) {
            let res = findNodeInfo(node.children, targetId);
            if (res) return res;
        }
    }
    return null;
}

function contextAddChild() {
    let roots = [treeDataFogel, ...treeDataLandwehr];
    const res = findNodeInfo(roots, contextTargetId);
    if(res) {
        if(res.floatingSource) { alert("לא ניתן להוסיף ילדים לקרובים המרחפים. הוסף אותם כענף נפרד במערכת בעתיד."); return; }
        const childName = prompt("הכנס שם מלא של הילד/ה החדש/ה:");
        if(childName && childName.trim() !== '') {
            if(!res.obj.children) res.obj.children = [];
            res.obj.children.push({
                type: 'single', color: res.obj.color || 'c-blue', defaultExpanded: true,
                blood: { heb: childName.trim(), gender: 'male', id: 'node-' + Math.random().toString(36).substr(2, 9) }
            });
            saveToDrive();
            renderTree();
        }
    }
}

function contextAddSpouse() {
    let roots = [treeDataFogel, ...treeDataLandwehr];
    const res = findNodeInfo(roots, contextTargetId);
    if(res) {
        if(res.floatingSource) { alert("לא ניתן להוסיף בני זוג לקרובים המרחפים."); return; }
        if(res.obj.type === 'single') {
            const spouseName = prompt("הכנס שם של בן/בת הזוג להוספה:");
            if(spouseName && spouseName.trim() !== '') {
                res.obj.type = 'couple';
                res.obj.spouse = { heb: spouseName.trim(), gender: 'female', id: 'node-' + Math.random().toString(36).substr(2, 9) };
                saveToDrive();
                renderTree();
            }
        } else {
            alert("לאדם זה מוגדר כבר בן/בת זוג בעץ.");
        }
    }
}

function contextDeleteNode() {
    let roots = [treeDataFogel, ...treeDataLandwehr];
    const res = findNodeInfo(roots, contextTargetId);
    if(res) {
        if(res.floatingSource) { alert("לא ניתן למחוק קרוב משפחה מרחף דרך תפריט זה."); return; }
        if(res.array === roots && res.index === 0) { alert("לא ניתן למחוק את שורש העץ. פעולה חסומה."); return; }
        
        const pass = prompt("אזהרה! פעולה זו תמחק את האדם ואת כל צאצאיו (ענף שלם) לנצח.\nאנא הכנס סיסמת אישור מחיקה:");
        if(pass === "050882") {
            res.array.splice(res.index, 1);
            saveToDrive();
            renderTree();
        } else if (pass !== null) {
            alert("סיסמא שגויה. פעולת המחיקה בוטלה.");
        }
    }
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
            height: r.height / scale,
            width: r.width / scale
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
            p.setAttribute('d', d); p.setAttribute('stroke', strokeColor); p.setAttribute('stroke-width', strokeWidth); p.setAttribute('fill', 'none');
            svg.appendChild(p);
        }

        addPath(`M ${startX} ${startY} L ${startX} ${railY}`);
        if (minX !== maxX) addPath(`M ${minX} ${railY} L ${maxX} ${railY}`);
        childCoords.forEach(c => addPath(`M ${c.x} ${railY} L ${c.x} ${c.y}`));
    }

    svgConnections.forEach(conn => {
        if (conn.customLine && conn.type === 'horizontal') {
            const sEl = document.getElementById(conn.sourceId);
            const tEl = document.getElementById(conn.targetId);
            if(sEl && tEl) {
                const sC = getNativeCoords(sEl); const tC = getNativeCoords(tEl);
                const y = sC.y + (sC.height / 2);
                const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                p.setAttribute('d', `M ${sC.x + (sC.width/2)} ${y} L ${tC.x - (tC.width/2)} ${y}`);
                p.setAttribute('stroke', '#475569'); p.setAttribute('stroke-width', '2'); p.setAttribute('fill', 'none');
                svg.appendChild(p);
            }
            return;
        }
        
        if (conn.customLine && conn.type === 'verticalToParent') {
            const sEl = document.getElementById(conn.sourceId);
            const tEl = document.getElementById(conn.targetId);
            if(sEl && tEl) {
                const sC = getNativeCoords(sEl); const tC = getNativeCoords(tEl);
                const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                p.setAttribute('d', `M ${sC.x} ${sC.bottom} L ${tC.x} ${tC.y}`);
                p.setAttribute('stroke', '#475569'); p.setAttribute('stroke-width', '2'); p.setAttribute('fill', 'none');
                svg.appendChild(p);
            }
            return;
        }

        if (conn.liElement && conn.liElement.classList.contains('collapsed')) return;
        drawOrthogonalTreeLines(conn.parentElId, conn.childElIds, 32, '#222', '2', null);
    });

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
    
    const cleanName = getCleanName(person.heb);
    const titleEl = document.getElementById('modal-title');
    if (titleEl)
