'use-strict';
export class PageriumOperator {
    constructor(selector, components, options) {
        this.selector = selector;
        this.components = components;
        this.options = options;
        this.style = this.options.style;
        this.template = '';
    }
    get getSelector() {
        return this.selector;
    }
    get getStyle() {
        return this.style;
    }
}
