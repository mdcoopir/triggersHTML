import { expect, assert} from 'chai';
import { JSDOM } from 'jsdom';
import htmlSelectorsString from './testhtml.js'
import htmlDefaultsString from './testdefaultshtml.js';
import htmlToggleInitDefaultsString from './testToggleInitDefaultshtml.js';
import { trigger_hello, initTriggerToggles, initTriggers } from "../index.js";
import { _findParent } from '../Util/core.js';

const getDom = (htmlString) => {
    const dom = new JSDOM(htmlString);
    const document = dom.window.document;
        
    dom.window.Element.prototype.findParent = _findParent;
    return dom;
}


xdescribe('Initialise Trigger Toggles with defaults ', () => {
    let dom = getDom(htmlDefaultsString);
    let document = dom.window.document;
    let firstParent = document.querySelector('[target="default"]')
    let clickedCount = 0;
    let clicked = false;

    beforeEach(() => {
        dom = getDom(htmlDefaultsString);
        document = dom.window.document;
        firstParent = document.querySelector('[target="default"]')
        clickedCount = 0;
        clicked = false;    
    })
    it('should initialize the triggers toggles with defaults ', function () {  //have initialized

        expect(firstParent.hasAttribute('target')).to.equal(true);
        expect(firstParent.classList.contains('target_open')).to.equal(true);
        initTriggerToggles(null, null, (e, parentNode, node, eventName, index, selectors) => {
            clickedCount++
            clicked = true;
            const myParent = _findParent(e.currentTarget, '[target="default"]')

        }, document);
        const firstTrigger = document.querySelector('[trigger="default"]');
        const firstTriggerParent = _findParent(firstTrigger, '[target="default"]')
        
        firstTrigger.click()
        expect(firstParent.classList.contains('target_open')).to.equal(false);
        expect(firstParent.classList.contains('target_closed')).to.equal(true);
        document.querySelector('[trigger="default"]').click()
        expect(firstParent.classList.contains('target_open')).to.equal(true);
        expect(firstParent.classList.contains('target_closed')).to.equal(false);
        document.querySelector('[trigger="default"]').click()
        expect(firstParent.classList.contains('target_open')).to.equal(false);
        expect(firstParent.classList.contains('target_closed')).to.equal(true);
        expect(clicked).to.equal(true);
        expect(clickedCount).to.equal(3);
    })
    it('should initialize the triggers toggles with defaults ', function () {  //have initialized
        const selectors = {
            defaultClassIndex: 1
        }
        
        expect(firstParent.hasAttribute('target')).to.equal(true);
        expect(firstParent.classList.contains('target_open')).to.equal(true);
        initTriggerToggles(null, null, (e, parentNode, node, eventName, index, selectors) => {
            clickedCount++
            clicked = true;
            const myParent = _findParent(e.currentTarget, '[target="default"]')

        }, document);
        const firstTrigger = document.querySelector('[trigger="default"]');
        const firstTriggerParent = _findParent(firstTrigger, '[target="default"]')
        
        firstTrigger.click()
        expect(firstParent.classList.contains('target_open')).to.equal(false);
        expect(firstParent.classList.contains('target_closed')).to.equal(true);
        document.querySelector('[trigger="default"]').click()
        expect(firstParent.classList.contains('target_open')).to.equal(true);
        expect(firstParent.classList.contains('target_closed')).to.equal(false);
        document.querySelector('[trigger="default"]').click()
        expect(firstParent.classList.contains('target_open')).to.equal(false);
        expect(firstParent.classList.contains('target_closed')).to.equal(true);
        expect(clicked).to.equal(true);
        expect(clickedCount).to.equal(3);
    })
})
xdescribe('Initialise Trigger Toggles with selectors ', () => {

    let dom = getDom(htmlSelectorsString);
    let document = dom.window.document;
    let firstParent = document.querySelector('[target="folder"]')
    let clickedCount = 0;
    let clicked = false;

    beforeEach(() => {
        dom = getDom(htmlSelectorsString);
        document = dom.window.document;
        firstParent = document.querySelector('[target="folder"]')
        clickedCount = 0;
        clicked = false;
    })

    it('should initialize the triggers with selectors ', function () {  //have initialized

        const selectors = {
            triggerSelector: '[trigger="folder"',
            parentSelector: '[target="folder"]',
            classNames: ["folder_open", "folder_closed"],
            defaultClassIndex: null
        }

        expect(firstParent.hasAttribute('target')).to.equal(true);
        expect(firstParent.classList.contains('folder_open')).to.equal(true);

        initTriggerToggles(selectors, "click", (e, parentNode, node, eventName, index, selectors) => {
            clickedCount++
            clicked = true;
            // console.log(`parentNode.classList = ${parentNode.classList}`)
        }, document);
        document.querySelector('[trigger="folder"]').click()
        expect(clicked).to.equal(true);
        expect(clickedCount).to.equal(1);
        expect(firstParent.classList.contains('folder_open')).to.equal(false);
        expect(firstParent.classList.contains('folder_closed')).to.equal(true);
        document.querySelector('[trigger="folder"]').click()
        expect(clickedCount).to.equal(2);
        expect(firstParent.classList.contains('folder_open')).to.equal(true);
        expect(firstParent.classList.contains('folder_closed')).to.equal(false);

    })
    it('should initialize the triggers with selectors & defaultClassIndex', function () {  //have initialized

        const selectors = {
            triggerSelector: '[trigger="folder"',
            parentSelector: '[target="folder"]',
            classNames: ["folder_open", "folder_closed"],
            defaultClassIndex: 1
        }

        expect(firstParent.hasAttribute('target')).to.equal(true);
        expect(firstParent.classList.contains('folder_open')).to.equal(true);

        initTriggerToggles(selectors, "click", (e, parentNode, node, eventName, index, selectors) => {
            clickedCount++
            clicked = true;
            // console.log(`parentNode.classList = ${parentNode.classList}`)
        }, document);
        document.querySelector('[trigger="folder"]').click()
        expect(clicked).to.equal(true);
        expect(clickedCount).to.equal(1);
        expect(firstParent.classList.contains('folder_open')).to.equal(true);
        expect(firstParent.classList.contains('folder_closed')).to.equal(false);
        document.querySelector('[trigger="folder"]').click()
        expect(clickedCount).to.equal(2);
        expect(firstParent.classList.contains('folder_open')).to.equal(false);
        expect(firstParent.classList.contains('folder_closed')).to.equal(true);

    })
    it('should initialize the triggers with selectors and click on trigger that is not default class', function () {  //have initialized

        const selectors = {
            triggerSelector: '[trigger="folder"',
            parentSelector: '[target="folder"]',
            classNames: ["folder_open", "folder_closed"],
            defaultClassIndex: 1
        }

        let secondParent = document.querySelector('[target="folder"]:nth-child(2)')
        let secondTrigger = document.querySelectorAll('[trigger="folder"]')[1]

        expect(firstParent.hasAttribute('target')).to.equal(true);
        expect(secondParent.classList.contains('folder_closed')).to.equal(true);

        initTriggerToggles(selectors, "click", (e, parentNode, node, eventName, index, selectors) => {
            clickedCount++
            clicked = true;
            // console.log(`parentNode.classList = ${parentNode.classList}`)
        }, document);
        secondTrigger.click()
        expect(clicked).to.equal(true);
        expect(clickedCount).to.equal(1);
        expect(secondParent.classList.contains('folder_open')).to.equal(true);
        expect(secondParent.classList.contains('folder_closed')).to.equal(false);
        secondTrigger.click()
        expect(clickedCount).to.equal(2);
        expect(secondParent.classList.contains('folder_open')).to.equal(false);
        expect(secondParent.classList.contains('folder_closed')).to.equal(true);

    })
})
