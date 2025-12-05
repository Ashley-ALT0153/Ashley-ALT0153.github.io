const menuBtn = document.getElementsByClassName('button');
const menuAbout = document.getElementById('menu_about');
const menuLinks = document.querySelectorAll('.menu_about a');

function toggleMenu() {
  menuAbout.classList.toggle('active');
};

menuBtn.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainPages.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('nav')) {
      mainPages.classList.remove('active');
  }
});