'use-strict';
export const pageriumRenderTemplateElement = (selector, id, classElement) => {
    let templateElement = null;
    if (selector) {
        templateElement = document.createElement(selector);
        if (id)
            templateElement.setAttribute("id", id);
        if (classElement)
            templateElement.classList.add(classElement);
    }
    return templateElement;
};
