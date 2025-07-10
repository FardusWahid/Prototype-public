import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

config({ path: ".env" });
export const connect = drizzle(process.env.DATABASE_URL!, { schema });
