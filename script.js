function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navSection = document.getElementById('navSection');

  if (hamburger) hamburger.classList.toggle('active');
  if (navSection) navSection.classList.toggle('active');
}

function goHome() {
  const welcome = document.getElementById('welcomeSection');
  if (welcome) welcome.style.display = 'flex';

  document.querySelectorAll('.section').forEach(function (section) {
    section.classList.remove('active');
  });

  const nav = document.getElementById('navSection');
  const hamburger = document.querySelector('.hamburger');
  if (nav) nav.classList.remove('active');
  if (hamburger) hamburger.classList.remove('active');

  window.scrollTo(0, 0);
}

function showSection(sectionId) {
  const welcome = document.getElementById('welcomeSection');
  if (welcome) welcome.style.display = 'none';

  document.querySelectorAll('.section').forEach(function (section) {
    section.classList.remove('active');
  });

  const target = document.getElementById(sectionId);
  if (target) target.classList.add('active');

  const nav = document.getElementById('navSection');
  const hamburger = document.querySelector('.hamburger');
  if (nav) nav.classList.remove('active');
  if (hamburger) hamburger.classList.remove('active');

  window.scrollTo(0, 0);
}

function toggleMode() {
  const body = document.body;
  const isLightMode = body.classList.contains('light-mode');

  if (isLightMode) {
    body.classList.remove('light-mode');
    localStorage.setItem('mode', 'dark');
  } else {
    body.classList.add('light-mode');
    localStorage.setItem('mode', 'light');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const savedMode = localStorage.getItem('mode');

  if (savedMode === 'light') {
    document.body.classList.add('light-mode');
  }
});