abstract class Insa {
    constructor(
    public cameraMode: string,
    public Burst: number,
    public filter?: string){}

    abstract getSepia(): void;
    getReel(): number{
        ///cal
        return 8
    }
}

class to extends Insa{
    constructor(public cameraMode: string,
        public Burst: number,
        public filter?: string){
        super(cameraMode, Burst,filter )
    }

    getSepia(): void {
        return console.log('a');
        
    }
}
const hp = new to(" ", 12, " ");

hp.getReel;