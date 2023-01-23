# JS Drum Kit

## How It Works

Let's hit the drums! The interface is pretty simple, just press a key to hit the corresponding sound.

## Description

The aim of this project is to make a specific drum sound related to the pressed key. 

It uses CSS transitions to obtain a more dynamic result and improve the user's experience. 

The logic is based on using the data-key attribute as a hook to relate both the pressed key element and the audio element. An event listener is applied to the window, so that whenever the keyCode matches the data-key attribute, it will hit the sound and run the CSS transition. 

## Javascript Used

* querySelector()
* addEventListener()
* data attribute
* window keyCode property
* HTML audio properties and methods
* forEach()
* classList
* CSS transitions
* transitionend event

## New things learned

Retrieving elements from the DOM is not limited to just "id", "class" and elements. You can also select DOM elements using its attributes.

When adding an event listener to the window, each key has a related number (keyCode) that we can use in Javascript for other actions. This website is quite useful to obtain each number: https://www.toptal.com/developers/keycode

We can stop a CSS transition and remove a certain class from Javascript, with the 'transitionend' event and the event's propertyName value.

The audio element has many properties and methods, such as currentTime or play().

## Solving a 'glitch'

I noticed that if you hold a key down during a certain amount of time, the CSS class gets added but is never removed, so the style changes permanently. 

To avoid it, I have applied the following solution: using `.toggle()` instead of `.add()` within the `addRemoveClass()` function. 

So instead of `element.classList.add('js-play')`, we will have `element.classList.toggle('js-play')`. 

## Credits

* [30 Day Vanilla JS Coding Challenge](https://javascript30.com/)
* [Possible solutions for 'glitch'](https://stackoverflow.com/questions/43966150/bug-with-transitionend-event-not-correctly-removing-a-css-class)
