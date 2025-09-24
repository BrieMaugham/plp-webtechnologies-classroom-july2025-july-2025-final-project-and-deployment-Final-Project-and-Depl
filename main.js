// ================================
// MAIN.JS for Bridie Maugham Dibora Portfolio
// ================================

// CONTACT MODAL TOGGLE
const contactBtn = document.getElementById("contact-float-btn");
const contactModal = document.getElementById("contact-modal");
const closeModal = document.getElementById("close-modal");

// Open modal
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    contactModal.classList.remove("hidden");
  });
}

// Close modal on "X" button
if (closeModal) {
  closeModal.addEventListener("click", () => {
    contactModal.classList.add("hidden");
  });
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.classList.add("hidden");
  }
});

// ================================
// SMOOTH SCROLL FOR NAV LINKS
// (if you later add navigation menu with anchor links)
// ================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ================================
// SKILL BAR ANIMATION ON SCROLL
// ================================
const skillFills = document.querySelectorAll(".fill");

const animateSkills = () => {
  skillFills.forEach((fill) => {
    const rect = fill.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      fill.style.animationPlayState = "running";
    }
  });
};

// Trigger on load + scroll
window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

// ================================
// FORM VALIDATION (Contact Form)
// ================================
const contactForms = document.querySelectorAll("form");

contactForms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector("textarea");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email.value)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    // SUCCESS FEEDBACK (simulating)
    alert("✅ Thank you! Your message has been sent.");
    form.reset();
    contactModal.classList.add("hidden");
  });
});
