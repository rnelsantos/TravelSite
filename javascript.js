
const navBar = document.querySelector("#navBar");
const logo = document.querySelector(".logo");

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // or document.documentElement.scrollTop for older browsers
    
    if (scrollPosition > lastScrollPosition) {
      //console.log("Scrolling down!");

      navBar.classList.add("navBar-down");
      logo.classList.add("logo-down")
      
    } else if (scrollPosition < lastScrollPosition) {
       // console.log("Scrolling up!");
        navBar.classList.remove("navBar-down");
       
        logo.classList.remove("logo-down")
    }
    
    lastScrollPosition = scrollPosition;
  });
  
  let lastScrollPosition = 0; 


