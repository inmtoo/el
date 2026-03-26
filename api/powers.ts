import api from "~/api/api";

export interface Power {
  id: number;
  name: string;
  slug: string;
}

export async function getPowers(): Promise<Power[]> {
  return api("/wp-json/public-api/v1/powers");
}