import { ProductoRepository } from "../domain/Music-repository"


export class CreateMusic {
    constructor(readonly productoRepository: ProductoRepository) { }
    async createmusic(id: number, Artista: string, Nombre: string) {
        return this.productoRepository.create(id, Artista, Nombre)
            .then((createMusic) => {
                console.log(createMusic);
                return createMusic;
            }).catch((error) => {
                console.log(error);
            })

    }
}











