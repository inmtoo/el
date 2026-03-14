/**
 *
 * @param url
 * @param data {FormData|Object}
 * @param method
 * @return {Promise<any>}
 */
export default async function (url, data = null, method = "GET") {
    const config = useRuntimeConfig();
    url = config.public.apiDomain + url;

    /**
     *
     * @type RequestInit
     */
    const requestInit = {
        method
    };

    if (data) {
        if (method === "POST") requestInit.body = data;
        else url += "?" + objectToSearchParams(data).toString();
    }

    let response;
    if (import.meta.server) {
        response = (await useFetch(url)).data.value;
    } else {
        response = (await $fetch(url, requestInit));
    }
    return response;
}

export function objectToSearchParams(obj) {
    const searchParams = new URLSearchParams();
    for (let key in obj) {
        const values = obj[key];
        if (!values && !Number.isInteger(values)) continue;

        if (Array.isArray(values)) values.forEach(el => searchParams.append(`${key}[]`, el));
        else searchParams.set(key, values);
    }

    return searchParams;
}