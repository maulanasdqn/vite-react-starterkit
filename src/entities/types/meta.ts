export type TMetaRequest = {
  page: number;
  per_page: number;
  sort: string;
  order: string;
  filter: string;
  filter_by: string;
  search: string;
};

export type TMetaResponse = {
  page: number;
  per_page: number;
  total: number;
};
