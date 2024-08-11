/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://accounts_owner:V1ykqSbv5IKm@ep-long-rain-a55ob73f.us-east-2.aws.neon.tech/accounts?sslmode=require',
    }
};