// Год в футере
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Форма на странице контактов (если есть)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    form.reset();
  });
}
