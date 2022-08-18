'use-strict';
import { PageriumOperator } from '../pagerium-operator';
import { pageriumRenderTemplateElement } from "../../functions/pagerium-render-template-element";
export class PageriumAddition extends PageriumOperator {
    constructor(selector, components, options) {
        super(selector, components, options);
    }
    render() {
        if (this.components === "undefined" || this.components.length === 0)
            return;
        let templateElement = null;
        if (this.components.length > 1) {
            this.components.forEach((component) => {
                this.template += document.createElement(component).outerHTML;
            });
        }
        else
            throw new Error("Should be two components");
        if (this.options.element) {
            templateElement = pageriumRenderTemplateElement(this.options.element.selector, this.options.element.id, this.options.element.class);
        }
        if (templateElement)
            templateElement.insertAdjacentHTML('afterbegin', this.template);
        document.querySelectorAll(this.selector).forEach((e) => {
            e.insertAdjacentHTML('afterbegin', templateElement ? templateElement.outerHTML : this.template);
        });
    }
}
