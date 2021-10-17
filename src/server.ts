import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ForecastController } from '@src/controllers/forecast';
import { Application } from 'express';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }
  private setupControllers(): void {
    const forecastController = new ForecastController();
    // Lista com os controllers, é só ir adicionando quando necessitar
    this.addControllers([forecastController]);
  }

  //export a app do express
  public getApp(): Application {
    return this.app;
  }
}
