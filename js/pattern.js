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

(function() {
    let els = document.getElementsByClassName('pattern-box');

    for (let i=0; i < els.length; i++) {
        let el = els[i];

        // It should be count = (rowWidth / charWidth) * maxRows
        // but there's no reason to make it that precise.
        // There really isn't a reason for not just picking an arbitrarily
        // large number, either.
        let count = el.offsetWidth;
        
        el.innerText += getPattern(count);
    }
})();
