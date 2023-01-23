'use strict';

function removeTransition(ev) {
    if(ev.propertyName !== 'transform') return;
    this.classList.remove('js-play');
}

function addRemoveClass(element){
    //Add CSS class
    element.classList.toggle('js-play');
    //Select all key elements 
    const keysEl = document.querySelectorAll('.key');
    //Transition end ev for the added CSS class 
    keysEl.forEach(key => key.addEventListener('transitionend', removeTransition));
}

function playSound(ev) {
    const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
    //Stop function from running all together if audio equal to null
    if(!audio) return; 
    //Rewind audio to the start each time user presses key
    audio.currentTime = 0; 
    audio.play();
    addRemoveClass(key);
}

window.addEventListener("keydown", playSound);


//Personal solution
//Variables
/*const keysEl = document.querySelectorAll('.key');
const audiosEl = document.querySelectorAll('.audio');

function playSound(ev) {
    //First loop through key elements
    for(const key of keysEl){
        //Second loop through audio elements
        for(const audio of audiosEl){
            if(ev.keyCode === parseInt(key.dataset.key) && ev.keyCode === parseInt(audio.dataset.key)){
                //Play corresponding audio element with the same data-key
                audio.currentTime = 0; 
                audio.play();
                //Add CSS class to highlight pressed key
                key.classList.add('js-play');
                //Remove class after a certain time
                setTimeout(removeClass, 500);
                //Function to remove class from the pressed key
                function removeClass() {
                    key.classList.remove('js-play');
                }
                }
        }
    }
}

window.addEventListener("keydown", playSound);
*/