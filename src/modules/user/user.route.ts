import { Router, type Request, type Response} from "express";
import { userController } from "./user.controller";
import { pool } from "../../db";

const router = Router()

router.post("/", userController.createUser)

router.get(("/api/users"), userController.getAllUsers)

router.get('/api/users/:id', userController.getSingleUser)

router.put('/api/users/:id', userController.updateUser)

router.delete("/api/users/:id", userController.deleteUser )


export const userRouter  =router