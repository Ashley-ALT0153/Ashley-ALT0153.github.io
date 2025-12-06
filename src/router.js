import {Router} from "express";

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
    res.sendFile(`./public/index.html`);
});

mainRouter.get("/presentation", (req, res) =>{
    res.sendFile(`/home/student/Desktop/html/sandbox/Ashley-ALT0153.github.io/public/presentation.html`);
});

mainRouter.get("/creation", (req, res) =>{
    res.sendFile(`/home/student/Desktop/html/sandbox/Ashley-ALT0153.github.io/public/creation.html`);
});

mainRouter.get("/contact", (req, res) =>{
    res.sendFile(`/home/student/Desktop/html/sandbox/Ashley-ALT0153.github.io/public/contact.html`);
});

export {mainRouter};