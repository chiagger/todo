const openBtn = document.querySelector(".openbtn");

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    const main = document.getElementById("main");
    main.style.marginLeft = "250px";
    main.removeChild(openBtn);
    maincontent.style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    const main = document.getElementById("main");
    main.style.marginLeft = "0px";
    maincontent.style.marginLeft = "0px";
    main.appendChild(openBtn);
}



module.exports = {openNav, closeNav}

