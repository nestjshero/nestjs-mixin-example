import { Injectable } from '@nestjs/common';
import { TimestampMixin } from './timestamp.mixin';
import { LoggerMixin } from './logger.mixin';

@Injectable()
class MessageService {
  private messages: string[] = [];

  addMessage(message: string) {
    this.messages.push(message);
    return `Message added: ${message}`;
  }

  getMessages() {
    return this.messages;
  }
}

const MixedMessageService = TimestampMixin(LoggerMixin(MessageService));

@Injectable()
export class AppService extends MixedMessageService {
  addTimestampedMessage(message: string) {
    const timestampedMessage = `${this.getTimestamp()}: ${message}`;
    const result = this.addMessage(timestampedMessage);
    this.log(result);
    return result;
  }
}