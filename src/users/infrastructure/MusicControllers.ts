
import { Request, Response } from 'express';
import { CreateMusic } from '../application/CreateMusic';

export class musicControllers {

    constructor(readonly CreateMusic: CreateMusic) { }
    create = async (req: Request, res: Response) => {
        try {
            const { id, Artista, Nombre } = req.body
            const dataproducto = await this.CreateMusic.createmusic(id, Artista, Nombre);
            res.status(200).json(dataproducto)
        } catch (error) {
            res.status(500).json({ error: "servidor error" })
        }
    }
}
