import {initTriggers, initTriggerToggles, DOMExists} from 'triggersjs'

export const _autoInitToggle = () => {
    window.document.querySelectorAll('[toggleInit]').forEach((el) => {
        const selectors = {
            classNames: el.getAttribute('toggleClasses').split(" "),
            name: el.hasAttribute('target') ? el.getAttribute('target'): 'default',
        }
        const triggerEvent = el.hasAttribute('triggerEvent') ? el.getAttribute('triggerEvent'): 'click';
        const toggleCallbackSting = el.hasAttribute('toggleCallback') ? el.getAttribute('toggleCallback'): null;
        const toggleCallback = toggleCallbackSting ? window[toggleCallbackSting]: (window["toggleCallback"] == undefined) ? null: window['toggleCallback'];
        if(toggleCallback == undefined && toggleCallback != null) throw(new Error('triggerCalback is not defined'))
        initTriggerToggles(selectors, triggerEvent, toggleCallback, window.document)
    })
}
export const _autoInitTriggers = () => {
    console.log(`document.querySelectorAll([triggerInit]).length = ${window.document.querySelectorAll('[triggerInit]').length}`)
    window.document.querySelectorAll('[triggerInit]').forEach((el) => {
        const triggerName = el.hasAttribute('target') ? el.getAttribute('target'): 'default';
        const triggerEvent = el.hasAttribute('triggerEvent') ? el.getAttribute('triggerEvent'): 'click';
        console.log(`triggerName = ${triggerName}`)
        console.log(`triggerEvent = ${triggerEvent}`)
        const triggerCallbackSting = el.hasAttribute('triggerCallback') ? el.getAttribute('triggerCallback'): null;
        const triggerCallback = triggerCallbackSting ? window[triggerCallbackSting]: (window["triggerCallback"] == undefined) ? null: window['triggerCallback'];
        if(triggerCallback == undefined && triggerCallback != null) throw(new Error('triggerCalback is not defined'))
        console.log(`triggerCallbackString = ${triggerCallbackSting}`)
        console.log(`typeof triggerCallback = ${typeof triggerCallback}`);
        console.log(`trigerCallbackString = ${triggerCallbackSting}`);
        console.log(`\n\nwindow.document.getElementById('triggerScript').toggleClassesCallback = ${window.document.getElementById('triggerScript').toggleClassesCallback}`)
        initTriggers(triggerName, triggerEvent, triggerCallback, window.document);
    
    })    
}
