const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

//dark and light
let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark-mode"){
    body.classList.add("dark");
}

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark-mode");
    } else {
        localStorage.setItem("mode", "light-mode");
    }
});

sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", e => {
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu"))
        nav.classList.remove("active");
});


scrollRevealOption = {
    distance: "30px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".land_image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".land_content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".land_content p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".land_container h4", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".land_content .btn1", {
    ...scrollRevealOption,
    delay: 1200,
});
ScrollReveal().reveal(".upcomings h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".upcomings p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".upcomings2 p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".upcomings3 p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".upcomings .btn3", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about-content img", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about-content h1", {
    ...scrollRevealOption,
    delay: 700,
});
ScrollReveal().reveal(".about-content p", {
    ...scrollRevealOption,
    delay: 700,
});

 
