import {
  pgTable,
  varchar,
  text,
  uuid,
  integer,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const User = pgTable("user", {
  id: text("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const UserSubscription = pgTable("user_subscription", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  userId: text("user_id")
    .references(() => User.id, { onDelete: "cascade" })
    .notNull(),
  plan: varchar("plan", { length: 50 }).notNull().default("free"), // free, premium, ultimate
  status: varchar("status", { length: 50 }).notNull().default("active"), // active, inactive, cancelled
  razorpayOrderId: varchar("razorpay_order_id", { length: 255 }),
  razorpayPaymentId: varchar("razorpay_payment_id", { length: 255 }),
  razorpaySignature: varchar("razorpay_signature", { length: 255 }),
  amount: integer("amount"), // amount in paise
  currency: varchar("currency", { length: 10 }).default("INR"),
  startDate: timestamp("start_date").defaultNow(),
  endDate: timestamp("end_date"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const AIOutput = pgTable("ai_output", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  formData: varchar("formData", { length: 1000 }).notNull(),
  aiResponse: text("aiResponse"),
  templateSlug: varchar("templateSlug", { length: 255 }).notNull(),
  createdBy: text("created_by")
    .references(() => User.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const Simulation = pgTable("simulation", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  createdBy: text("created_by")
    .references(() => User.id, { onDelete: "cascade" })
    .notNull(),
  platform: varchar("platform", { length: 255 }).notNull(),
  description: text("description").notNull(),
  tags: text("tags").notNull(),
  picture: text("picture"),
  likes: integer("likes").default(0),
  comments: integer("comments").default(0),
  shares: integer("shares").default(0),
  saves: integer("saves").default(0),
  report: text("report"),
  createdAt: timestamp("created_at").defaultNow(),
});
