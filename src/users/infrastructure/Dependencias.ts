
import { CreateMusic } from "../application/CreateMusic";
import { musicRepositori } from "../infrastructure/ProductoRespository";
import { musicControllers } from "./MusicControllers";

const productoRes = new musicRepositori();
const createMusic = new CreateMusic(productoRes)

export const MusicControllers = new musicControllers(createMusic)