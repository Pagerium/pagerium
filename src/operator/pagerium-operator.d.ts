import {PageriumComponentsType, PageriumSelectorType, PageriumDefaultOptionsType,PageriumStyleType} from "../types/types";
export class PageriumOperator {
    constructor(selector:PageriumSelectorType, components: PageriumComponentsType, options?: PageriumDefaultOptionsType);
    selector: PageriumSelectorType;
    components: PageriumComponentsType;
    options: PageriumDefaultOptionsType;
    style: PageriumStyleType;
    template: string;
    get getSelector(): PageriumSelectorType;
    get getStyle(): PageriumStyleType;
}
