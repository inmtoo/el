import api from "~/api/api";
import { Project } from "~/entities/Project";

interface PortfolioParams {
  page?: number;
  per_page?: number;
}

const PORTFOLIO_CATEGORY_ID = 388;

function buildPortfolioQuery(params: PortfolioParams = {}) {
  const defaultParams: Record<string, number> = {
    categories: PORTFOLIO_CATEGORY_ID,
    _embed: 1,
    page: 1,
  };
  return { ...defaultParams, ...params };
}

export async function getPortfolio(
  params: PortfolioParams = {}
): Promise<Array<Project>> {
  const data: Array<any> = await api(
    "/wp-json/wp/v2/posts",
    buildPortfolioQuery(params)
  );
  return data.map((el: any) => Project.createFromWP(el));
}

export function getPortfolioPosts(
  params: PortfolioParams = {}
): Promise<any[]> {
  return api("/wp-json/wp/v2/posts", buildPortfolioQuery(params));
}
