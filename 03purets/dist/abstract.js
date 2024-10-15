"use strict";
class Insa {
    constructor(cameraMode, Burst, filter) {
        this.cameraMode = cameraMode;
        this.Burst = Burst;
        this.filter = filter;
    }
    getReel() {
        ///cal
        return 8;
    }
}
class to extends Insa {
    constructor(cameraMode, Burst, filter) {
        super(cameraMode, Burst, filter);
        this.cameraMode = cameraMode;
        this.Burst = Burst;
        this.filter = filter;
    }
    getSepia() {
        return console.log('a');
    }
}
const hp = new to(" ", 12, " ");
hp.getReel;
