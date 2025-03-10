import { Elysia, t } from "elysia";

export const authPlugin = new Elysia({
    name: "authPlugin",
  }).derive((ctx) => ({
    log: (message: string) => console.log(`[LOG]: ${message}`),
  }));