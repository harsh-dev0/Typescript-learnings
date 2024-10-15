interface Photo{
    cameraMode: string,
    Burst: number,
    filter:  string
}
interface stroy{
    createStory(): void
}
class Insta implements Photo{
    constructor(
    public cameraMode: string,
    public Burst: number,
    public filter: string){}

}

class Youtube implements Photo, stroy{
    constructor(
        public cameraMode : string,
        public filter: string,
        public Burst : number,
        public short : string
    ){}

    createStory(): void {
        console.log("story was created");
        
    }
}