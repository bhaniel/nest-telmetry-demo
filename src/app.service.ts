import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
    constructor(
        private http: HttpService,
        private producerService: ProducerService,
    ) {}
    getHello(): string {
        return 'Hello World!';
    }

    async sendKafkaMessage() {
        // Sending message by creating topic with message 1
        return await this.producerService.produce({
            topic: 'test',
            messages: [
                {
                    value: 'Hello world',
                },
            ],
        });
    }

    async getBitcoinPriceUSD() {
        return this.http
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .pipe(
                map((res) => res.data?.bpi),
                map((bpi) => bpi?.USD),
                map((usd) => {
                    return usd?.rate;
                }),
            )
            .pipe(
                catchError(() => {
                    throw new ForbiddenException('API not available');
                }),
            );
    }
    //
    async getCat() {
        await this.http.get('http://localhost:3000/test').toPromise();
        return this.http
            .post('http://localhost:3000', {
                name: 'cat',
                age: 1,
                breed: 'unknown',
            })
            .pipe(
                map((res) => res.data),
                map((data) => {
                    return {
                        cat: 'added',
                        message: 'success',
                    };
                }),
            )
            .pipe(
                catchError(() => {
                    throw new ForbiddenException('API not available');
                }),
            );
    }
}
