// ============================================
// פונקציית שמירת הפוסטר (מעודכן: תיקון קווים, ניקוי מצבים, ועקיפת חסימות תמונה)
// ============================================
function exportTreeAsImage(mode) {
    var loader = document.getElementById('snapshot-loader');
    var loaderText = document.getElementById('loader-text');
    
    // ניקוי מצבים קודמים שנתקעו כדי שהתאריכים והפרטים יופיעו כראוי במתקדם
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
                // מנגנון חכם לשאיבת תמונות חסומות מגוגל דרייב אל תוך הפוסטר המתקדם
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
                var filename = mode === 'basic' ? 'family-tree-v2.9-basic.png' : 'family-tree-v2.9-advanced.png';
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
