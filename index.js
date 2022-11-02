'use strict';

import express from "express";
import routes from "./src/petrol.route.js";

const app = express();
const port = process.env.PORT || 3500;

app.get("/", (req, res) => {
    res.send(`
      <h1 style="align-content: center">Malaysia Petrol Price Scrapping</h1>
      <p>Server is running...</p>
    `);
  });

app.use("/api", routes);

app.listen(port, () => {
    console.log(`Server is Running at port ${port}`);
  });