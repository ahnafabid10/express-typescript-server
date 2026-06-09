import type { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import config from "../config"

const auth =() =>{
    return async(req: Request, res: Response, next: NextFunction) =>{
    console.log("this is protected routes")
    console.log(req.headers.authorization)
    const token = req.headers.authorization

    if(!token){
    res.status(401).json({
      success: false,
      message: "Unauthorized access!",
      data: {},
    });
    }
    // console.log("fdgfgfgfgfGF",config.secret)
    // const decoded = jwt.verify(token as string, config.secret as string)

    // console.log(decoded)

    next()
    }  
}

export default auth