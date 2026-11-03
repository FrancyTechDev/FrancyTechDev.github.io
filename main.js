(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('navigation');
  if (!toggle || !menu) return;
  const closeMenu = () => {menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Apri menu');};
  toggle.addEventListener('click', () => {
    const open = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {if(event.key === 'Escape') closeMenu();});
})();
