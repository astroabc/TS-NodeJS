import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'

const PORT = process.env.PORT || 8080
const ENV = process.env.NODE_ENV || 'production'

const app: Express = express()

app.use(helmet())

app.use(cors())

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Welcome')
})

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${ENV} environment`)
})

export { app as default, server }
