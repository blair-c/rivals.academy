function toggleHambMenu() {
  var hamb = document.querySelector(".hamb-btn")
  hamb.classList.toggle("data-open")
  hamb.setAttribute(
    'aria-expanded', 
    `${!(hamb.getAttribute('aria-expanded') === 'true')}`
  );
}