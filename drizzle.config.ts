import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });
if (!process.env.DATABASE_URL) {
}

export default defineConfig({
  schema: "./src/database/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
