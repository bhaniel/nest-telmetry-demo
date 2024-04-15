/* istanbul ignore file */
import { Injectable, LoggerService as Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import * as winston from 'winston';

@Injectable()
export class LoggerService implements Logger {
    private logger: winston.Logger;

    constructor() {
        this.logger = this.createConsoleLogger();
    }

    log(message: string, context?: object) {
        this.logger.log('info', message, context);
    }

    error(message: string, trace: string) {
        this.logger.error(message, trace);
    }

    warn(message: string, context?: object) {
        this.logger.warn(message, context);
    }

    debug?(message: string, context?: object) {
        this.logger.debug(message, context);
    }

    verbose?(message: string, context?: object) {
        this.logger.verbose(message, context);
    }

    createConsoleLogger(loggerOptions?: winston.LoggerOptions): winston.Logger {
        loggerOptions = loggerOptions || {};
        const winstonCorrelationIDFormat = winston.format((info) => {
            info.correlationID = randomUUID();
            info.level = info.level.toUpperCase();
            return info;
        });

        return winston.createLogger({
            level: process.env.LOG_LEVEL || 'info',
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
