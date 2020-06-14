import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('user', table => {
    table.string('cpf').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('password').notNullable();
    table.integer('points').notNullable();
  })
};

export async function down(knex: Knex) {
  return knex.schema.dropTable('user')
};