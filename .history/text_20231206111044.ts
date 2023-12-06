type Te = "default" | ("error" & string);
let tes: Te = "default";

// class obTe<EventBusType extends "default" | ("error" & string)> {
//   constructor() {
//     let b: EventBusType = "default";
//   }
// }
class obTe<EventBusType extends "default" | ("error" & string)> {
  constructor(initialValue: EventBusType) {
    let b: EventBusType = initialValue;
  }
}

// 通过构造函数传递参数
const instance = new obTe("default");
