type Te = "default" | ("error" & string);
let tes: Te = "default";


class obTe<EventBusType extends "default" | ("error" & string)>