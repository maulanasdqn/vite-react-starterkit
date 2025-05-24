import type { TMetaResponse } from "./meta";

export type TResponseList<T = unknown> = {
  data: T[];
  message?: string;
  meta: TMetaResponse;
};

export type TResponseDetail<T = unknown> = {
  data: T;
  message?: string;
};

export type TResponseMessage = {
  message: string;
};
