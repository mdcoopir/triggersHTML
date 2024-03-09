import {initTriggers, initTriggerToggles, DOMExists} from 'triggersjs'

export const _autoInitToggle = (documentElement) => {
    document.querySelectorAll('[toggleInit]').forEach((el) => {
        const selectors = {
            classNames: el.getAttribute('toggleClasses').split(" "),
            name: el.hasAttribute('target') ? el.getAttribute('target'): 'default',
        }
        const triggerEvent = el.hasAttribute('triggerEvent') ? el.getAttribute('triggerEvent'): 'click';
        const triggerCallback = el.hasAttribute('triggerCallback') ? documentElement[el.getAttribute('triggerCallback')]: null;
        initTriggerToggles(selectorsParm, eventName, toggleCallback, documentElement)
    })
}
export const _autoInitTriggers = () => {
    console.log(`document.querySelectorAll([triggerInit]).length = ${window.document.querySelectorAll('[triggerInit]').length}`)
    window.document.querySelectorAll('[triggerInit]').forEach((el) => {
        const triggerName = el.hasAttribute('target') ? el.getAttribute('target'): 'default';
        const triggerEvent = el.hasAttribute('triggerEvent') ? el.getAttribute('triggerEvent'): 'click';
        console.log(`triggerName = ${triggerName}`)
        console.log(`triggerEvent = ${triggerEvent}`)
        const triggerCallbackSting = el.hasAttribute('triggerCallback') ? el.getAttribute('triggerCallback'): null;;
        const triggerCallback = triggerCallbackSting ? window[triggerCallbackSting]: null;
        console.log(`triggerCallbackString = ${triggerCallbackSting}`)
        console.log(`typeof triggerCallback = ${typeof triggerCallback}`);
        console.log(`window[trigerCallbackString] = ${window[triggerCallbackSting]}`);
        console.log(`\n\nwindow.document.getElementById('triggerScript').toggleClassesCallback = ${window.document.getElementById('triggerScript').toggleClassesCallback}`)
        initTriggers(triggerName, triggerEvent, triggerCallback, window.document);
    
    })    
}
