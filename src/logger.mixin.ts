import { Logger } from '@nestjs/common';

export function LoggerMixin<T extends new (...args: any[]) => {}>(Base: T) {
  return class extends Base {
    readonly logger = new Logger(this.constructor.name);

    log(message: string) {
      this.logger.log(message);
    }
  };
}