// ===== Menú Responsive =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===== Scroll Suave =====
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", (e) => {
        e.preventDefault();
        const destino = document.querySelector(enlace.getAttribute("href"));
        destino.scrollIntoView({ behavior: "smooth" });
    });
});

// ===== Botón Volver Arriba =====
const btnTop = document.getElementById("btn-top");
if (btnTop) {
    btnTop.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));


    // Mostrar/Ocultar botón al hacer scroll

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnTop.classList.add("visible");
        } else {
            btnTop.classList.remove("visible");
        }
    });
}

// ===== Animaciones con IntersectionObserver =====
const fadeSections = document.querySelectorAll(".fade-section");

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

fadeSections.forEach(section => fadeObserver.observe(section));
