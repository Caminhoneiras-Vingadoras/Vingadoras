import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('points', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('cpf_user').notNullable().references('cpf').inTable('user');
    table.decimal('note').notNullable().references('note').intable('note');
    table.string('cnpj').Nullable();
    table.string('name').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('address').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
  })
};

export async function down(knex: Knex) {
  return knex.schema.dropTable('points')
};