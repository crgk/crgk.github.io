'use strict';

function getPattern(count) {
    let s = "";

    for (let i=0; i < count; i++) {
        let r = Math.random();
        if (r > 0.5) {
            s += "\\";
        } else {
            s += "/";
        }
    }
    return s;
}

function createDiv() {
    let d = document.createElement('div');
    d.className = 'goto-background';
    return d;
}

(function() {
    let els = document.getElementsByClassName('goto-fill');

    for (let i=0; i < els.length; i++) {
        let el = els[i];

        let d = createDiv();

        // It should be count = (rowWidth / charWidth) * maxRows
        // but there's no reason to make it that precise.
        // There really isn't a reason for not just picking an arbitrarily
        // large number, either.
        let count = el.offsetWidth;
        
        d.innerText = getPattern(count);
        el.appendChild(d);
    }
})();
