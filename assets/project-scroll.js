const arrow = document.querySelector('scroll-arrow');

// show/hide arrow based on scroll position
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    arrow.style.display = 'block';
  } else {
    arrow.style.display = 'none';
  }
});

// scroll to top when arrow is clicked
arrow.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
