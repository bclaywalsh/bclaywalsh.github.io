const reviewsSlideshow = document.querySelector(".slideshow-container-reviews");
const derelictStarSlideshow = document.querySelector(".slideshow-container-derelict-star");


const reviewsButton = document.getElementById("reviewsButton");
const derelictStarButton = document.getElementById("derelictStarButton");
const dot = document.getElementsByClassName("dot");
const image = document.getElementById("glorious1");

derelictStarButton.addEventListener('click', openDerelictStarSlides);
image.style.display="none";

function openDerelictStarSlides() {
    console.log("firing");
    // image.classList.remove('mySlides');
    derelictStarSlideshow.style.display="block";
    image.style.display="block";
}