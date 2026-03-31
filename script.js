// =============================
// MOBILE HAMBURGER MENU
// =============================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

if(navMenu.style.display === "flex"){
navMenu.style.display = "none";
}else{
navMenu.style.display = "flex";
navMenu.style.flexDirection = "column";
}

});


// =============================
// STICKY NAVBAR EFFECT
// =============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 60){
navbar.style.background = "rgba(0,0,0,0.95)";
}else{
navbar.style.background = "rgba(0,0,0,0.7)";
}

});


// =============================
// HERO IMAGE ROTATION
// =============================

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
"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
"https://images.unsplash.com/photo-1470337458703-46ad1756a187",
"https://images.unsplash.com/photo-1525610553991-2bede1a236e2",
"https://images.unsplash.com/photo-1551218808-94e220e084d2",
"https://images.unsplash.com/photo-1506086679525-9e74c7c2f76d",
"https://images.unsplash.com/photo-1466978913421-dad2ebd01d17",
"https://images.unsplash.com/photo-1544145945-f90425340c7e",
"https://images.unsplash.com/photo-1504674900247-0877df9cc836",
"https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
"https://images.unsplash.com/photo-1555992336-03a23c6c81d6",
"https://images.unsplash.com/photo-1528605248644-14dd04022da1",
"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"

];

let heroIndex = 0;

setInterval(() => {

heroIndex++;

if(heroIndex >= heroImages.length){
heroIndex = 0;
}

hero.style.backgroundImage = `url(${heroImages[heroIndex]})`;

},5000);



// =============================
// GALLERY LIGHTBOX
// =============================

const galleryImages = document.querySelectorAll(".gallery-grid img");

let lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

const lightboxImg = document.createElement("img");
lightbox.appendChild(lightboxImg);

galleryImages.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";
lightboxImg.src = img.src;

});

});

lightbox.addEventListener("click", () => {

lightbox.style.display = "none";

});



// =============================
// SCROLL REVEAL ANIMATION
// =============================

const sections = document.querySelectorAll("section");

const reveal = () => {

sections.forEach(section => {

const sectionTop = section.getBoundingClientRect().top;
const trigger = window.innerHeight * 0.85;

if(sectionTop < trigger){

section.style.opacity = "1";
section.style.transform = "translateY(0)";

}

});

};

window.addEventListener("scroll", reveal);


// initial hidden state

sections.forEach(section => {

section.style.opacity = "0";
section.style.transform = "translateY(60px)";
section.style.transition = "1s";

});



// =============================
// SMOOTH SCROLL NAVIGATION
// =============================

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});



// =============================
// RESERVATION FORM
// =============================

const reservationForm = document.querySelector(".reservation form");

if(reservationForm){

reservationForm.addEventListener("submit", function(e){

e.preventDefault();

alert("🎉 Reservation received! Our team will contact you shortly.");

reservationForm.reset();

});

}



// =============================
// FLOATING BUTTON VISIBILITY
// =============================

window.addEventListener("scroll", () => {

const floatingButtons = document.querySelectorAll(".floating-btn");

floatingButtons.forEach(btn => {

if(window.scrollY > 400){
btn.style.opacity = "1";
}else{
btn.style.opacity = "0.6";
}

});

});
