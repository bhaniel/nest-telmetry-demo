import '@haniel/opentel';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './Logger/logger.service';
async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        bufferLogs: true,
    });
    app.useLogger(new LoggerService());
    await app.listen(3000);
}
// ssrssss
bootstrap();
