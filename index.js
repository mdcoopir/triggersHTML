import {DOMExists} from 'triggersjs'
import {_autoInitToggle, _autoInitTriggers} from './Util/core.js'; 


export const trigger_hello = () => {
    return "Hello triggerjs!!!!"
}


// The selectorsParm is in the following format

// const attributes = {
//     name: 'default'
// }
// 
// The initializer build the css selectors from the name.  For example
//  the trigger html elemnent would have the attribute trigger=default
//  The target (or parent) would have the attribute target=default
//  The root would have the attribute tree_root=default

export const autoInitToggle = () => {
    return _autoInitToggle();
}

export const autoInitTriggers = () => {
    return _autoInitTriggers(window);
}

if(DOMExists) { 
    //  Auto init requires target and trigger attributes on html elements
    window.addEventListener("load", (event) => {
        console.log('window loaded')
        _autoInitToggle();
        _autoInitTriggers();

    })
}