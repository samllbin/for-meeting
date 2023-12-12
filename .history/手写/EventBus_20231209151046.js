class EventBus {
  constructor() {
    this.handle = {};
  }

  on(eventName, cb) {
    if (handle[eventName]) {
      this.handle[eventName].push(cb);
    } else {
      this.handle[eventName] = [cb];
    }
  }

  emit(eventName, ...args) {
    if (this.handle[eventName]) {
      const handle = this.handle[eventName].slice();
      handle.forEach((callback) => {
        callback(...args);
      });
    }
  }

  Off(eventName, cb) {
    const index = this.handle[eventName].findIndex(cb);
    if (index !== -1) {
      this.handle[eventName] = this.handle[eventName].slice(index, 1);
    }
  }

  once(eventName, cb) {
    const wrapper = (...args) => {
      cb(...args);
      this.Off(eventName, wrapper);
    };
  }
}
