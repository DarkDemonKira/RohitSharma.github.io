// ===== Loader =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("hide"), 900);
});

// ===== Scroll progress bar =====
const progressBar = document.getElementById("scrollProgress");
function updateProgress(){
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progressBar.style.width = scrolled + "%";
}
document.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// ===== Scroll reveal (IntersectionObserver) =====
const revealEls = document.querySelectorAll("[data-reveal]");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add("in-view");

      // animate skill bars once their well is revealed
      if (entry.target.classList.contains("skill-well")){
        const fill = entry.target.querySelector(".skill-fill");
        const level = entry.target.getAttribute("data-level");
        requestAnimationFrame(() => { fill.style.width = level + "%"; });
      }
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });
revealEls.forEach((el) => revealObserver.observe(el));

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("[data-nav]");
function setActiveLink(){
  let current = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 140;
    if (window.scrollY >= top) current = sec.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}
document.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");
navToggle.addEventListener("click", () => navMobile.classList.toggle("open"));
navMobile.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navMobile.classList.remove("open"))
);

// ===== Scroll cue button =====
document.getElementById("scrollCue").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// ===== Touch / press feedback (mobile-friendly) =====
document.querySelectorAll(".press, .timeline-card, .edu-card, .chip, .contact-link").forEach((el) => {
  el.addEventListener("touchstart", () => el.classList.add("touch-active"), { passive: true });
  el.addEventListener("touchend", () => el.classList.remove("touch-active"), { passive: true });
  el.addEventListener("touchcancel", () => el.classList.remove("touch-active"), { passive: true });
});
