import { afterEach, beforeEach } from "vitest";
import { SessionUser } from "./src/libs/local-storage/session-user";

beforeEach(() => {
  SessionUser.remove();
});

afterEach(() => {
  SessionUser.remove();
});
