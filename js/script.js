// Animate all elements with .fade-* classes on scroll
document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll(".fade-up, .fade-left, .fade-right, .fade-scale");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Optional: animate only once
            }
        });
    }, { threshold: 0.3 });

    faders.forEach(el => observer.observe(el));
});


document.querySelectorAll(".home-btn").forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


gsap.registerPlugin(ScrollTrigger);


/* ================= SECTION CONTENT ANIMATION ================= */

gsap.utils.toArray(".section-inner").forEach((inner) => {

  gsap.fromTo(
    inner,
    {
      opacity: 0,
      y: 60
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: inner,
        start: "top 85%",
        once: true
      }
    }
  );

});
/* ================= PIN ABOUT CARD ================= */

ScrollTrigger.create({
  trigger: ".intro-wrapper",
  start: "top top",
  end: "+=200%",
  pin: ".text-align-center",
  pinSpacing: true
});

/* ================= HOME BUTTON SCROLL ================= */

document.querySelectorAll(".home-btn").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ================= SEARCH SCROLL (SAFE) ================= */

const portfolioSearch = document.getElementById("portfolioSearch");

if (portfolioSearch) {
  portfolioSearch.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      const value = this.value.toLowerCase();
      const sections = document.querySelectorAll("section");

      sections.forEach(section => {
        if (section.id.toLowerCase().includes(value)) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });
}

/* ================= MOBILE OPTIMIZATION ================= */

ScrollTrigger.matchMedia({
  "(max-width: 768px)": function () {
    ScrollTrigger.getAll().forEach(st => st.disable());
  }
});


/* ================= WORK SECTION ANIMATION  ================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll(".fade-right, .fade-left")
  .forEach(el => observer.observe(el));



  /* ================= SKILL SECTION ANIMATION  ================= */
  document.addEventListener("DOMContentLoaded", () => {
  const fills = document.querySelectorAll(".fill");

  const animateBars = () => {
    fills.forEach(fill => {
      const rect = fill.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        fill.style.width = fill.dataset.percent + "%";
      }
    });
  };

  window.addEventListener("scroll", animateBars);
  window.addEventListener("load", animateBars);
});



/* ================= CONTACT SECTION  ================= */
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const whatsappMessage =
    `New Portfolio Contact%0A%0A` +
    `Name: ${name}%0A` +
    `Company: ${company}%0A` +
    `Email: ${email}%0A` +
    `Phone: ${phone}%0A%0A` +
    `Message:%0A${message}`;

  const whatsappURL =
    `https://wa.me/923191912783?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
});


/* ================= FOOTER ================= */
const toggleBtn = document.querySelector(".social-toggle");
const socialWrap = document.querySelector(".footer-social");

toggleBtn.addEventListener("click", () => {
  socialWrap.classList.toggle("active");
});

