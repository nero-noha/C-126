song = "";
song2 = "";

function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("bleach-music_number-one-ost-bleach.mp3");
}

function setup() {
    canvas = createanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    Image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
}