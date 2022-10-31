console.log("try");

const openBtn = document.querySelector(".openbtn");
const closeBtn = document.querySelector(".closebtn");
const maincontent = document.querySelector("#maincontent");

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    const main = document.getElementById("main");
    main.style.marginLeft = "250px";
    main.removeChild(openBtn);
    maincontent.style.marginLeft="250px";
    
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    const main = document.getElementById("main");
    main.style.marginLeft = "0px";
    maincontent.style.marginLeft="0px";
    main.appendChild(openBtn);
  }
  
  openBtn.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);