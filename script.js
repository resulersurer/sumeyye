// Subtle entrance animations for cards
document.querySelectorAll('.card').forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(16px)';
  card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 150 + i * 80);
});

// Animate language dots
document.querySelectorAll('.dot.filled').forEach((dot, i) => {
  dot.style.transform = 'scale(0)';
  dot.style.transition = 'transform 0.3s ease';
  setTimeout(() => {
    dot.style.transform = 'scale(1)';
  }, 600 + i * 60);
});

// Animate skill pills
document.querySelectorAll('.pill').forEach((pill, i) => {
  pill.style.opacity = '0';
  pill.style.transition = 'opacity 0.3s ease, background 0.2s, color 0.2s, border-color 0.2s';
  setTimeout(() => {
    pill.style.opacity = '1';
  }, 500 + i * 40);
});

// Animate cert rows
document.querySelectorAll('.cert-row').forEach((row, i) => {
  row.style.opacity = '0';
  row.style.transform = 'translateX(-10px)';
  row.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  setTimeout(() => {
    row.style.opacity = '1';
    row.style.transform = 'translateX(0)';
  }, 700 + i * 100);
});
