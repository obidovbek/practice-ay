import { Router, Request, Response} from "express";

const router = Router();

router.get("/", (req,res)=>{
    console.log(req)
    res.send("Salom")
})

export default router;