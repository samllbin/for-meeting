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

  emit(eventName, cb) {}
}
