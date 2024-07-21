import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('message')
  addMessage(@Body('message') message: string) {
    return this.appService.addTimestampedMessage(message);
  }

  @Get('messages')
  getMessages() {
    return this.appService.getMessages();
  }
}