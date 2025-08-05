document.addEventListener("DOMContentLoaded", () => {
  // === MENÚ TOGGLE ===
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    const expanded = toggle.getAttribute("aria-expanded") === "true" || false;
    toggle.setAttribute("aria-expanded", !expanded);
});

  // === CARRUSEL TEAM (solo móvil) ===
const teamTrack = document.querySelector(".team__track");
const teamItems = document.querySelectorAll(".team__item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let teamIndex = 0;
const totalTeam = teamItems.length;

function updateTeamCarousel() {
    const itemWidth = teamItems[0].offsetWidth + 20;
    const maxIndex = totalTeam - 1;

    if (teamIndex < 0) teamIndex = 0;
    if (teamIndex > maxIndex) teamIndex = maxIndex;

    teamTrack.style.transform = `translateX(-${teamIndex * itemWidth}px)`;
}

nextBtn?.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        teamIndex++;
        updateTeamCarousel();
    }
});

prevBtn?.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        teamIndex--;
        updateTeamCarousel();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        teamIndex = 0;
        teamTrack.style.transform = "translateX(0)";
    }
});

// === CARRUSEL Equipo (solo móvil) ===
const testimonialTrack = document.querySelector(".tarjetas-content");
const btnPrev = document.getElementById("prevTestimonial");
const btnNext = document.getElementById("nextTestimonial");
const testimonialCards = testimonialTrack?.children || [];

let testimonialIndex = 0;

function updateTestimonialCarousel() {
    const width = testimonialCards[0].offsetWidth + 32;
    testimonialTrack.style.transform = `translateX(-${testimonialIndex * width}px)`;
}

btnNext?.addEventListener("click", () => {
    if (window.innerWidth <= 768 && testimonialIndex < testimonialCards.length - 1) {
        testimonialIndex++;
        updateTestimonialCarousel();
    }
});

btnPrev?.addEventListener("click", () => {
    if (window.innerWidth <= 768 && testimonialIndex > 0) {
        testimonialIndex--;
        updateTestimonialCarousel();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        testimonialIndex = 0;
        testimonialTrack.style.transform = "translateX(0)";
    }
});
});


// Seccion Testimonios Moviles
document.addEventListener("DOMContentLoaded", () => {
const track = document.querySelector(".tarjetas-content");
const cards = document.querySelectorAll(".tarjeta");
const prev = document.getElementById("prevTestimonial");
const next = document.getElementById("nextTestimonial");

let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
    if (index < cards.length - 1) {
    index++;
    updateCarousel();
    }
});

prev.addEventListener("click", () => {
    if (index > 0) {
    index--;
    updateCarousel();
    }
});
});
