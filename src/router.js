import {Router} from "express";

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
    res.sendFile(`pages/index.ejs`);
});

mainRouter.get("/presentation", (req, res) =>{
    res.sendFile(`pages/presentation.ejs`);
});

mainRouter.get("/creation", (req, res) =>{
    res.sendFile(`pages/creation.ejs`);
});

mainRouter.get("/contact", (req, res) =>{
    res.sendFile(`pages/contact.ejs`);
});

export {mainRouter};