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
const reviewsSlideshow = document.querySelector(".slideshow-container-reviews");
const derelictStarSlideshow = document.querySelector(".slideshow-container-derelict-star");

const slideShows = [reviewsSlideshow, derelictStarSlideshow];

const reviewsButton = document.getElementById("reviewsButton");
const derelictStarButton = document.getElementById("derelictStarButton");


derelictStarButton.addEventListener('click', openDerelictStarSlides);
reviewsButton.addEventListener('click', openReviewsSlides);


function openDerelictStarSlides(){
    let x;
    // showSlides(slideIndex);

    for(x of slideShows) {
        x.style.display="none";
    }
    derelictStarSlideshow.style.display="block";
}

function openReviewsSlides(){
    let x;
    // showSlides(slideIndex);

    for(x of slideShows) {
        x.style.display="none";
    }
    reviewsSlideshow.style.display="block";
}



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
    var s;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex=1}
    if (n < 1) {slideIndex = slides.length}
    for (s=0; s<slides.length; s++) {
        slides[s].style.display = "none";
    }
    for (s=0; s<dots.length; s++) {
        dots[s].className = dots[s].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


// MODALS
const modalDS = document.getElementById("modal-DerelictStar");
const modalReviews = document.getElementById("modal-Reviews");
const modalPetsAmok = document.getElementById("modal-Pets-Amok");
const modalVirtualPet = document.getElementById("modal-VirtualPet");

const modals = [modalDs, modalReviews, modalPetsAmok, modalVirtualPet];

    //Use derelictStarButton and reviewsButton from slideshow above
const petsAmokButton = document.getElementById("petsAmokButton");
const virtualPetButton = document.getElementById("virtualPetButton");

const span = document.getElementsByClassName("close")[0]; // ???

derelictStarButton.onclick = function() {
    let m;
    for(m of modals){
        m.style.display="none";
    }
    modalDS.style.display = "block";
}
reviewsButton.onclick = function() {
    let m;
    for(m of modals){
        m.style.display="none";
    }
    modalReviews.style.display = "block";
}
petsAmokButton.onclick = function() {
    let m;
    for(m of modals){
        m.style.display="none";
    }
    modalPetsAmok.style.display = "block";
}
virtualPetButton.onclick = function() {
    let m;
    for(m of modals){
        m.style.display="none";
    }
    modalVirtualPet.style.display = "block";
}

span.onclick = function() { //CLOSE THE MODAL WHEN CLICKING THE X
    let m;
    for(m of modals){
        m.style.display="none";
    }
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
// let x;
// for (x of movingBoxes){
//     x.defineProperty(x, 'pos-x', { value: (viewWidth + (Math.random()-0.5)*300)});
//     Object.defineProperty(x, 'pos-y', { value: (viewHeight + (Math.random()-0.5)*300)});
//     Object.defineProperty(x, 'scale', { value: (Math.random()*100)});
//     Object.defineProperty(x, 'x-scale', { value: (x.scale * Math.random())});
//     Object.defineProperty(x, 'payne-alpha', { value: (x.x-scale)});
//     Object.defineProperty(x, 'frame-alpha', { value: (1-x.x-scale)});


    // x[pos-y] = viewHeight + (Math.random()-0.5)*300;
    // x[scale] = Math.random()*100;
    // x[x-scale] = x.scale * Math.random();
    // x[payne-alpha] = x.x-scale;
    // x[frame-alpha] = 1-x.x-scale;
// }

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