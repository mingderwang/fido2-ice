// pages/[...slugs].ts
import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

const logPlugin = new Elysia({
  name: "logPlugin",
}).decorate("log", (message: string) => {
  console.log(`[LOG]: ${message}`);
});

const app = new Elysia()
  .use(swagger())
  .use(logPlugin)
  .group('/auth', app => app
  .get("/", ({ log }) => {
    log("Hello from Elysia!");
    return "Check your console!";
  }))

export type App = typeof app;

const handle = ({ request }: { request: Request }) => app.handle(request);

export const GET = handle;
export const POST = handle;

