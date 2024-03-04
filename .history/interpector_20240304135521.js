class interceptor {
  constructor() {
    this.aspects = [];
  }

  use(factor) {
    this.aspects.push(factor);
  }
}
