import 'dotenv/config';
import knexLib from 'knex';
const knex=knexLib({client:'pg',connection:process.env.DATABASE_URL});
await knex.raw('CREATE EXTENSION IF NOT EXISTS pgcrypto');
await knex.schema.createTableIfNotExists('users', t=>{t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));t.string('username',80).notNullable().unique();t.string('password_hash',255).notNullable();t.timestamps(true,true);});
await knex.schema.createTableIfNotExists('bookmarks', t=>{t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));t.uuid('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');t.string('title',200).notNullable();t.text('url').notNullable();t.text('description');t.specificType('tags','text[]').notNullable().defaultTo('{}');t.timestamps(true,true);t.index(['user_id']);});
await knex.destroy(); console.log('Migration complete');
