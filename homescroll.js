const initialWidth = window.innerWidth;
const initialHeight = window.innerHeight;

const homeContainer = document.querySelector(".home-container");
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

// FUNCTIONS--------------------------------------------------------------------------

// scroll function to target container
function scrollToTarget(finalPosition) {
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

//function to detect and select current page tab
function detectTab(clickedTab) {
    currentTab = document.querySelector(".current-tab");
    if (currentTab !== null){ currentTab.classList.remove("current-tab");}
    clickedTab.classList.remove("current-tab");
    clickedTab.classList.add("current-tab");
}


  // Event Listeners to scroll to target pages
  let currentTab = document.querySelector(".current-tab");
 
  const homeTab = document.querySelector("#home-tab");
  const aboutTab = document.querySelector("#about-tab");
  const servicesTab = document.querySelector("#services-tab");




 homeTab.addEventListener('click', () => {
    detectTab(homeTab);
    scrollToTarget(finalHomePosition);
  });


  aboutTab.addEventListener('click', () => {
    detectTab(aboutTab);
    scrollToTarget(finalAboutPosition);
  });

 
  servicesTab.addEventListener('click', (e) => {
    e.preventDefault();
    detectTab(servicesTab);
    scrollToTarget(finalServicesPosition);


  });
  
 




  const updatesTab = document.querySelector("#home-tab");
  const updatesClass = updatesTab.classList;

if (localStorage.getItem('current-tab') === "current-tab") {
    scrollToTarget(finalHomePosition);
    localStorage.setItem('current-tab','home-tab')
}


if (localStorage.getItem('current-tab') === "about-tab") {
    scrollToTarget(finalAboutPosition);
    localStorage.setItem('current-tab','home-tab')
}


if (localStorage.getItem('current-tab') === "services-tab") {
    scrollToTarget(finalServicesPosition);
    localStorage.setItem('current-tab','home-tab')
}