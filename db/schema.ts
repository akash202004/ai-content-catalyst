import { pgTable, varchar, text, uuid, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const User = pgTable("user", {
  id: text("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const AIOutput = pgTable("ai_output", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  formData: varchar("formData", { length: 1000 }).notNull(),
  aiResponse: text("aiResponse"),
  templateSlug: varchar("templateSlug", { length: 255 }).notNull(),
  createdBy: text("created_by")
    .references(() => User.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
