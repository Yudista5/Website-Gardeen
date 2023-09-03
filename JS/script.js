// Transition
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const offsetTop = document.querySelector(href).offsetTop;
  
      scroll({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });

  // Toggle class active

  const subMenu = document.querySelector('.sub-menu');
  //ketika user icon diklik
  document.querySelector('#user').onclick = () =>{
    subMenu.classList.toggle('active');
  };









  
