import router from "./routes";
import { Request, Response } from "express";
const express = require("express");
const PORT = 4000;
const app = express();

async function config(){
    app.use("/", router);
    app.use((req:Request, res:Response)=>{
        res.status(404).send("Page not found");
    })

}

const initApp =async ()=>{
    await config();
    app.listen(PORT, ()=>{console.log(`Server ${PORT} tida yurgazildi!`)});
}

initApp();


