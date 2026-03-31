// MOBILE HAMBURGER MENU

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
if(navMenu.style.display === "flex"){
navMenu.style.display = "none";
}else{
navMenu.style.display = "flex";
}
});


// STICKY NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.style.background = "rgba(0,0,0,0.95)";
navbar.style.transition = "0.4s";
}else{
navbar.style.background = "rgba(0,0,0,0.7)";
}

});


// HERO IMAGE ROTATION (20 images)

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
"https://images.unsplash.com/photo-1466978913421-dad2ebd01d17",
"https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
"https://images.unsplash.com/photo-1506086679525-9e74c7c2f76d",
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




// LIGHTBOX GALLERY

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

galleryImages.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";
lightboxImg.src = img.src;

});

});


lightbox.addEventListener("click", () => {

lightbox.style.display = "none";

});




// SCROLL REVEAL ANIMATION

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const sectionTop = section.getBoundingClientRect().top;
const triggerPoint = window.innerHeight / 1.2;

if(sectionTop < triggerPoint){
section.style.opacity = "1";
section.style.transform = "translateY(0)";
}

});

});


// INITIAL STYLE FOR ANIMATION

sections.forEach(section => {

section.style.opacity = "0";
section.style.transform = "translateY(60px)";
section.style.transition = "1s";

});




// RESERVATION FORM INTERACTION

const reservationForm = document.querySelector(".reservation form");

if(reservationForm){

reservationForm.addEventListener("submit", function(e){

e.preventDefault();

alert("🎉 Reservation request received! Our team will contact you shortly.");

reservationForm.reset();

});

}




// PREMIUM BACKGROUND VIOLIN MUSIC

const violinMusic = new Audio(
"https://cdn.pixabay.com/download/audio/2022/03/15/audio_6dfb5b1d14.mp3?filename=romantic-background-110191.mp3"
);

violinMusic.loop = true;
violinMusic.volume = 0.3;


// Play music only after user interaction (browser requirement)

document.addEventListener("click", () => {

violinMusic.play().catch(()=>{});

},{ once:true });




// SMOOTH SCROLL FOR NAV LINKS

document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior: "smooth"
});

});

});
