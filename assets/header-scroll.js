window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header-wrapper").classList.add("scrolled");
  } else if (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80){
    document.querySelector(".header-wrapper").classList.remove("scrolled");
  }
  const backButton = document.querySelector('.header-back-button')
  if(window.location.href === 'https://studionoyes.myshopify.com/' || window.location.pathname.includes('projects') || window.location.pathname.includes('pages/contact')){
    backButton.classList.add('hidden')
  }
}