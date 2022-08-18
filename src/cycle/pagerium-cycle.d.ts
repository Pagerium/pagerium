import { PageriumComponentsType, PageriumDefaultOptionsType, PageriumLengthType, PageriumSelectorType, PageriumStyleType } from "../types/types";


export class PageriumCycle {
    constructor(selector: PageriumSelectorType, components: PageriumComponentsType, length: PageriumLengthType, options?: PageriumDefaultOptionsType);
    selector: PageriumSelectorType;
    length: PageriumLengthType;
    components: PageriumComponentsType;
    template: string;
    options: PageriumDefaultOptionsType | undefined;
    style: PageriumStyleType;
    get getSelector(): PageriumSelectorType;
    get getStyle(): PageriumStyleType;
    render(): void;
}