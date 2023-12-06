type Te = "default" | ("error" & string);
let tes: Te = "default";

// class obTe<EventBusType extends "default" | ("error" & string)> {
//   constructor() {
//     let b: EventBusType = "default";
//   }
// }

// class obTe<EventBusType extends "default" | ("error" & string)> {
//   constructor(initialValue: EventBusType) {
//     let b: EventBusType = initialValue;
//   }
// }

// const instance = new obTe("default");

class obTe<EventBusType extends "default" | ("error" & string)> {
  constructor() {
    let b: EventBusType = "default";
  }
}
