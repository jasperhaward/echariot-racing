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

// Routes

app.get("/", (req, res) => {
    res.render("home", {
        backgroundImage: "/images/racing/BC_Image01.jpg",
        activeRoute: req.path,
    });
});

app.get("/test", (req, res) => {
    res.render("test", {
        backgroundImage: "/images/racing/BC_Image06_Cropped.jpg",
        galleryImages: fs
            .readdirSync("public/images/racing")
            .map((fileName) => `/images/racing/${fileName}`),
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

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

export default app;
