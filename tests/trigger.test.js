import { expect, assert } from 'chai';
import { JSDOM } from 'jsdom';
import htmlSelectorsString from './testhtml.js'
import htmlDefaultsString from './testdefaultshtml.js';
import htmlTriggerInitDefaultsString from './testTriggerInitDefaultshtml.js';
import { trigger_hello, initTriggerToggles, initTriggers } from "../index.js";
import { _findParent, _initSelectors, _deepCompare} from '../Util/core.js';

const getDom = (htmlString) => {
    const dom = new JSDOM(htmlString);
    const document = dom.window.document;

    dom.window.Element.prototype.findParent = _findParent;
    return dom;
}


describe('hello trigger', () => {

    it("should say hello", () => {
        // expect(true).to.equal(true);
        expect(trigger_hello()).to.equal("Hello trigger HTML!!!!")
    })
})

xdescribe('throw errors', () => {
    it('should throw error when no DOM', function () {
        assert.throws(() => { initTriggers(null, null, null, null) }, Error, 'The DOM does not exist.  The DOM is required to initialize triggers.');
        assert.throws(() => { initTriggers() }, Error, 'The DOM does not exist.  The DOM is required to initialize triggers.');
    })
})

xdescribe('Initialise selectors ', () => {
    it('should iniitalize the selectors with a name string', function() {
        const selectors = "folder"
        const newSelectors = _initSelectors(selectors);
        const expectedSelectors = {
            "parentSelector":"[target=\"folder\"]",
            "triggerSelector":"[target=\"folder\"] [trigger=\"folder\""
        }
        expect(_deepCompare(newSelectors, expectedSelectors)).to.equal(true);
    })
    it('should iniitalize the selectors with a name in object and retain other elements', function() {
        const selectors = {
            name: "folder",
            other1: "other1",
            other2: "other2"
        }
        const newSelectors = _initSelectors(selectors);
        const expectedSelectors = {
            "parentSelector":"[target=\"folder\"]",
            "triggerSelector":"[target=\"folder\"] [trigger=\"folder\"",
            other1: "other1",
            other2: "other2"
        }
        expect(_deepCompare(newSelectors, expectedSelectors)).to.equal(true);
    })
    it('should iniitalize the selectors with a parentSelector and triggerSelector in object and retain other elements', function() {
        const selectors = {
            "parentSelector":"[target=\"folder\"]",
            "triggerSelector":"[trigger=\"folder\"",
            other1: "other1",
            other2: "other2"
        }
        const newSelectors = _initSelectors(selectors);
        const expectedSelectors = {
            "parentSelector":"[target=\"folder\"]",
            "triggerSelector":"[target=\"folder\"] [trigger=\"folder\"",
            other1: "other1",
            other2: "other2"
        }
        console.log(`newSelectors = ${JSON.stringify(newSelectors)}`)
        expect(_deepCompare(newSelectors, expectedSelectors)).to.equal(true);
    })
})

xdescribe('Initialise Triggers with defaults ', () => {
    let dom = getDom(htmlDefaultsString);
    let window = dom.window;
    let document = window.document;
    let firstParent = document.querySelector('[target="default"]')
    let nestedParent =  document.querySelector('[target="default"] [target="default"]');
    let clickedCount = 0;
    let clicked = false;


    beforeEach(() => {
        dom = getDom(htmlDefaultsString);
        document = dom.window.document;
        firstParent = document.querySelector('[target="default"]');
        nestedParent = document.querySelector('[target="default"] [target="default"]');
        clickedCount = 0;
        clicked = false;    
    })

    it('should initialize the triggers with defaults ', function () {  //have initialized
        expect(firstParent.hasAttribute('target')).to.equal(true);
        expect(firstParent.classList.contains('target_open')).to.equal(true);
        initTriggers( false, false, (e, parentNode, node, eventName, index, selectors) => {
            clickedCount++
            clicked = true;
            const myParent = _findParent(e.currentTarget, '[target]')
            myParent.classList.toggle('target_open');
            myParent.classList.toggle('target_closed');
        }, document);

        document.querySelector('[trigger="default"]').click()
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

    it('should initialize the triggers with defaults and no callback ', function () {  //have initialized

        initTriggers(null, null, null, document);
        document.querySelector('[trigger="default"]').click()
        document.querySelector('[trigger="default"]').click()
        expect(clicked).to.equal(false);
        expect(clickedCount).to.equal(0);
    })
    it('should initialize the trigger with defaults and click nested element ', function () {  //have initialized
        expect(nestedParent.hasAttribute('target')).to.equal(true);
        expect(nestedParent.classList.contains('target_closed')).to.equal(true);
        initTriggers(null, null, (e, parentNode, node, eventName, index, selectors) => {
            clickedCount++
            clicked = true;
            const myParent = _findParent(e.currentTarget, '[target]')
            myParent.classList.toggle('target_open');
            myParent.classList.toggle('target_closed');
        }, document);
    
        document.querySelector('[target] [target] [trigger="default"]').click()
        expect(nestedParent.classList.contains('target_closed')).to.equal(false);
        expect(nestedParent.classList.contains('target_open')).to.equal(true);
        document.querySelector('[target] [target] [trigger="default"]').click()
        expect(nestedParent.classList.contains('target_closed')).to.equal(true);
        expect(nestedParent.classList.contains('target_open')).to.equal(false);
        document.querySelector('[target] [target] [trigger="default"]').click()
        expect(nestedParent.classList.contains('target_closed')).to.equal(false);
        expect(nestedParent.classList.contains('target_open')).to.equal(true);
        expect(clicked).to.equal(true);
        expect(clickedCount).to.equal(3);
    })
})



xdescribe('Initialise Triggers with selectors ', () => {

    let dom = getDom(htmlSelectorsString);
    let window = dom.window;
    let document = dom.window.document;
    let firstParent = document.querySelector('.folder');
    let clickedCount = 0;
    let clicked = false;

    beforeEach(() => {
        dom = getDom(htmlSelectorsString);
        document = dom.window.document;
        firstParent = document.querySelector('[target="folder"]');
        clickedCount = 0;
        clicked = false;    
    })

    it('should initialize the triggers with selectors ', function () {  //have initialized

        const selectors = {
            triggerSelector: '[trigger="folder"]',
            parentSelector: '[target="folder"]',
            toggleSelector1: "folder_open",
            toggleSelector2: "folder_closed",
        }

        expect(firstParent.hasAttribute("target")).to.equal(true);
        expect(firstParent.classList.contains('folder_open')).to.equal(true);

        initTriggers(selectors, "click", (e, parentNode, node, eventName, index, selectors) => {
            clickedCount++
            clicked = true;
            const myParent = _findParent(e.currentTarget, '[target="folder"]')
            myParent.classList.remove('folder_open');
            myParent.classList.add('folder_closed');

        }, document);
        document.querySelector('[trigger="folder"]').click()
        document.querySelector('[trigger="folder"]').click()
        expect(clicked).to.equal(true);
        expect(clickedCount).to.equal(2);
        expect(firstParent.classList.contains('folder_open')).to.equal(false);
        expect(firstParent.classList.contains('folder_closed')).to.equal(true);

    })
});

xdescribe('Initialise Triggers with a name ', () => {

    let dom = getDom(htmlSelectorsString);
    let window = dom.window;
    let document = dom.window.document;
    let firstParent = document.querySelector('[target="folder"');
    let clickedCount = 0;
    let clicked = false;

    beforeEach(() => {
        dom = getDom(htmlSelectorsString);
        document = dom.window.document;
        firstParent = document.querySelector('[target="folder"');
        clickedCount = 0;
        clicked = false;    
    })

    it('should initialize the triggers with a name ', function () {  //have initialized

        const selectors = {
            name: 'folder',
            toggleSelector1: "folder_open",
            toggleSelector2: "folder_closed",
        }

        expect(firstParent.hasAttribute("target")).to.equal(true);
        expect(firstParent.classList.contains('folder_open')).to.equal(true);

        initTriggers(selectors, "click", (e, parentNode, node, eventName, index, selectors) => {
            clickedCount++
            clicked = true;

            // console.log(`callback selectors = ${JSON.stringify(selectors)}`)
            const myParent = _findParent(e.currentTarget, '[target="folder"]')
            myParent.classList.remove('folder_open');
            myParent.classList.add('folder_closed');

        }, document);
        document.querySelector('[trigger="folder"]').click()
        document.querySelector('[trigger="folder"]').click()
        expect(clicked).to.equal(true);
        expect(clickedCount).to.equal(2);
        expect(firstParent.classList.contains('folder_open')).to.equal(false);
        expect(firstParent.classList.contains('folder_closed')).to.equal(true);

    })
    it('should initialize the triggers with a name ', function () {  //have initialized

        const selectors = 'folder';

        expect(firstParent.hasAttribute("target")).to.equal(true);
        expect(firstParent.classList.contains('folder_open')).to.equal(true);

        initTriggers(selectors, "click", (e, parentNode, node, eventName, index, selectors) => {
            clickedCount++
            clicked = true;

            // console.log(`callback selectors = ${JSON.stringify(selectors)}`)
            const myParent = _findParent(e.currentTarget, '[target="folder"]')
            myParent.classList.remove('folder_open');
            myParent.classList.add('folder_closed');

        }, document);
        document.querySelector('[trigger="folder"]').click()
        document.querySelector('[trigger="folder"]').click()
        expect(clicked).to.equal(true);
        expect(clickedCount).to.equal(2);
        expect(firstParent.classList.contains('folder_open')).to.equal(false);
        expect(firstParent.classList.contains('folder_closed')).to.equal(true);

    })
})
