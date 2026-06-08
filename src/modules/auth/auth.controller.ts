import type { Request, Response } from "express"
import { authservice } from "./auth.service";

const loginUser = async(req: Request, res: Response)=>{
    try {

        const result = await authservice.loginUserIntoDb(req.body)

        res.status(201).json({
      success: true,
      message: "Profile created successfully!",
      data: result,
    });
    } catch (error : any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
    }
}

export const authController = {
    loginUser
}