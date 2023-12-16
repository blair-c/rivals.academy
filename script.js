function toggleHambMenu() {
  let hamb = document.querySelector('.hamb-btn')
  hamb.setAttribute(
    'aria-expanded', 
    `${!(hamb.getAttribute('aria-expanded') === 'true')}`
  );
  document.body.classList.toggle('data-disable-scroll-mobile');
}

function toggleTheme() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  } else {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  }
}

let lang = document.querySelector('#lang-btn');
if (lang) {
  let translation = document.querySelector('.lang-dropdown');
  translation = translation.children[0].children[0];

  function toggleLangMenu() {
    if (lang.getAttribute('aria-expanded') === 'true') {
      lang.setAttribute('aria-expanded', false);
      translation.setAttribute('tabindex', '-1');
    }
    else {
      lang.setAttribute('aria-expanded', true);
      translation.removeAttribute('tabindex');
    }
  }
  // Alternate dismissals
  window.onclick = function(e) {
    if (!e.target.matches("#lang-btn")) {
      lang.setAttribute('aria-expanded', false);
      translation.setAttribute('tabindex', '-1');
    }
  }
  document.addEventListener('keyup', (e) => {
    if (e.key == 'Escape') {
      lang.setAttribute('aria-expanded', false);
      translation.setAttribute('tabindex', '-1');
    }
  });
}

async function copyHeadingLink(section) {
  // Copy
  let baseUrl = window.location.href.split('#')[0];
  navigator.clipboard.writeText(baseUrl + '#' + section);
  // Display tooltip
  let heading = document.getElementById(section);
  if (!heading.classList.contains('data-copy-success')) {
    heading.classList.toggle('data-copy-success');
    await new Promise(r => setTimeout(r, 2000));
    heading.classList.toggle('data-copy-success');
  }
}

// https://lab.hakim.se/progress-nav/
let toc = document.querySelector('#TableOfContents');
if (toc) {
  let tocItems = [].slice.call(toc.querySelectorAll('li'));
  // Cache element references and measurements
  tocItems = tocItems.map(function(item) {
    let anchor = item.querySelector('a');
    let target = document.getElementById(anchor.getAttribute('href').slice(1));
    return {
      listItem: item,
      anchor: anchor,
      target: target
    };
  });
  // Remove missing targets
  tocItems = tocItems.filter( function(item) {
    return !!item.target;
  });

	// Factor of screen size that the element must cross
	// before it's considered visible
	let TOP_MARGIN = 0,
      BOTTOM_MARGIN = 0.025;

  let footerDiv = document.querySelector(".article-footer-divider");

  window.addEventListener('scroll', sync, false);
  sync();

  function sync() {
    let windowHeight = window.innerHeight;
    tocItems.forEach(function(item, index, arr) {
			let topBound = item.target.getBoundingClientRect().top;
      let nextElement;
      if (index === arr.length - 1) {
        nextElement = footerDiv;
      }
      else {
        nextElement = tocItems[index + 1].target;
      }
      let bottomBound = nextElement.getBoundingClientRect().top;
			if (bottomBound > windowHeight * TOP_MARGIN && topBound < windowHeight * (1 - BOTTOM_MARGIN)) {
				item.listItem.classList.add('visible');
			}
			else {
				item.listItem.classList.remove('visible');
			}
		});
  }
}
