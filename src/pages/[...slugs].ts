// pages/[...slugs].ts
import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
const app = new Elysia()
  .use(swagger())
  .get("ping", () => 'pong')

export type App = typeof app;

const handle = ({ request }: { request: Request }) => app.handle(request);

export const GET = handle;
export const POST = handle;

