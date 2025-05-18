<script>
// Toggle Dark/Light Mode
const toggleButton = document.getElementById('toggleMode');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
});

// Typing Effect
const typedText = document.querySelector(".typing");
const words = ["Full-Stack Developer", "Web Designer", "Tech Enthusiast"];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  const currentWord = words[i];
  const currentText = currentWord.substring(0, j);
  typedText.textContent = currentText;

  if (!isDeleting && j < currentWord.length) {
    j++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
    setTimeout(typeEffect, 1000);
  }
}
typeEffect();
</script>
