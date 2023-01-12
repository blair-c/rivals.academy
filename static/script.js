function toggleHambMenu() {
  var hamb = document.querySelector(".hamb-btn")
  hamb.classList.toggle("data-open")
  hamb.setAttribute(
    'aria-expanded', 
    `${!(hamb.getAttribute('aria-expanded') === 'true')}`
  );
}

async function copyHeadingLink(section) {
  // Copy
  navigator.clipboard.writeText(window.location.href + "#" + section);
  // Display tooltip
  var heading = document.getElementById(section);
  if (!heading.classList.contains("data-copy-success")) {
    heading.classList.toggle("data-copy-success");
    await new Promise(r => setTimeout(r, 2000));
    heading.classList.toggle("data-copy-success");
  }
}