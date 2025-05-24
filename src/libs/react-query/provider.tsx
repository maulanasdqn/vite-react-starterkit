import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./client";
import type { FC, PropsWithChildren, ReactElement } from "react";

export const ReactQueryProvider: FC<PropsWithChildren> = (
  props,
): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};
