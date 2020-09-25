/*const walk=document.querySelector('#walk');
const stop=document.querySelector('#stop');


let press = () => {
    const walk_on = document.querySelector('.on')
    const walk_off = document.querySelector('.off')

    if (walk_on.className === "on") {
        walk_off.className = 'off'
    } else {
        walk_on.className = 'off'
        walk_off.className = 'on'
    }

}*/
'use strict';

const btnElm = document.querySelector('.btn');

btnElm.addEventListener('click', () => {
    const stopElm = document.querySelector('#stop');
    const walkElm = document.querySelector('#walk');

    stopElm.className = 'light-stop-off light';
    walkElm.className = 'light-walk-on light';


    setTimeout(() => {
        stopElm.className = 'light-stop-on light';
        walkElm.className = 'light-walk-off light';
    }, 5000);
});