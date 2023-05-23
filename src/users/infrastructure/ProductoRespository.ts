import { database } from './Database'
import { Producto } from '../domain/Music-Producto'
import { ProductoRepository } from "../domain/Music-repository"
import { QueryError } from 'mysql2'

export class musicRepositori implements ProductoRepository {
  getById(id: string): Promise<Producto | null> {
    throw new Error('Method not implemented.');
  }

  async create(id: number, Artista: string,  Nombre: string): Promise<Producto> {
    const mysql = new database();
    return await new Promise((resolve, reject) => {
      const sql = `INSERT INTO music.Lista(id,Artista,Nombre) VALUES ('${id}','${Artista}','${Nombre}')`;
      mysql.connection.query(sql, (error: QueryError, results: Producto) => {
        if (error) {
          reject(error)
        } else {
          resolve(results);
        }
      })
    })
  }
}
