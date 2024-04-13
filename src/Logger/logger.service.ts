/* istanbul ignore file */
import { Injectable, LoggerService } from "@nestjs/common";
import { randomUUID } from "crypto";
import * as winston from 'winston';

@Injectable()
export class Logger implements LoggerService {
    private logger: winston.Logger;
    
    constructor() {
        this.logger = this.createConsoleLogger();
    }

    info(message: string) {

    }
    
    log(message: string) {
        this.logger.log("info", message);
    }
    
    error(message: string, trace: string) {
        this.logger.error(message, trace);
    }
    
    warn(message: string) {
        this.logger.warn(message);
    }
    
    debug?(message: string) {
        this.logger.debug(message);
    }
    
    verbose?(message: string) {
        this.logger.verbose(message);
    }

     createConsoleLogger(
      loggerOptions?: winston.LoggerOptions,
    ): winston.Logger {
      loggerOptions = loggerOptions || {};
      const winstonCorrelationIDFormat = winston.format((info) => {
        info.correlationID = randomUUID();
        info.level = info.level.toUpperCase();
        return info;
      });
  
      return winston.createLogger({
        level: process.env.LOG_LEVEL || "info",
        format: winston.format.combine(
          winstonCorrelationIDFormat(),
          winston.format.json(),
        ),
        transports: [
          new winston.transports.Console({
            format: winston.format.json(),
          }),
        ],
        ...loggerOptions,
      });
    }
}

