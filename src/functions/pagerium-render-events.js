'use-strict';
export const pageriumRenderEvents = (element, event, styleClass, reverseEvent) => {
    switch (event) {
        default:
            element.addEventListener(event, () => {
                element.classList.add(styleClass);
            });
            if (reverseEvent) {
                element.addEventListener(reverseEvent, () => {
                    element.classList.remove(styleClass);
                });
            }
            break;
    }
};
