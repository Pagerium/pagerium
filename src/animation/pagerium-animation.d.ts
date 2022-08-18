import { PageriumAnimationOptionsType, PageriumComponentType, PageriumSelectorType } from "../types/types";

export class PageriumAnimation {
    constructor(selector: PageriumSelectorType, component: PageriumComponentType, options?: PageriumAnimationOptionsType);
    selector: PageriumSelectorType;
    component: PageriumComponentType;
    template: string;
    options: PageriumAnimationOptionsType | undefined;
    styleAnimation: string;
    style: string;
    get getSelector(): PageriumSelectorType;
    get getStyle(): string;
    render(): void;
}
