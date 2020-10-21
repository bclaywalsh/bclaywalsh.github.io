console.log("Hello World");

// HamburgerMenu
function hamburgerMenu () {
    var x = document.getElementById("myLinks");
    if (x.style.display ==="block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Slideshow Switch Subject


// Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(i) {
    showSlides(slideIndex += i);
}

function currentSlide(i) {
    showSlides(slideIndex = i);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex=1}
    if (n < 1) {slideIndex = slides.length}
    for (let i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


// ANIMATED BOXES
const animatedBoxesLayer = document.querySelector(".animatedBoxes");
const box1 = document.querySelector("#animatedBox1");
const box2 = document.querySelector("#animatedBox2");
const box3 = document.querySelector("#animatedBox3");
const box4 = document.querySelector("#animatedBox4");
const box5 = document.querySelector("#animatedBox5");
const box6 = document.querySelector("#animatedBox6");

const movingBoxes = [box1, box2, box3, box4, box5, box6];

const viewWidth = window.innerWidth;
const viewHeight = window.innerHeight;

//Initialize Attributes
let x;
for (x of movingBoxes){
    x[pos-x] = viewWidth + (Math.random()-0.5)*300;
    x[pos-y] = viewHeight + (Math.random()-0.5)*300;
    x[scale] = Math.random()*100;
    x[x-scale] = x.scale * Math.random();
    x[payne-alpha] = x.x-scale;
    x[frame-alpha] = 1-x.x-scale;
}

//Move Boxes
function moveMyBoxes(){
    let x;
    for (x of movingBoxes){
        var id = setInterval(frame, 5);
        function frame() {
            if (pos == 350) {
            clearInterval(id);
            } else {
            pos++; 
            elem.style.top = pos + "px"; 
            elem.style.left = pos + "px"; 
            }
        }
    }
}

// const movingBox1 = {id: 1, x : 1200, y :1000, x_scale : 1, y_scale : 1, alpha : 0.5, zoomDir : 1};
// const movingBox2 = {id: 2, x : 1000, y :1200, x_scale : 1,  y_scale : 1, alpha : 0.5, zoomDir : 1};


// setBoxes();


// function setBoxes() {
//     let x;
//     for (x of movingBoxes) {
//         let id=x.id;
//         let div = document.createElement("div");
//         div.className = "animatedBox"+id;
//         animatedBoxesLayer.appendChild(div);
//     }
// }

// function moveBoxes() {
//     let x;
//     for (x of movingBoxes) {
//         function frame() {
            
//         }
//     }
// }

// function myMove() {
//     var elem = document.getElementById("animate");   
//     var pos = 0;
//     var id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++; 
//         elem.style.top = pos + "px"; 
//         elem.style.left = pos + "px"; 
//       }
//     }
//   }