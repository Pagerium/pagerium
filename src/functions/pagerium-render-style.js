'use-strict';
export const pageriumRenderStyle = (renderingStyle) => {
    if (renderingStyle === "undefined")
        return;
    const style = document.createElement('style');
    style.setAttribute("type", "text/css");
    style.insertAdjacentHTML('afterbegin', renderingStyle);
    document.head.appendChild(style);
};
