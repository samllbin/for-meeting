type Te = "default" | ("error" & string);
let tes: Te = "default";

class obTe<EventBusType extends "default" | ("error" & string)> {
  constructor() {
    let b: EventBusType = "default";
    let c: EventBusType = "default";
    const s = b + c;
  }
}
