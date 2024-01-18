import express, { Request, Response } from "express"
import connectToDB from "./database/db"
import dotenv from "dotenv"
import routers from "./routes/uploadRoutes"
import { config } from "./config/config"

dotenv.config()

const app = express()
const PORT = config.server.port

// Middlewares
app.use(express.json());
app.use(express.static('public'))


// connect to db
connectToDB()
  .then(() => {
    // route
    app.use(routers)

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err.message)

    // handle database connection error
    app.get("*", (req: Request, res: Response) => {
      res.status(404).json({
        success: false,
        message:  err.message
      })
    })

    // start the server even if there is a database connection error
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
