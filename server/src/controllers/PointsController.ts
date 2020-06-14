import { Request, Response } from 'express';
import knex from '../database/connection';

class PointController {

  async  index(request: Request, res: Response) {

      const results = await knex('points')
      return request.json(results)

  }

  async create(request: Request, res: Response){
      const{

        //Todas os campos dessa maneira (na ordem):
        id,
        image,
        cpf_user,
        note,
        cnpj,
        name,
        latitude,
        longitude,
        address,
        city,
        state,
      }=request.body;

      await knex('points').insert({
          id,
          image,
          cpf_user,
          note,
          cnpj,
          name,
          latitude,
          longitude,
          address,
          city,
          state,
      })

  }

  async show(request: Request, res: Response){
      const{name}= request.params;

      const point=await knex('points').where('name',name).first();

      if(!point){
          return res.status(400).json({message:'Ponto não encontrado'});

      };

      const mensa = await knex('points')
      .where('name', name)
      .select('name')

  }
}