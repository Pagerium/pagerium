type PageriumElementType = {
    selector:string;
    id?:string;
    class?:string;
}
type PageriumDefaultOptionsType = {
    style?:string | undefined;
    element?:PageriumElementType;
}
type PageriumSelectorType = string | undefined;
type PageriumComponentsType = Array<string>;

export class PageriumIf extends PageriumOperator {
    constructor(selector: PageriumSelectorType, components:PageriumComponentsType, bool: boolean, options?: PageriumDefaultOptionsType);
    bool: boolean;
    render(): void;
}

import { PageriumOperator } from "../pagerium-operator";
