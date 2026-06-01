import express, { type Application, type Request, type Response } from "express"
import {Pool} from "pg"
const app : Application = express()
const port = 5000

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended: true}))

const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_Ce3Tqv6ZBAaQ@ep-withered-bird-apu2zyjo-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

app.get('/', (req : Request, res : Response) => {
//   res.send('Hello World!')
res.status(200).json({
    "massage" : "Express Server",
    "author": "Next Level"
})
})

app.post("/", async(req: Request, res: Response)=>{
    // console.log(req);
    const body = req.body
    res.status(201).json({
        message: "created",
        data: body
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})