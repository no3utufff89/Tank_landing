'use strict';
// import jQuery from 'jquery';
// window.$ = window.jQuery = jQuery;
import * as functions from './modules/functions.js';
import * as actionControls from './modules/controls/control.js';
import * as builderFunctions from './modules/builder.js';
import { initialData } from '../files/carData.js';
import { colorChangeControl, overlayControl } from './modules/controls/btnsControl.js';
import { countDownTimer } from './modules/timer/timer.js';
import { pageElements } from './modules/pageElements.js';
import { fromControl } from './modules/controls/formControl.js';
const data = initialData;
const elements = pageElements();
window.addEventListener('load', function () {
    functions.isWebp();
    // functions.preventClickDefault($('form'));
});

window.addEventListener('resize', function () {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function () {
        // window resize functions
    }, 100);
});

let timer;
window.addEventListener(
    'scroll',
    function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            const pageOffset = Math.round(window.pageYOffset);
            pageOffset > 300
                ? document.body.classList.add('scrolled')
                : document.body.classList.remove('scrolled');
            // scroll functions
        }, 100);
    },
    false
);

functions.phoneMask();
actionControls.modalControl();
actionControls.carSelect(data);
builderFunctions.builder(data);
colorChangeControl();
countDownTimer();
overlayControl(elements);
fromControl(elements);
