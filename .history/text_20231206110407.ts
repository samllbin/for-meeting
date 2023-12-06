type Te = "default" | ("error" & string);
let tes: Te = "default";

type EventBusType extends "default" | ("error" & string)
class obTe<EventBusType extends "default" | ("error" & string)> {
  constructor() {
    let b: EventBusType = "default";
  }
}
