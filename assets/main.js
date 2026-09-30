(() => {
  // ---------- Playables: load iframe when the phone frame enters the viewport ----------
  const phones = document.querySelectorAll('.phone');

  const load = (phone) => {
    const iframe = phone.querySelector('iframe');
    if (iframe.src) return;
    iframe.addEventListener('load', () => phone.classList.add('is-loaded'), { once: true });
    iframe.src = iframe.dataset.src;
  };

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        load(entry.target);
        io.unobserve(entry.target);
      });
    }, { rootMargin: '200px 0px' });
    phones.forEach((p) => io.observe(p));
  } else {
    phones.forEach(load);
  }

  // Restart: reassign iframe src
  document.querySelectorAll('.btn-restart').forEach((btn) => {
    btn.addEventListener('click', () => {
      const phone = btn.closest('.card').querySelector('.phone');
      const iframe = phone.querySelector('iframe');
      phone.classList.remove('is-loaded');
      iframe.addEventListener('load', () => phone.classList.add('is-loaded'), { once: true });
      iframe.src = iframe.dataset.src;
    });
  });

  // ---------- Promo video modal ----------
  const modal = document.getElementById('video-modal');
  const video = modal.querySelector('video');
  const title = modal.querySelector('.video-modal__title');

  const close = () => modal.close();

  document.querySelectorAll('.js-video').forEach((btn) => {
    btn.addEventListener('click', () => {
      title.textContent = btn.dataset.title || '';
      video.src = btn.dataset.video;
      modal.showModal();
      video.play().catch(() => {});
    });
  });

  modal.querySelector('.video-modal__close').addEventListener('click', close);
  // Click on backdrop closes
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  modal.addEventListener('close', () => {
    video.pause();
    video.removeAttribute('src');
    video.load();
  });
})();
