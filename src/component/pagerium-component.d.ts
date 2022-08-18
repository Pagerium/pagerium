import {PageriumComponentOptionsType, PageriumSelectorType, PageriumStyleType,PageriumDataType,PageriumScriptType} from "../types/types";

export class PageriumComponent {
    constructor(selector: PageriumSelectorType, template: string, options?: PageriumComponentOptionsType);
    selector: PageriumSelectorType;
    template: string;
    script: PageriumScriptType | undefined;
    data: PageriumDataType | undefined;
    style: PageriumStyleType | undefined;
    get getSelector(): PageriumSelectorType;
    get getStyle(): PageriumStyleType;
    render(): void;
}
