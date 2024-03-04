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
    let resolvedPromise = 0;
    let len = promises.length;
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(
        (data) => {
          resolvedPromise++;
          res[i] = data;
          if (resolvedPromise === len) return resolve(res);
        },
        (error) => {
          return reject(error);
        }
      );
    }
  });
}

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve, reject);
    });
  });
}

function luoxuan(n) {
  let loop = Math.floor(n / 2);
  let mid = Math.floor(n / 2);
  let startX = 0,
    startY = 0,
    number = 1,
    count = 1;
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop--) {
    let clo = startY;
    let row = startX;

    for (; clo < n - count; clo++) {
      res[row][clo] = number++;
    }
    for (; row < n - count; row++) {
      res[row][clo] = number++;
    }
    for (; clo > startY; clo--) {
      res[row][clo] = number++;
    }

    for (; row > startX; row--) {
      res[row][clo] = number++;
    }

    startX++;
    startY++;
    count++;
  }

  if (n % 2 === 1) {
    res[mid][mid] = number;
  }
  return res;
}

console.log(luoxuan(5));

function ThreeSum(nums) {
  let res = [];
  let len = nums.length;
}
