import { Request, Response } from 'express';
import knex from '../database/connection';

class UserController {
  async  index(request: Request, res: Response) {

    const results = await knex('user')
    return request.json(results)

}

async create(request: Request, res: Response){
    const{

      //Todas os campos dessa maneira (na ordem):
      cpf,
      name,
      email,
      whatsapp,
      password,
    }=request.body;

    await knex('point').insert({
      cpf,
      name,
      email,
      whatsapp,
      password,
    })

}

async show(request: Request, res: Response){
  const{cpf}= request.params;

  const point=await knex('user').where('name',cpf).first();

  if(!point){
      return res.status(400).json({message:'Ponto não encontrado'});

  };

  const mensa = await knex('user')
  .join('user', 'cpf','=','name')
  .where('user.cpf', cpf)
  .select('name')

}
}
export default UserController;