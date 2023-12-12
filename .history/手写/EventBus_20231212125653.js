class EventBus {
  constructor() {
    this.handle = {};
  }

  on(eventName, cb) {
    if (this.handle[eventName]) {
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
    this.on(eventName, wrapper);
  }
}

class eventbus {
  constructor() {
    this.handle = {};
  }

  on(eventName, cb) {
    if (this.handle[eventName]) {
      this.handle[eventName].push(cb);
    } else {
      this.handle[eventName] = [cb];
    }
  }

  emit(eventName, ...args) {
    if (!this.handle[eventName]) {
      return null;
    }
    let cbs = this.handle[eventName].slice(0);

    for (let cb in cbs) {
      cb(...args);
    }
  }

  off(eventName, cb) {
    let cbs = this.handle[eventName];
    let idnex = cbs.indexOf(cb);
    if (index) {
      this.handle[eventName].slice(index, 1);
      return;
    }
  }
}
