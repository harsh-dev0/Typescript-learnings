"use strict";
class Insta {
    constructor(cameraMode, Burst, filter) {
        this.cameraMode = cameraMode;
        this.Burst = Burst;
        this.filter = filter;
    }
}
class Youtube {
    constructor(cameraMode, filter, Burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.Burst = Burst;
        this.short = short;
    }
    createStory() {
        console.log("story was created");
    }
}
