function toggleHambMenu() {
  var hamb = document.querySelector('.hamb-btn')
  hamb.setAttribute(
    'aria-expanded', 
    `${!(hamb.getAttribute('aria-expanded') === 'true')}`
  );
  document.body.classList.toggle('data-disable-scroll-mobile');
}

async function copyHeadingLink(section) {
  // Copy
  var baseUrl = window.location.href.split('#')[0];
  navigator.clipboard.writeText(baseUrl + '#' + section);
  // Display tooltip
  var heading = document.getElementById(section);
  if (!heading.classList.contains('data-copy-success')) {
    heading.classList.toggle('data-copy-success');
    await new Promise(r => setTimeout(r, 2000));
    heading.classList.toggle('data-copy-success');
  }
}

// https://lab.hakim.se/progress-nav/
var toc = document.querySelector('#TableOfContents');
if (toc) {
  var tocItems = [].slice.call(toc.querySelectorAll('li'));
  // Cache element references and measurements
  tocItems = tocItems.map(function(item) {
    var anchor = item.querySelector('a');
    var target = document.getElementById(anchor.getAttribute('href').slice(1));
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
	var TOP_MARGIN = -0.1,
      BOTTOM_MARGIN = 0.2;

  window.addEventListener( 'scroll', sync, false );
  sync();

  function sync() {
    var windowHeight = window.innerHeight;
    tocItems.forEach(function(item) {
			var targetBounds = item.target.getBoundingClientRect();
			if (targetBounds.bottom > windowHeight * TOP_MARGIN && targetBounds.top < windowHeight * (1 - BOTTOM_MARGIN)) {
				item.listItem.classList.add('visible');
			}
			else {
				item.listItem.classList.remove('visible');
			}
		});
  }
}
