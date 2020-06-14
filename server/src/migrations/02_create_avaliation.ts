import Knex from 'knex' ;

export async function up(knex: Knex) {
  return knex.schema.createTable('avaliation', table => {
    table.increments('id').primary();
    table.string('cpf_user').notNullable().references('cpf').inTable('user');
    table.integer('point_id').notNullable().references('id').inTable('points');
    table.integer('date').notNullable();
    table.string('monitoramento').notNullable();
    table.bollean('gas_station').notNullable();
    table.bollean('inn').notNullable();
    table.string('comentario').notNullabe();
    
  })
};

export async function down(knex: Knex) {
  return knex.schema.dropTable('avaliation')
};