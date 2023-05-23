import { Producto } from "./Music-Producto";
export interface ProductoRepository {
    create(id: number, Artista: string, Nombre: string): Promise<Producto>;
    getById(id: string): Promise<Producto | null>;
}