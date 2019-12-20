var links = document.querySelector('.categories');

links.addEventListener('click', highlightLink);

  function highlightLink(event) {
    if(event.target.classList.contains('active-link'))  {
      console.log('hi')
      event.target.classList.remove('active-link');
    } else {
      for(var i = 0; i < links.length; i++) {
        links[i].classList.remove('active-link');
      }
      event.target.classList.add('active-link');
    }
  }
