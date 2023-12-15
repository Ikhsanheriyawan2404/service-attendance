import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RequestLoggerMiddleware } from 'src/middleware/request-logger.middleware';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';

@Module({
  imports: [TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // let's add a middleware on all routes
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}
