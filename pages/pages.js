const initialWidth = window.innerWidth;
const initialHeight = window.innerHeight;


  //const homeContainer = document.querySelector(".home-container");
  const aboutContainer = document.querySelector(".about-container");
  const servicesContainer = document.querySelector(".services-container");

  const scrollPosition = window.scrollY || document.documentElement.scrollTop;


  const homePosition = homeContainer.getBoundingClientRect().top;
  const aboutPosition = aboutContainer.getBoundingClientRect().top;
  const servicesPosition = servicesContainer.getBoundingClientRect().top;


//home about services

  const finalHomePosition = homePosition + scrollPosition;
  const finalAboutPosition = aboutPosition + scrollPosition;
  const finalServicesPosition = servicesPosition + scrollPosition;


// scroll function to target container
  function scrollToTarget(finalPosition) {
    console.log("clicked")
    const startPosition = window.scrollY;
    const distance = finalPosition - startPosition;
    let start = null;
  
    function animation(currentTime) {
      if (start === null) start = currentTime;
      const elapsed = currentTime - start;
      const duration = 500; // Adjust this value to control the animation speed
      const progress = Math.min(elapsed / duration, 1);
      const scrollPosition = startPosition + distance * progress;
      window.scrollTo(0, scrollPosition);
  
      if (progress < 1) {
        window.requestAnimationFrame(animation);
      }
    }
  
    window.requestAnimationFrame(animation);
  }
  
//home about services
  // Event Listeners to scroll to target pages
  let currentTab = document.querySelector(".current-tab");
 

  const homeTab = document.querySelector("#home-tab");
  homeTab.addEventListener('click', () => {
    currentTab = document.querySelector(".current-tab");
    if (currentTab !== null){ currentTab.classList.remove("current-tab");}
    homeTab.classList.remove("current-tab");
    homeTab.classList.add("current-tab");
    scrollToTarget(finalHomePosition);
  });

  const aboutTab = document.querySelector("#about-tab");
  aboutTab.addEventListener('click', () => {
    currentTab = document.querySelector(".current-tab");
    if (currentTab !== null){ currentTab.classList.remove("current-tab");}
    aboutTab.classList.add("current-tab");
    scrollToTarget(finalAboutPosition);
  });

  const servicesTab = document.querySelector("#services-tab");
  servicesTab.addEventListener('click', (e) => {
    e.preventDefault();
    
    localStorage.setItem('current-tab','services-tab')

    currentTab = document.querySelector(".current-tab");
    if (currentTab !== null){ currentTab.classList.remove("current-tab");}
    servicesTab.classList.add("current-tab");
    scrollToTarget(finalServicesPosition);

    window.location.href = '../index.html';
  });
  
 




  const updatesTab = document.querySelector("#about-tab");
  const updatesClass = updatesTab.classList;

if (updatesClass[0] === "current-tab") {
    scrollToTarget(finalAboutPosition);
}


if (localStorage.setItem['current-tab'] === "current-tab") {
    scrollToTarget(finalAboutPosition);
}