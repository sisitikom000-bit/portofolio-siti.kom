// ======================================
// TYPING EFFECT
// ======================================

const words = [
    "Programmer",
    "Web Developer",
    "Game Developer",
    "RPL Student"
];

const typingElement = document.querySelector(".typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }
    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 100
    );
}

typingEffect();


// ======================================
// SCROLL REVEAL
// ======================================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-card, .project-card, .contact"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach((element) => {

    element.classList.add("hidden");

    revealObserver.observe(element);

});


// ======================================
// CURRENT YEAR
// ======================================

console.log(
    "Hello, fellow explorer 🚀"
);
