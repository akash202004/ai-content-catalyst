/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://akash_laha_owner:9fz4XpgAQdrS@ep-bold-violet-a5dmrjb8.us-east-2.aws.neon.tech/Ai-Content-Generator?sslmode=require',
    }
};