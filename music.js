class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Falling", "Trevor Daniel","1.jpg","1.mp3"),    
    new Music("The Box", "Roddy Ricch","2.jpg","2.mp3"),    
    new Music("Everything i wanted", "Billie Ellish","3.jpg","3.mp3")    
];
