import express from "express"
import { MusicControllers } from "./Dependencias";
export const routes = express.Router();
routes.post('/', MusicControllers.create.bind(MusicControllers));