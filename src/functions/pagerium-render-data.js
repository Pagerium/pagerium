'use-strict';
export const pageriumRenderData = (template, data, index) => {
    if (data === "undefined")
        return template;
    const regex = /\{{(.*?)}}/g;
    template = template.replace(regex, (str, d) => {
        let key = d.trim();
        if (Array.isArray(data[key]))
            return data[key][index];
        return data[key];
    });
    return template;
};
