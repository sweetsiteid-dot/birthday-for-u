/* =====================================
   BIRTHDAY SPECIAL
   KAIA 🤍 KAIRO
   MIDNIGHT NAVY EDITION
===================================== */


/* =========================
   ELEMENTS
========================= */

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const memoryBtn = document.getElementById("memoryBtn");


/* =========================
   OPEN WEBSITE
========================= */

if (openBtn) {

    openBtn.addEventListener("click", async () => {

        /* PLAY MUSIC */

        if (music) {
            music.volume = 0.7;

            try {
                await music.play();
            } catch (error) {
                console.log("Music playback could not start:", error);
            }
        }


        /* UPDATE MUSIC BUTTON */

        if (musicBtn) {
            musicBtn.innerHTML = "⏸ Pause Music";
        }


        /* LOVE & STAR FALLING */

        const icons = [
            "🤍",
            "✨",
            "⭐",
            "♡",
            "✦",
            "🌙"
        ];

        for (let i = 0; i < 80; i++) {

            const item = document.createElement("div");

            item.innerHTML =
                icons[Math.floor(Math.random() * icons.length)];

            item.classList.add("falling");

            item.style.left =
                Math.random() * 100 + "vw";

            item.style.fontSize =
                Math.random() * 20 + 20 + "px";

            item.style.animationDuration =
                Math.random() * 2 + 2 + "s";

            document.body.appendChild(item);

            setTimeout(() => {
                item.remove();
            }, 4500);

        }


        /* OPENING TRANSITION */

        setTimeout(() => {

            if (opening) {

                opening.style.opacity = "0";
                opening.style.transition = "1s ease";

            }

            setTimeout(() => {

                if (opening) {
                    opening.style.display = "none";
                }

                if (mainContent) {
                    mainContent.style.display = "block";
                    mainContent.style.opacity = "0";

                    requestAnimationFrame(() => {
                        mainContent.style.transition = "1s ease";
                        mainContent.style.opacity = "1";
                    });
                }

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }, 1000);

        }, 2000);

    });

}


/* =========================
   MEMORY BUTTON
========================= */

if (memoryBtn) {

    memoryBtn.addEventListener("click", () => {

        const memories = document.getElementById("memories");

        if (memories) {

            memories.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


/* =========================
   MUSIC BUTTON
========================= */

if (musicBtn && music) {

    musicBtn.addEventListener("click", async () => {

        if (music.paused) {

            try {

                await music.play();

                musicBtn.innerHTML = "⏸ Pause Music";

            } catch (error) {

                console.log("Unable to play music:", error);

            }

        } else {

            music.pause();

            musicBtn.innerHTML = "🎵 Play Music";

        }

    });

}


/* =========================
   AUTO SLIDER
========================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    if (!slides.length) return;

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");

    if (dots[index]) {
        dots[index].classList.add("active");
    }

}


/* AUTOMATIC SLIDE */

if (slides.length > 1) {

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 3000);

}


/* CLICK DOTS */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

    });

});


/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const icons = [
        "🤍",
        "♡",
        "♥",
        "✦",
        "✨"
    ];

    heart.innerHTML =
        icons[Math.floor(Math.random() * icons.length)];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 18 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 8 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 13000);

}


/* CREATE HEARTS AUTOMATICALLY */

setInterval(createHeart, 700);


/* =========================
   INITIALIZATION
========================= */

showSlide(0);


/* =========================
   BIRTHDAY CONSOLE MESSAGE
========================= */

console.log(
    "%c Happy Birthday Kairo! 🤍 ",
    "background: #071426; color: #ffffff; padding: 12px; font-size: 16px; border-radius: 8px;"
);

console.log(
    "%c Made with love by Kaia.",
    "color: #8da9c9; font-size: 13px;"
);
