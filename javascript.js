// scroll detect for navigational Bar
///-----------------------------------------------
const navBar = document.querySelector("#navBar");
const logo = document.querySelector(".logo");

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // or document.documentElement.scrollTop for older browsers

    if (scrollPosition > lastScrollPosition && (scrollPosition - lastScrollPosition) >2  ) {
  
      //console.log("Scrolling down!");
      //console.log(scrollPosition);
    navBar.classList.add("navBar-down");
    logo.classList.add("logo-down")
      
    } else if (scrollPosition < lastScrollPosition&& (lastScrollPosition-scrollPosition) >30  ) {
      // console.log("Scrolling up!");
       //console.log(scrollPosition);
    navBar.classList.add("navBar-up");  
    navBar.classList.remove("navBar-down");
    logo.classList.remove("logo-down")
    } 
    
    lastScrollPosition = scrollPosition;
  });
  
  let lastScrollPosition = 0; 
//---------------------------------------------------

  