import {Router} from "express";

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
    res.sendFile(`/home/student/Desktop/html/sandbox/Ashley-ALT0153.github.io/index.html`);
});

mainRouter.get("/presentation", (req, res) =>{
    res.sendFile(`/home/student/Desktop/html/sandbox/Ashley-ALT0153.github.io/presentation.html`);
});

mainRouter.get("/creation", (req, res) =>{
    res.sendFile(`/home/student/Desktop/html/sandbox/Ashley-ALT0153.github.io/creation.html`);
});

mainRouter.get("/contact", (req, res) =>{
    res.sendFile(`/home/student/Desktop/html/sandbox/Ashley-ALT0153.github.io/contact.html`);
});

export {mainRouter};