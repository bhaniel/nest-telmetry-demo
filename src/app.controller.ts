import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from './Logger/logger.service';

class CreateCatDto {
    name: string;
    age: number;
    breed: string;
}

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private myLogger: LoggerService,
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

    @Get('/kafka')
    sendKafkaMessage() {
        this.myLogger.log('Kafka Message');
        return this.appService.sendKafkaMessage();
    }

    @Get('/test')
    getTest(): Object {
        return {
            currencies: [
                {
                    id: 3,
                    description: 'peso',
                    created_at: '2011-12-01T21:19:26.000+02:00',
                    updated_at: '2011-12-01T21:19:26.000+02:00',
                    last_user: null,
                    active: true,
                    iso4217: 'ARS',
                },
                {
                    id: 18,
                    description: 'Australian Dolar',
                    created_at: '2016-04-13T17:48:43.000+03:00',
                    updated_at: '2016-04-13T17:48:43.000+03:00',
                    last_user: null,
                    active: true,
                    iso4217: 'AUD',
                },
                {
                    id: 11,
                    description: 'Boliviano',
                    created_at: '2014-11-04T19:00:54.000+02:00',
                    updated_at: '2014-11-04T19:00:54.000+02:00',
                    last_user: null,
                    active: true,
                    iso4217: 'BOB',
                },
                {
                    id: 4,
                    description: 'real',
                    created_at: '2012-02-13T16:44:43.000+02:00',
                    updated_at: '2012-02-13T16:44:43.000+02:00',
                    last_user: null,
                    active: true,
                    iso4217: 'BRL',
                },
                {
                    id: 22,
                    description: 'Dolar Beliceño',
                    created_at: '2016-09-07T00:03:51.000+03:00',
                    updated_at: '2016-09-07T00:03:51.000+03:00',
                    last_user: null,
                    active: true,
                    iso4217: 'BZD',
                },
                {
                    id: 15,
                    description: 'Dolar canadiense',
                    created_at: '2015-10-19T18:46:47.000+03:00',
                    updated_at: '2015-10-19T18:46:47.000+03:00',
                    last_user: null,
                    active: null,
                    iso4217: 'CAD',
                },
                {
                    id: 6,
                    description: 'Peso Chileno',
                    created_at: '2013-07-16T19:07:51.000+03:00',
                    updated_at: '2013-07-16T19:07:51.000+03:00',
                    last_user: null,
                    active: true,
                    iso4217: 'CLP',
                },
                {
                    id: 9,
                    description: 'Peso Colombiano',
                    created_at: '2014-09-04T18:18:00.000+03:00',
                    updated_at: '2014-09-04T18:18:00.000+03:00',
                    last_user: null,
                    active: true,
                    iso4217: 'COP',
                },
                {
                    id: 13,
                    description: 'Colón',
                    created_at: '2015-04-09T17:37:24.000+03:00',
                    updated_at: '2015-04-09T17:37:24.000+03:00',
                    last_user: null,
                    active: true,
                    iso4217: 'CRC',
                },
                {
                    id: 21,
                    description: 'Peso Cubano Convertible',
                    created_at: '2016-09-07T00:00:09.000+03:00',
                    updated_at: '2016-09-07T00:00:09.000+03:00',
                    last_user: null,
                    active: true,
                    iso4217: 'CUC',
                },
                {
                    id: 1,
                    description: 'euro',
                    created_at: '2011-12-01T21:19:26.000+02:00',
                    updated_at: '2011-12-01T21:19:26.000+02:00',
                    last_user: null,
                    active: true,
                    iso4217: 'EUR',
                },
                {
                    id: 19,
                    description: 'Grate British Pound',
                    created_at: '2016-04-13T17:49:35.000+03:00',
                    updated_at: '2016-04-13T17:49:35.000+03:00',
                    last_user: null,
                    active: true,
                    iso4217: 'GBP',
                },
                {
                    id: 17,
                    description: 'Quetzal',
                    created_at: '2016-04-12T17:49:13.000+03:00',
                    updated_at: '2016-04-12T17:49:13.000+03:00',
                    last_user: null,
                    active: null,
                    iso4217: 'GTQ',
                },
                {
                    id: 8,
                    description: 'rupias',
                    created_at: '2014-05-16T17:39:23.000+03:00',
                    updated_at: '2014-05-16T17:39:23.000+03:00',
                    last_user: null,
                    active: true,
                    iso4217: 'IDR',
                },
                {
                    id: 24,
                    description: 'Israeli New Shekel',
                    created_at: '2019-04-30T19:56:04.000+03:00',
                    updated_at: '2019-04-30T19:56:04.000+03:00',
                    last_user: null,
                    active: true,
                    iso4217: 'ILS',
                },
                {
                    id: 23,
                    description: 'Jamaican Dollar',
                    created_at: '2018-01-24T19:03:42.000+02:00',
                    updated_at: '2018-01-24T19:03:42.000+02:00',
                    last_user: null,
                    active: true,
                    iso4217: 'JMD',
                },
                {
                    id: 26,
                    description: 'Moroccan Dirhams',
                    created_at: '2022-01-26T19:28:54.000+02:00',
                    updated_at: '2022-01-26T19:28:54.000+02:00',
                    last_user: null,
                    active: true,
                    iso4217: 'MAD',
                },
                {
                    id: 12,
                    description: 'Peso mexicano',
                    created_at: '2014-12-05T16:37:16.000+02:00',
                    updated_at: '2014-12-05T16:37:16.000+02:00',
                    last_user: null,
                    active: true,
                    iso4217: 'MXN',
                },
                {
                    id: 14,
                    description: 'Cordoba',
                    created_at: '2015-09-24T23:20:14.000+03:00',
                    updated_at: '2015-09-24T23:20:14.000+03:00',
                    last_user: null,
                    active: null,
                    iso4217: 'NIO',
                },
                {
                    id: 7,
                    description: 'Nuevo Sol',
                    created_at: '2013-07-16T19:07:51.000+03:00',
                    updated_at: '2013-07-16T19:07:51.000+03:00',
                    last_user: null,
                    active: true,
                    iso4217: 'PEN',
                },
                {
                    id: 20,
                    description: 'Zloty',
                    created_at: '2016-07-19T19:26:49.000+03:00',
                    updated_at: '2016-07-19T19:26:49.000+03:00',
                    last_user: null,
                    active: true,
                    iso4217: 'PLN',
                },
                {
                    id: 10,
                    description: 'guarani',
                    created_at: '2014-10-15T21:08:32.000+03:00',
                    updated_at: '2014-10-15T21:08:32.000+03:00',
                    last_user: null,
                    active: true,
                    iso4217: 'PYG',
                },
                {
                    id: 16,
                    description: 'Leu',
                    created_at: '2016-02-01T14:42:01.000+02:00',
                    updated_at: '2016-02-01T14:42:01.000+02:00',
                    last_user: null,
                    active: true,
                    iso4217: 'RON',
                },
                {
                    id: 25,
                    description: 'Thai Baht',
                    created_at: '2021-09-29T20:12:04.000+03:00',
                    updated_at: '2021-09-29T20:12:04.000+03:00',
                    last_user: null,
                    active: true,
                    iso4217: 'THB',
                },
                {
                    id: 2,
                    description: 'dolar',
                    created_at: '2011-12-01T21:19:26.000+02:00',
                    updated_at: '2011-12-01T21:19:26.000+02:00',
                    last_user: null,
                    active: true,
                    iso4217: 'USD',
                },
                {
                    id: 5,
                    description: 'Peso Uruguayo',
                    created_at: '2012-12-04T22:30:09.000+02:00',
                    updated_at: '2012-12-04T22:30:09.000+02:00',
                    last_user: null,
                    active: true,
                    iso4217: 'UYU',
                },
            ],
            used_currencies: [
                {
                    id: 1,
                    description: 'euro',
                    created_at: '2011-12-01T21:19:26.000+02:00',
                    updated_at: '2011-12-01T21:19:26.000+02:00',
                    last_user: null,
                    active: true,
                    iso4217: 'EUR',
                },
                {
                    id: 2,
                    description: 'dolar',
                    created_at: '2011-12-01T21:19:26.000+02:00',
                    updated_at: '2011-12-01T21:19:26.000+02:00',
                    last_user: null,
                    active: true,
                    iso4217: 'USD',
                },
                {
                    id: 24,
                    description: 'Israeli New Shekel',
                    created_at: '2019-04-30T19:56:04.000+03:00',
                    updated_at: '2019-04-30T19:56:04.000+03:00',
                    last_user: null,
                    active: true,
                    iso4217: 'ILS',
                },
            ],
            default_currency: {
                id: 24,
                description: 'Israeli New Shekel',
                created_at: '2019-04-30T19:56:04.000+03:00',
                updated_at: '2019-04-30T19:56:04.000+03:00',
                last_user: null,
                active: true,
                iso4217: 'ILS',
            },
            currency_exchanges: [
                {
                    id: null,
                    currency_id_to: 24,
                    currency_id_from: 0,
                    buy: '1.0',
                    created_at: null,
                    updated_at: null,
                    accommodation_id: 1759,
                    sell: '1.0',
                    operate: '1.0',
                    updated_by: null,
                    reference: null,
                    inaccurate_rate: null,
                    synced_at: null,
                },
                {
                    id: 58570,
                    currency_id_to: 24,
                    currency_id_from: 1,
                    buy: '3.8006385',
                    created_at: '2020-12-02T11:19:50.000+02:00',
                    updated_at: '2024-04-09T03:05:36.000+03:00',
                    accommodation_id: 1759,
                    sell: '4.2007057',
                    operate: '4.0006721',
                    updated_by:
                        'currencies.currency_exchange_automatic_updated',
                    reference: '4.0006721',
                    inaccurate_rate: false,
                    synced_at: '2024-04-09T03:05:32.000+03:00',
                },
                {
                    id: 53142,
                    currency_id_to: 24,
                    currency_id_from: 24,
                    buy: '1.0',
                    created_at: '2020-05-29T21:18:26.000+03:00',
                    updated_at: '2024-04-09T03:05:36.000+03:00',
                    accommodation_id: 1759,
                    sell: '1.0',
                    operate: '1.0',
                    updated_by:
                        'currencies.currency_exchange_automatic_updated',
                    reference: '1.0',
                    inaccurate_rate: false,
                    synced_at: '2024-04-09T03:05:32.000+03:00',
                },
                {
                    id: 53143,
                    currency_id_to: 24,
                    currency_id_from: 2,
                    buy: '3.4992339',
                    created_at: '2020-05-29T21:18:26.000+03:00',
                    updated_at: '2024-04-09T03:05:36.000+03:00',
                    accommodation_id: 1759,
                    sell: '3.8675743',
                    operate: '3.6834041',
                    updated_by:
                        'currencies.currency_exchange_automatic_updated',
                    reference: '3.6834041',
                    inaccurate_rate: false,
                    synced_at: '2024-04-09T03:05:32.000+03:00',
                },
            ],
        };
    }

    @Get('/bitcoin')
    getBitCoin() {
        this.myLogger.log('BitCoin Price');
        return this.appService.getBitcoinPriceUSD();
    }

    @Post('/cat')
    async createCat(@Body() createCatDto: CreateCatDto) {
        this.myLogger.log('Create Cat', createCatDto);
        return this.appService.getCat();
    }
    // @Post('/cat') sssssssssss
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.myLogger.log('Create Cat', createCatDto);
        return {
            message: 'success',
            data: 'cat',
        };
    }
}
