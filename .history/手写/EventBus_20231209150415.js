class EventBus {
  constructor() {
    let handle = {};
  }

  on(eventName, cb) {
    if (handle[eventName]) {
      handle[eventName].push(cb);
    }
  }
}
