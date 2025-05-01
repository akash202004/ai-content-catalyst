import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "./schema";

config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error("NEXT_PUBLIC_DRIZZLE_DB_URL is not set");
}
const sql = neon(process.env.DATABASE_UR!);
export const db = drizzle(sql, { schema });
