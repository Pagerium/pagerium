'use-strict';
import { pageriumRenderTemplateElement } from "../functions/pagerium-render-template-element";
import { pageriumRenderEvents } from "../functions/pagerium-render-events";
export class PageriumAnimation {
    constructor(selector, component, options) {
        this.selector = selector;
        this.component = component;
        this.template = "";
        this.options = options;
        this.styleAnimation = this.options ? `.${this.options.class}{` + this.options.styleAnimation + `}` : "";
        this.style = this.options ? (this.options.style ? this.options.style : "") + this.styleAnimation : "";
    }
    get getSelector() {
        return this.selector;
    }
    get getStyle() {
        return this.style;
    }
    render() {
        if (this.component === "undefined" || this.options === "undefined")
            return;
        const component = document.createElement(this.component);
        let templateElement = null;
        if (this.options.element) {
            templateElement = pageriumRenderTemplateElement(this.options.element.selector, this.options.element.id, this.options.element.class);
        }
        if (templateElement) {
            templateElement.appendChild(component);
            if (this.options.element && this.options.element.transition)
                templateElement.setAttribute("style", `transition:${this.options.element.transition};`);
        }
        if (this.options.transition)
            component.setAttribute("style", `transition:${this.options.transition};`);
        this.template = templateElement ? templateElement.outerHTML : component.outerHTML;
        document.querySelectorAll(this.selector).forEach((e) => {
            e.insertAdjacentHTML('afterbegin', this.template);
            pageriumRenderEvents(templateElement ? e.firstChild : e, this.options.event, this.options.class, this.options.reverseEvent);
        });
    }
}
