import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './Logger/logger.service';
import { HttpModule } from '@nestjs/axios';
import { KafkaModule } from './kafka/kafka.module';
import { TestConsumer } from './kafka/consumers/test.consumer';

@Module({
    imports: [ConfigModule.forRoot(), HttpModule, KafkaModule],
    controllers: [AppController],
    providers: [AppService, LoggerService, TestConsumer],
})
export class AppModule {}
