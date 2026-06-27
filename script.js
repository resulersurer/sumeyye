// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.cv-section').forEach(section => {
  observer.observe(section);
});

// Typing effect for the profession tag
const professionEl = document.querySelector('.profession-tag');
if (professionEl) {
  const text = professionEl.textContent;
  professionEl.textContent = '';
  let i = 0;
  const type = () => {
    if (i < text.length) {
      professionEl.textContent += text[i++];
      setTimeout(type, 50);
    }
  };
  setTimeout(type, 400);
}

// Skill tags stagger animation
document.querySelectorAll('.skill-tag').forEach((tag, i) => {
  tag.style.opacity = '0';
  tag.style.transform = 'translateX(-20px)';
  tag.style.transition = 'all 0.4s ease';
  setTimeout(() => {
    tag.style.opacity = '1';
    tag.style.transform = 'translateX(0)';
  }, 600 + i * 80);
});

// Competency cards stagger
document.querySelectorAll('.comp-card').forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'scale(0.9)';
  card.style.transition = 'all 0.4s ease';
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'scale(1)';
  }, 800 + i * 100);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});

console.log('✅ Sümeyye Ersürer CV - Yüklendi!');
