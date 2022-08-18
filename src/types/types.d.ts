export type PageriumOptionsType = {
    [key:string]: object;
}

export type PageriumComponentsType = Array<string>;

export type PageriumComponentsTernaryType = [string, string];

export type PageriumSelectorType = string | undefined;

export type PageriumStyleType = string | undefined;

export type PageriumLengthType = number | undefined;

export type PageriumComponentType = string | undefined;

export type PageriumElementType = {
    selector:string;
    id?:string;
    class?:string;
}

export type PageriumDefaultOptionsType = {
    style?:PageriumStyleType,
    element?:PageriumElementType;
}
export type PageriumDataType = {
    [key:string]:any;
}
export type PageriumElementsElementType ={
    [key:string]:string;
}
export type PageriumScriptOptionsType = {
    start?:"afterLoad" | "beforeLoad";
    elements?:Array<PageriumElementsElementType>
}
export type PageriumScriptType = [Function,PageriumScriptOptionsType];

export type PageriumComponentOptionsType={
    script?:PageriumScriptType;
    data?:PageriumDataType;
    style?:PageriumStyleType;
}

export type PageriumAnimationElementType = {
    selector:string;
    id?:string;
    class?:string;
    transition?:string;
}

export type PageriumAnimationOptionsType = {
    event:string;
    reverseEvent?:string;
    style:string;
    class:string;
    transition?:string;
    element?:PageriumAnimationElementType;
}