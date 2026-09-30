(() => {
  const phones = [...document.querySelectorAll('.phone')];
  const modal = document.getElementById('video-modal');

  // ---------- Playables ----------
  const inView = new Map(phones.map((p) => [p, false]));

  // Tell the playable (via the page's mraid stub) whether it's viewable; Luna pauses itself when it isn't.
  const sync = (phone) => {
    const viewable = inView.get(phone) && !document.hidden && !modal.open;
    try { phone.querySelector('iframe').contentWindow.mraid._setViewable(viewable); } catch (e) { /* not loaded yet */ }
  };
  const syncAll = () => phones.forEach(sync);

  const load = (phone) => {
    const iframe = phone.querySelector('iframe');
    phone.classList.remove('is-loaded');
    iframe.addEventListener('load', () => { phone.classList.add('is-loaded'); sync(phone); }, { once: true });
    iframe.src = iframe.dataset.src;
  };

  const needsClick = (phone) => phone.hasAttribute('data-click-to-start') && !phone.classList.contains('is-started');

  // Load when the phone frame is near the viewport (except click-to-start ones)
  const loader = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      loader.unobserve(entry.target);
      if (!needsClick(entry.target)) load(entry.target);
    });
  }, { rootMargin: '200px 0px' });

  // Pause when the phone frame is mostly out of view
  const watcher = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      inView.set(entry.target, entry.intersectionRatio >= 0.3);
      sync(entry.target);
    });
  }, { threshold: [0, 0.3] });

  phones.forEach((p) => { loader.observe(p); watcher.observe(p); });
  document.addEventListener('visibilitychange', syncAll);

  // Click-to-start
  document.querySelectorAll('.phone__start').forEach((btn) => {
    btn.addEventListener('click', () => {
      const phone = btn.closest('.phone');
      phone.classList.add('is-started');
      load(phone);
    });
  });

  // Restart: reassign iframe src
  document.querySelectorAll('.btn-restart').forEach((btn) => {
    btn.addEventListener('click', () => {
      const phone = btn.closest('.card').querySelector('.phone');
      phone.classList.add('is-started');
      load(phone);
    });
  });

  // ---------- Promo video modal ----------
  const video = modal.querySelector('video');
  const yt = modal.querySelector('.video-modal__yt');
  const title = modal.querySelector('.video-modal__title');

  const open = () => { modal.showModal(); syncAll(); };
  const close = () => modal.close();

  document.querySelectorAll('.js-video').forEach((btn) => {
    btn.addEventListener('click', () => {
      title.textContent = btn.dataset.title || '';
      if (btn.dataset.youtube) {
        video.hidden = true;
        yt.hidden = false;
        yt.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${btn.dataset.youtube}?autoplay=1&rel=0" title="${title.textContent} video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
        open();
        return;
      }
      yt.hidden = true;
      video.hidden = false;
      video.src = btn.dataset.video;
      open();
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
    yt.innerHTML = '';
    syncAll();
  });
})();
