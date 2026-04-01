// MOBILE HAMBURGER MENU

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

    if(navMenu.style.display === "flex"){
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
    }

});



// CLOSE MENU AFTER CLICK (MOBILE)

document.querySelectorAll("#nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        if(window.innerWidth <= 768){
            navMenu.style.display = "none";
        }

    });

});



// STICKY NAVBAR EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.transition = "0.3s";
    }else{
        navbar.style.background = "rgba(0,0,0,0.8)";
    }

});




// SMOOTH SCROLL

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});




// GALLERY LIGHTBOX

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const lightbox = document.createElement("div");

        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";
        lightbox.style.background = "rgba(0,0,0,0.9)";
        lightbox.style.display = "flex";
        lightbox.style.alignItems = "center";
        lightbox.style.justifyContent = "center";
        lightbox.style.zIndex = "2000";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";

        lightbox.appendChild(image);

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            lightbox.remove();
        });

    });

});




// SCROLL REVEAL ANIMATION

const sections = document.querySelectorAll("section");

const revealSection = () => {

    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

};



// INITIAL STATE

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealSection);




// RESERVATION FORM

const reservationForm = document.querySelector(".reservation form");

if(reservationForm){

reservationForm.addEventListener("submit", function(e){

e.preventDefault();

alert("🎉 Reservation request received! Our team will contact you shortly.");

reservationForm.reset();

});

}
