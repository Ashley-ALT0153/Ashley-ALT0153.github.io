import express from "express";
import { mainRouter } from "./src/router.js";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(mainRouter);

app.listen(3000, () => {
    console.log(`Portfolio sur le port ${PORT}`);
});

