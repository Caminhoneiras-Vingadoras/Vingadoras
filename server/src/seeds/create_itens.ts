import Knex from 'knex';

export async function seed(knex: Knex) {
 await knex('user').insert({cpf: '222222', name: 'teste1', email:'opa@', whatsapp: '11111111', password:'123'}
  
);
};