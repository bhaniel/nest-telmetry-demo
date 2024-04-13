import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Logger } from './Logger/logger.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private myLogger: Logger,
    ) {
        this.myLogger.log('AppController created');
    }

    @Get()
    getHello(): string {
        this.myLogger.log('Hello World');
        setTimeout(() => {
            this.myLogger.log('Hello World 2');
        }, 2000);
        return this.appService.getHello();
    }

    @Get('/version')
    getVersion(): string {
        this.myLogger.log('Hello World');
        setTimeout(() => {
            this.myLogger.log('Hello World 2');
        }, 2000);
        return '1';
    }
}
