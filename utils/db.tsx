import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

if (!process.env.NEXT_PUBLIC_DRIZZLE_DB_URL) {
  throw new Error("NEXT_PUBLIC_DRIZZLE_DB_URL is not set");
}
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);
export const db = drizzle(sql, { schema });
