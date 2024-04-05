const initialWidth = window.innerWidth;
const initialHeight = window.innerHeight;


  let currentTab = document.querySelector(".current-tab");
 

  const homeTab = document.querySelector("#home-tab");
  const aboutTab = document.querySelector("#about-tab");
  const servicesTab = document.querySelector("#services-tab");

  
  homeTab.addEventListener('click', (e) => {
    e.preventDefault(); 
    localStorage.setItem('current-tab','home-tab')
    window.location.href = '../index.html';

  });


  aboutTab.addEventListener('click', (e) => {
    e.preventDefault(); 
    localStorage.setItem('current-tab','about-tab')
    window.location.href = '../index.html';

  });


  servicesTab.addEventListener('click', (e) => {
    e.preventDefault(); 
    localStorage.setItem('current-tab','services-tab')
    window.location.href = '../index.html';
  });
  
 



