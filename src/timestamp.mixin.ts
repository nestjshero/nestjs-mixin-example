export function TimestampMixin<T extends new (...args: any[]) => {}>(Base: T) {
    return class extends Base {
      getTimestamp() {
        return new Date().toISOString();
      }
    };
  }