import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL ?? 'https://katalon-demo-cura.herokuapp.com',
  username: process.env.CURA_USERNAME ?? 'John Doe',
  password: process.env.CURA_PASSWORD ?? 'ThisIsNotAPassword',
  storageStatePath: path.resolve(__dirname, '../../.auth/user.json')
} as const;
