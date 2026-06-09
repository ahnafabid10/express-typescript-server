import type { Request, Response } from "express"
import { authservice } from "./auth.service";
import sendResponse from "../../utility/sendResponse";

const loginUser = async(req: Request, res: Response)=>{
    try {

        const result = await authservice.loginUserIntoDb(req.body)

        const {refreshToken} = result

        res.cookie("refreshToken", refreshToken,{
          secure: false, // in prod true
          httpOnly: true,
          sameSite: "lax"
        })

        // res.status(201).json();

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Profile created successfully!",
      data: result,
    })

    } catch (error : any) {
      sendResponse(res,{
      statusCode: 500,
      success: false,
      message: error.message,
      error: error,
    })
    }
}

const refreshToken =async(req: Request, res: Response)=>{
  try {

        const result = await authservice.generateRefreshToken(req.cookies.refreshToken)

        // const {refreshToken} = result

        res.cookie("refreshToken", refreshToken,{
          secure: false, // in prod true
          httpOnly: true,
          sameSite: "lax"
        })

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
    loginUser,
    refreshToken
}