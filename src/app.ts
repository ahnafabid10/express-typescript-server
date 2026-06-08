import express, { type Application, type Request, type Response } from "express"
import {Pool} from "pg"
import config from "./config"
import { initDB, pool } from "./db"
import { userRouter } from "./modules/user/user.route"
import { profileRoutes } from "./modules/profile/profile.route"
import { authRouter } from "./modules/auth/auth.route"
const app : Application = express()

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended: true}))

app.get('/', (req : Request, res : Response) => {
//   res.send('Hello World!')
res.status(200).json({
    "massage" : "Express Server",
    "author": "Next Level"
})
})

app.use('/api/users', userRouter)
app.use('/api/profile', profileRoutes)
app.use('/api/auth', authRouter)



export default app