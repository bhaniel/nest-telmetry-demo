import '@haniel/opentel';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from './Logger/logger.service';
async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        bufferLogs: true,
    });
    app.useLogger(new Logger());
    await app.listen(3000);
}
bootstrap();
