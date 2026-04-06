import api from "~/api/api";
import {FAQ} from "~/entities/FAQ";
import {Project} from "~/entities/Project"

interface ProductsParams {
    page?: number,
    per_page?: number,
    category?: number | string,
    sub?: boolean,
    power?: string
}

export function getProducts(params: ProductsParams = {}): Promise<any> {
    const defaultParams: ProductsParams = {
        page: 1,
        per_page: 8,
        sub: false
    };
    params = {...defaultParams, ...params};

    return api("/wp-json/public-api/v1/products", params);
}

export function getProductBySlug(slug: string) {
    return api(`/wp-json/public-api/v1/product/${slug}`);
}

export async function getFAQ(): Promise<Array<FAQ>> {
    const data: Array<any> = await api("/wp-json/wp/v2/posts", {categories: 127});
    return data.map((el: any) => FAQ.createFromWP(el)).reverse();
}

export async function getProjects(): Promise<Array<Project>> {
    const data = await api("/wp-json/wp/v2/posts?categories=388&_embed&per_page=11&order=asc");
    return data.map((el: any) => Project.createFromWP(el));
}

export async function getPortfolioPostBySlug(slug: string): Promise<any | null> {
    if (!slug) return null;
    const data = await api("/wp-json/wp/v2/posts", { slug, categories: 388, _embed: 1 });
    if (!Array.isArray(data) || !data.length) return null;
    return data[0];
}