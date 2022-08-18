'use-strict';
import { pageriumRenderScript } from "../functions/pagerium-render-script";
import { pageriumRenderData } from "../functions/pagerium-render-data";
export class PageriumComponent {
    constructor(selector, template, options) {
        this.selector = selector;
        this.template = template;
        this.script = options.script;
        this.data = options.data;
        this.style = options.style;
    }
    get getSelector() {
        return this.selector;
    }
    get getStyle() {
        return this.style;
    }
    render() {
        document.querySelectorAll(this.selector).forEach((e, index) => {
            if (!(this.script === "undefined") && this.script[1].start === "beforeLoad")
                pageriumRenderScript(this.script, e);
            e.insertAdjacentHTML('afterbegin', pageriumRenderData(this.template, this.data, index));
            if (!(this.script === "undefined") && (this.script[1].start === "afterLoad" || this.script[1].start === "undefined"))
                pageriumRenderScript(this.script, e);
        });
    }
}
