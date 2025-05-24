import { AxiosError } from "axios";
import type { TResponseMessage } from "./response";

export type TResponseError = AxiosError<TResponseMessage>;
