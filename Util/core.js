import {initTriggers, initTriggerToggles, DOMExists} from 'triggersjs'

export const _autoInitToggle = () => {
    window.document.querySelectorAll('[toggleInit]').forEach((el) => {
        const selectors = {
            classNames: el.getAttribute('toggleClasses').split(" "),
            name: el.hasAttribute('target') ? el.getAttribute('target'): 'default',
        }
        const triggerEvent = el.hasAttribute('triggerEvent') ? el.getAttribute('triggerEvent'): 'click';

        const toggleEventCBString = el.hasAttribute('toggleEventCB') ? el.getAttribute('toggleEventCB'): null;
        const toggleEventCB = toggleEventCBString ? window[toggleEventCBString]: (window["toggleEventCB"] == undefined) ? null: window['toggleEventCB'];
        if(toggleEventCB == undefined && toggleEventCB != null) throw(new Error('toggleEventCB is not defined'))

        const toggleBeforeInitCBString = el.hasAttribute('toggleBeforeInitCB') ? el.getAttribute('toggleBeforeInitCB'): null;
        const toggleBeforeInitCB = toggleBeforeInitCBString ? window[toggleBeforeInitCBString]: (window["toggleBeforeInitCB"] == undefined) ? null: window['toggleBeforeInitCB'];
        if(toggleBeforeInitCB == undefined && toggleBeforeInitCB != null) throw(new Error('toggleBeforeInitCB is not defined'))

        const toggleAfterInitCBString = el.hasAttribute('toggleAfterInitCB') ? el.getAttribute('toggleAfterInitCB'): null;
        const toggleAfterInitCB = toggleAfterInitCBString ? window[toggleAfterInitCBString]: (window["toggleAfterInitCB"] == undefined) ? null: window['toggleAfterInitCB'];
        if(toggleAfterInitCB == undefined && toggleAfterInitCB != null) throw(new Error('toggleAfterInitCB is not defined'))

        const toggleCBs = {
            eventTglCB: toggleEventCB,
            beforeInitTglCB: toggleBeforeInitCB,
            afterInitTglCB: toggleAfterInitCB,
        }
        initTriggerToggles(selectors, triggerEvent, toggleCBs, window.document)
    })
}
export const _autoInitTriggers = () => {
    console.log(`document.querySelectorAll([triggerInit]).length = ${window.document.querySelectorAll('[triggerInit]').length}`)
    window.document.querySelectorAll('[triggerInit]').forEach((el) => {
        const triggerName = el.hasAttribute('target') ? el.getAttribute('target'): 'default';
        const triggerEvent = el.hasAttribute('triggerEvent') ? el.getAttribute('triggerEvent'): 'click';
        // console.log(`triggerName = ${triggerName}`)
        // console.log(`triggerEvent = ${triggerEvent}`)
        const triggerEventCBString = el.hasAttribute('triggerEventCB') ? el.getAttribute('triggerEventCB'): null;
        const triggerEventCB = triggerEventCBString ? window[triggerEventCBString]: (window["triggerEventCB"] == undefined) ? null: window['triggerEventCB'];
        if(triggerEventCB == undefined && triggerEventCB != null) throw(new Error('triggerEventCB is not defined'))

        const triggerBeforeInitCBString = el.hasAttribute('triggerBeforeInitCB') ? el.getAttribute('triggerBeforeInitCB'): null;
        const triggerBeforeInitCB = triggerBeforeInitCBString ? window[triggerBeforeInitCBString]: (window["triggerBeforeInitCB"] == undefined) ? null: window['triggerBeforeInitCB'];

        const triggerAfterInitCBString = el.hasAttribute('triggerAfterInitCB') ? el.getAttribute('triggerAfterInitCB'): null;
        const triggerAfterInitCB = triggerAfterInitCBString ? window[triggerAfterInitCBString]: (window["triggerAfterInitCB"] == undefined) ? null: window['triggerAfterInitCB'];

        const triggerCBs = {
            eventCB: triggerEventCB,
            beforeInitCB: triggerBeforeInitCB,
            afterInitCB: triggerAfterInitCB,
        }
        // console.log(`triggerCallbackString = ${triggerCallbackSting}`)
        // console.log(`typeof triggerCallback = ${typeof triggerCallback}`);
        // console.log(`trigerCallbackString = ${triggerCallbackSting}`);
        // console.log(`\n\nwindow.document.getElementById('triggerScript').toggleClassesCallback = ${window.document.getElementById('triggerScript').toggleClassesCallback}`)
        initTriggers(triggerName, triggerEvent, triggerCBs, window.document);
    
    })    
}
