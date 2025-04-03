document.addEventListener('DOMContentLoaded', function () {
  const section = document.getElementById('inviteSection');
  const image = document.querySelector('.inv-image');
  const otherSections = document.querySelectorAll(
    '.section:not(#inviteSection)'
  );
  const audio = document.getElementById('weddingMusic');

  // Ховаємо всі інші секції при завантаженні
  otherSections.forEach(sec => {
    sec.style.display = 'none';
  });

  image.addEventListener('click', function () {
    // Ховаємо заголовок і текст
    section.querySelectorAll('h1, p').forEach(el => {
      el.style.display = 'none';
    });

    section.classList.add('no-padding');

    // Додаємо клас для збільшення фото
    image.classList.add('expanded');

    // Перевіряємо, чи вже є текст, якщо ні — додаємо
    if (!document.querySelector('.image-text')) {
      let textOverlay = document.createElement('div');
      textOverlay.classList.add('image-text');
      textOverlay.innerHTML =
        '<p class="inv-text-first"> WEDDING DAY</p>  <p class="inv-text-second">ANDRIY & JULIA</p> <p class="inv-text-thirt">ГОРТАЙТЕ НИЖЧЕ</p>';
      section.appendChild(textOverlay);

      // Додаємо клас для анімації
      setTimeout(() => {
        textOverlay.classList.add('visible');
      }, 100);
    }

    if (audio.paused) {
      audio.play(); // Вмикає музику
    } else {
      audio.pause(); // Зупиняє музику, якщо натиснути ще раз
    }

    // Показуємо інші секції з плавною анімацією
    setTimeout(() => {
      otherSections.forEach(sec => {
        sec.style.display = 'block';
        sec.style.opacity = '0';
        sec.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => (sec.style.opacity = '1'), 50);
      });
    }, 1000); // Невелика затримка для красивого ефекту
  });
});
