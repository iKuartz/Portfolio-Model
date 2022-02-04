const menuOpen = document.getElementById('menu-toggle');
const xButton = document.getElementById('close');

function toggleMenu() {
  const nav = document.getElementById('intro-nav');
  nav.classList.toggle('menu-open');
}

menuOpen.addEventListener('click', toggleMenu);
xButton.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-ul-li').forEach((item) => {
    const nav = document.getElementById('intro-nav');
    
  item.addEventListener('click', () => {
    nav.classList.remove('menu-open');
  });
});
