// HamburgerMenu
function hamburgerMenu () {
    var x = document.getElementById("myLinks");
    if (x.style.display ==="block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const bCard = document.getElementsByClassName("flip-card-container");
// bCard.addEventListener("click", goToMe);
// function goToMe () {
//     window.location.replace("http://www.w3schools.com");
// }


// Slideshow Switch Subject
const reviewsSlideshow = document.querySelector(".slideshow-container-reviews");
const derelictStarSlideshow = document.querySelector(".slideshow-container-derelict-star");
const gardenSlideshow = document.querySelector(".slideshow-container-garden");
const aquariumSlideshow = document.querySelector(".slideshow-container-aquarium");
const babSlideshow = document.querySelector(".slideshow-container-bab");


const slideShows = [reviewsSlideshow, derelictStarSlideshow, gardenSlideshow];

const reviewsButton = document.getElementById("reviewsButton");
const derelictStarButton = document.getElementById("derelictStarButton");
const gardenButton = document.getElementById("petsAmokButton");

const aquariumBotton = document.getElementById("aquariumButton");
const babButton = document.getElementById("borrow-a-buddyButton");


derelictStarButton.addEventListener('click', openDerelictStarSlides);
reviewsButton.addEventListener('click', openReviewsSlides);
gardenButton.addEventListener('click', openGardenSlides);

aquariumButton.addEventListener('click', openAquariumSlides);
babButton.addEventListener('click', openBABSlides);


function openDerelictStarSlides(){
    let x;
    for(x of slideShows) {
        x.style.display="none";
    }
    derelictStarSlideshow.style.display="block";
}

function openReviewsSlides(){
    let x;
    for(x of slideShows) {
        x.style.display="none";
    }
    reviewsSlideshow.style.display="block";
}

function openGardenSlides(){
    let x;
    for(x of slideShows) {
        x.style.display="none";
    }
    gardenSlideshow.style.display="block";
}

function openAquariumSlides(){
    let x;
    for(x of slideShows) {
        x.style.display="none";
    }
    aquariumSlideshow.style.display="block";
}

function openBABSlides(){
    let x;
    for(x of slideShows) {
        x.style.display="none";
    }
    babSlideshow.style.display="block";
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
    var dSSlides = document.getElementsByClassName("myDSSlides");
    var revSlides = document.getElementsByClassName("myRevSlides");
    var gardenSlides = document.getElementsByClassName("myGardenSlides");
    var dots = document.getElementsByClassName("dot");

    if (n > dSSlides.length) {slideIndex=1}
    if (n < 1) {slideIndex = dSSlides.length}

    if (n > revSlides.length) {slideIndex=1}
    if (n < 1) {slideIndex = revSlides.length}

    if (n > gardenSlides.length) {slideIndex=1}
    if (n < 1) {slideIndex = gardenSlides.length}


    for (s=0; s<dSSlides.length; s++) {
        dSSlides[s].style.display = "none";
    }
    for (s=0; s<revSlides.length; s++) {
        revSlides[s].style.display = "none";
    }
    for (s=0; s<gardenSlides.length; s++) {
        gardenSlides[s].style.display = "none";
    }

    for (s=0; s<dots.length; s++) {
        dots[s].className = dots[s].className.replace(" active", "");
    }
    // slides[slideIndex-1].style.display = "block";
    dSSlides[slideIndex-1].style.display = "block";
    revSlides[slideIndex-1].style.display = "block";
    gardenSlides[slideIndex-1].style.display = "block";

    dots[slideIndex-1].className += " active";
}


// MODALS
const modalDS = document.getElementById("modal-DerelictStar");
const modalReviews = document.getElementById("modal-Reviews");
const modalPetsAmok = document.getElementById("modal-Pets-Amok");
const modalVirtualPet = document.getElementById("modal-VirtualPet");

const modalAquarium = document.getElementById("modal-Aquarium");
const modalBAB = document.getElementById("modal-BAB");



const modals = [modalDS, modalReviews, modalPetsAmok, modalVirtualPet, modalAquarium, modalBAB];

    //Use derelictStarButton and reviewsButton from slideshow above
const petsAmokButton = document.getElementById("petsAmokButton");
const virtualPetButton = document.getElementById("virtualPetButton");

const span = document.getElementsByClassName("close")[0]; // ???
// derelictStarButton.addEventListener('click', derelictStarModal);

// function derelictStarModal (){
//     console.log("firing");
// }
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
aquariumButton.onclick = function() {
    let m;
    for(m of modals){
        m.style.display="none";
    }
    modalAquarium.style.display = "block";
}
babButton.onclick = function() {
    let m;
    for(m of modals){
        m.style.display="none";
    }
    modalBAB.style.display = "block";
}

//span should be a collection
let sp;
for (sp of modals){
    sp.onclick = function() { //CLOSE ANY OPEN MODAL WHEN CLICKING THE X
        let m;
        for(m of modals){
            m.style.display="none";
        }
    }
}
// span.onclick = function() { //CLOSE ANY OPEN MODAL WHEN CLICKING THE X
//     let m;
//     console.log("firing");
//     for(m of modals){
//         m.style.display="none";
//     }
// }
