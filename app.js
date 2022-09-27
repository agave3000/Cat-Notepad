var canvas = document.getElementById("canvas");

var ctx = canvas.getContext('2d')

var btn = document.getElementById('btn');

var slider = document.getElementById("rng");

var txt = document.getElementById("txt");

txt.innerHTML = slider.value;

var image_w = slider.value;
var image_h = slider.value;


slider.oninput = function() {
    txt.innerHTML = this.value;
    image_h = this.value;
    image_w = this.value;
}

var w = window.innerWidth + 1000;
var h = window.innerHeight + 1000;
canvas.height = h;
canvas.width = w;

var drawing = false;

const mouse = {
    x: undefined,
    y: undefined
}

function start() {
    drawing = true;
    ctx.drawImage(image, mouse.x - image_w / 2, mouse.y - image_h / 2, image_w, image_h);

}

function stop () {
    drawing = false;
}

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', stop);
canvas.addEventListener('mousemove', draw);


const image = new Image();
image.src = "./cet.png";

function drawImg() {
    if (!drawing) return;
    ctx.drawImage(image, mouse.x - image_w / 2, mouse.y - image_h / 2, image_w, image_h);
}

btn.addEventListener('click', function () {
    ctx.clearRect(0, 0, w, h);
})

function draw (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawImg();
}