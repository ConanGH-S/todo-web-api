import express, { Application, IRouter, Response, json } from "express";
import cors, { CorsOptions } from 'cors'
import cookieParser from "cookie-parser";
import * as appRoutes from "./routes/index.js";

export class App {
  private app: Application
  private readonly appRoutes: IRouter[]
  private readonly APIPREFIX = '/api'

  private readonly corsConfig: CorsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization', 'x-public-key']
  }

  constructor() {
    this.app = express()
    this.appRoutes = Object.values(appRoutes)
  }

  public init(): Application {
    this.app.use(cors(this.corsConfig))

    this.app.use(json())

    this.app.use(cookieParser())
    
    for (const route of this.appRoutes) {
      this.app.use(this.APIPREFIX, route)
    }

    this.app.use((_, res: Response): Response => {
      const errorMessage = '¡Oops! Parece que este endpoint fue destruido por fuerzas fuera de nuestro conocimiento.'
      return res.status(404).json({ error: errorMessage })
    })

    return this.app
  }
}