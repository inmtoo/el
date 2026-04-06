import api from "~/api/api";

export interface Power {
  id: number;
  name: string;
  slug: string;
}

interface PowersParams {
  category?: number | string;
  sub?: boolean;
}

export async function getPowers(params: PowersParams = {}): Promise<Power[]> {
  const defaultParams: PowersParams = {
    sub: false,
  };
  params = { ...defaultParams, ...params };

  return api("/wp-json/public-api/v1/powers", params);
}