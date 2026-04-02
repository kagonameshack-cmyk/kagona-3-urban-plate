// ===============================
// MOBILE HAMBURGER MENU
// ===============================

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
nav.classList.toggle("active");
});


// ===============================
// SMOOTH SCROLL NAVIGATION
// ===============================

document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior: "smooth"
});

nav.classList.remove("active");

});

});


// ===============================
// HERO BACKGROUND IMAGE ROTATION
// ===============================

const hero = document.querySelector(".hero");

const heroImages = [

"https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
"https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
"https://images.unsplash.com/photo-1504674900247-0877df9cc836",
"https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
"https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
"https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
"https://images.unsplash.com/photo-1506086679525-9e74c7c2f76d",
"https://images.unsplash.com/photo-1528605248644-14dd04022da1",
"https://images.unsplash.com/photo-1466978913421-dad2ebd01d17",
"https://images.unsplash.com/photo-1555992336-03a23c6c81d6",
"https://images.unsplash.com/photo-1525610553991-2bede1a236e2",
"https://images.unsplash.com/photo-1551218808-94e220e084d2",
"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
"https://images.unsplash.com/photo-1470337458703-46ad1756a187",
"https://images.unsplash.com/photo-1544145945-f90425340c7e",
"https://images.unsplash.com/photo-1504674900247-0877df9cc836",
"https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
"https://images.unsplash.com/photo-1528605248644-14dd04022da1",
"https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
"https://images.unsplash.com/photo-1555396273-367ea4eb4db5"

];

let heroIndex = 0;

function changeHeroImage(){

heroIndex++;

if(heroIndex >= heroImages.length){
heroIndex = 0;
}

hero.style.backgroundImage = `url(${heroImages[heroIndex]})`;

}

setInterval(changeHeroImage, 5000);



// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const sectionTop = section.getBoundingClientRect().top;
const trigger = window.innerHeight / 1.2;

if(sectionTop < trigger){

section.style.opacity = "1";
section.style.transform = "translateY(0)";

}

});

});

sections.forEach(section => {

section.style.opacity = "0";
section.style.transform = "translateY(60px)";
section.style.transition = "all 1s";

});


// ===============================
// GALLERY LIGHTBOX
// ===============================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

img.addEventListener("click", () => {

const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,0.9)";
overlay.style.display = "flex";
overlay.style.alignItems = "center";
overlay.style.justifyContent = "center";
overlay.style.zIndex = "2000";

const largeImg = document.createElement("img");
largeImg.src = img.src;
largeImg.style.maxWidth = "90%";
largeImg.style.maxHeight = "90%";
largeImg.style.borderRadius = "10px";

overlay.appendChild(largeImg);

overlay.addEventListener("click", () => {
overlay.remove();
});

document.body.appendChild(overlay);

});

});


// ===============================
// RESERVATION FORM
// ===============================

const reservationForm = document.querySelector(".reservation form");

if(reservationForm){

reservationForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Reservation received! Our team will contact you shortly.");

reservationForm.reset();

});

}
