import type { Request, Response } from "express"
import { pool } from "../../db"
import { userService } from "./user.service"


const createUser = async (req: Request, res: Response)=>{
    // console.log(req);
    // const {name, email, password, age} = req.body

try {
    const result = await userService.createUserIntoDb(req.body)
    res.status(201).json({
        message: "created",
        data: result.rows[0]
    })
}catch (error: any){
     res.status(500).json({
        message: error.message,
        error: error
    })
}
}

const getAllUsers  =async (req: Request, res: Response)=>{
    try {
        const result = await userService.getAllUsersFromDB()
        res.status(200).json({
            success: true,
            message: "successfully retrieved",
            data: result.rows
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error
        })
    }
}

const getSingleUser = async(req: Request, res: Response)=>{
    const {id} = req.params;
    try{
       const result = await userService.getSingleUserFromDB(id as string)

        if(result.rows.length === 0){
            return res.status(404).json({
                success: false,
                message: "User not found",
                // data: result.rows[0]
                data: {}
            })
        }

        console.log(result)
        res.status(200).json({
            success: true,
            message: "successfully retrieved",
            data: result.rows[0]
        })
    } catch(error: any){
        res.status(500).json({
            success: false,
            message: error.message,
            error: error
        })
    }
}

const updateUser =async (req: Request, res: Response)=>{
    const {id}  =req.params

    try{
    const result = await userService.updateUserFromDB(req.body, id as string)

if(result.rows.length === 0){
    return res.status(404).json({
        success: false,
        message: "User not found",
        data: {}
    })
}

res.status(200).json({
    success: true,
    message: "successfully updated",
    data: result.rows[0]
})
    }catch(error: any){
        res.status(500).json({
            success: false,
            message: error.message,
            error: error
        })
    }
    
}

const deleteUser = async(req: Request, res: Response)=>{
    const {id} = req.params;
    try{
        const result = await userService.deleteUserFromDB(id as string)
            console.log(result)
            if(result.rowCount === 0){
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                    data: {}
                })
            }

            res.status(200).json({
                success: true,
                message: "successfully deleted",
                data: {}
            })

    }catch(error: any){
        res.status(500).json({
            success: false,
            message: error.message,
            error: error
        })
    }
}

export const userController ={
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}