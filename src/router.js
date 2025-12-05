import {Router} from "express";

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
    res.sendFile(`public/index.html`);
});

mainRouter.get("/presentation", (req, res) =>{
    res.sendFile(`public/presentation.html`);
});

mainRouter.get("/creation", (req, res) =>{
    res.sendFile(`public/creation.html`);
});

mainRouter.get("/contact", (req, res) =>{
    res.sendFile(`public/contact.html`);
});

export {mainRouter};