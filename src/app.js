import "dotenv/config";
import express from "express";
import path from "path";
import fs from "fs";
import { events } from "./mockData.js";

const app = express();
const port = process.env.PORT || 3001;

app.set("views", path.resolve("./src/views"));
app.set("view engine", "pug");
app.use(express.static("public"));

// Routes

app.get("/", (req, res) => {
  res.render("index", {
    contactEmail: "jasperhaward@gmail.com",
    homeImage: "/images/racing/BC_Image06_Cropped.jpg",
    images: fs
      .readdirSync("public/images/racing")
      .map((fileName) => `/images/racing/${fileName}`),
    events,
  });
});

app.use("*", (req, res) => {
  res.sendStatus("404");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;
