import { Redis } from "@upstash/redis";

export const redis = new Redis.fromEnv();
