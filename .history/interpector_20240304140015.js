class interceptor {
  constructor() {
    this.aspects = [];
  }

  use(factor) {
    this.aspects.push(factor);
    return this;
  }

  async run(context) {
    let proc = this.aspects.reduceRight(
      (a, b) => {
        async () => {
          await b(context, a);
        };
      },
      () => Promise.resolve()
    );
    try {
      proc();
    } catch (error) {
      console.log(error);
    }
    return context;
  }
}

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let res = [];
  });
}
