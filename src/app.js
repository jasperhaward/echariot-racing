import dotenv from "dotenv";

dotenv.config();

import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3001;

app.set("views", path.resolve("./src/views"));
app.set("view engine", "pug");
app.use(express.static("public"));

const events = [
  {
    name: "Hickstead European Championship",
    url: "www.google.com",
    location: {
      url: "https://www.google.hr/maps/place/Reigate/",
      address: "City Hall",
      town: "Reigate",
      county: "Surrey",
    },
    date: "1st - 4th August 2022",
  },
  {
    name: "Silverstone GP",
    url: "www.google.com",
    location: {
      url: "https://www.google.hr/maps/place/Birmingham/",
      address: "NEC",
      town: "Birmingham",
      county: "Surrey",
    },
    date: "16th - 20th September 2022",
  },
  {
    name: "Cow Pie",
    url: "www.google.com",
    location: {
      url: "https://www.google.hr/maps/place/Birmingham/",
      address: "Field",
      town: "Le town",
      county: "Warwickshire",
    },
    date: "7th - 9th October 2022",
  },
];

// Routes

app.get("/", (req, res) => {
  res.render("test", {
    backgroundImage: "/images/racing/BC_Image06_Cropped.jpg",
    galleryImages: fs
      .readdirSync("public/images/racing")
      .map((fileName) => `/images/racing/${fileName}`),
    events,
  });
});

/*
app.get("/", (req, res) => {
  res.render("home", {
    backgroundImage: "/images/racing/BC_Image01.jpg",
    activeRoute: req.path,
  });
});

app.get("/events", (req, res) => {
  res.render("events", {
    backgroundImage: "/images/racing/BC_Image03.jpg",
    activeRoute: req.path,
  });
});

app.get("/gallery", (req, res) => {
  res.render("gallery", {
    backgroundImage: "/images/racing/BC_Image06.jpg",
    galleryImages: fs
      .readdirSync("public/images/racing")
      .map((fileName) => `/images/racing/${fileName}`),
    activeRoute: req.path,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    backgroundImage: "/images/racing/RN_Image01_Edited.jpg",
    activeRoute: req.path,
  });
});

app.use("*", (req, res) => {
  res.status(404).render("404");
});
*/

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;
