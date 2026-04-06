import api from "~/api/api";

interface CategoriesParams {
    parent?: string | number
}

export async function getCategories(params: CategoriesParams = {}): Promise<any> {
    const defaultParams: CategoriesParams = {
        parent: 0
    };
    params = {...defaultParams, ...params};

    return (await api("/wp-json/public-api/v1/categories", params)).filter((el: any) => el.id !== 97);
}

export function getCategoryBySlug(slug: string): Promise<any> {
    return api(`/wp-json/public-api/v1/category/${slug}`);
}

export async function getSubcategoriesByParent(parent: string | number): Promise<any> {
    return (await api("/wp-json/public-api/v1/categories", { parent })).filter((el: any) => el.id !== 97);
}