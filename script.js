// ==========================================
// ANIMASI SCROLL
// ==========================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    observer.observe(section);

});


// ==========================================
// EFEK KETIKA HALAMAN SELESAI DIMUAT
// ==========================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ==========================================
// EFEK TOMBOL PROJECT
// ==========================================

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.02)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});
