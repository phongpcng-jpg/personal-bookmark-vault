import 'dotenv/config'; import knexLib from 'knex';
export const db=knexLib({client:'pg',connection:process.env.DATABASE_URL,pool:{min:0,max:10}});
