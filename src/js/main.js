import polyfills from './polyfills';
import detectTouch from './detectTouch';
import search from './search';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    search();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
