import { betterAuth } from 'better-auth';
import { apiKey } from 'better-auth/plugins';
import Database from 'better-sqlite3';

const dbName = 'better-auth.db';
const db = new Database(dbName, {
  verbose: console.log,
});

export const auth = betterAuth({
  database: db,
  emailAndPassword: {
    enabled: true
  },
  plugins: [apiKey({})],
});