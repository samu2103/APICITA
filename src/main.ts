import "./load-env-vars";
import bodyParser from "body-parser";
import express from "express";
import { config } from "./config";
import { routes } from "./users/infrastructure/RouteProducto";


  const app = express();

  app.use(bodyParser.json());
app.use("/Music", routes);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - corriendo puerto ${port}`);
  });


