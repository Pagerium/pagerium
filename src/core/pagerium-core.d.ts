import { PageriumOptionsType, PageriumSelectorType } from "../types/types";

export class Pagerium {
    constructor(selector:PageriumSelectorType);
    selector: PageriumSelectorType;
    template: string;
    style: string;
    render(template: string, options: PageriumOptionsType): void;
}
