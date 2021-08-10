import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtpService } from './otp/otp.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, OtpService],
})
export class AppModule {}
