'use-strict';
export class PageriumOperator {
    constructor(selector, components, options) {
        this.selector = selector;
        this.components = components;
        this.options = options;
        this.style = typeof this.options !== "undefined" ? this.options.style : "";
        this.template = '';
    }
    get getSelector() {
        return this.selector;
    }
    get getStyle() {
        return this.style;
    }
}
