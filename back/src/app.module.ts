import { LoggerMiddleware } from '@/logger/logger.middleware';
import configuration from '@config/configuration';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { MetricsModule } from './metrics/metrics.module';
import { SpiderBalancerModule } from '@/spiderBalancer/spiderBalancer.module';
import { SiteModule } from './site/site.module';
import { HttpModule } from '@nestjs/axios';
import { CheckUrlModule } from './check-url/check-url.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveStaticOptions: {
        index: false,
      },
      renderPath: 'static',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbConf = configService.get('database');
        return {
          type: 'postgres',
          host: dbConf.host,
          port: dbConf.port,
          username: dbConf.username,
          password: dbConf.password,
          database: dbConf.db_name,
          entities: ['src/**/*.entities{.ts,.js}'],
          autoLoadEntities: true,
          logging: true,
        };
      },
    }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    MetricsModule,
    SiteModule,
    SpiderBalancerModule,
    CheckUrlModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
