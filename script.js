const nav_toggle = document.querySelector(".nav_toggle");
const bars = document.querySelectorAll(".bar");
const nav = document.querySelector(".nav_links");


nav_toggle.addEventListener("click", Event =>{
    Event.preventDefault();
    bars.forEach((bar) =>{
        bar.classList.toggle("change");
    });
    nav.classList.toggle("active");
});

window.addEventListener("scroll", ()=>{
    bars.forEach((bar) =>{
        bar.classList.remove("change");
    });
    nav.classList.remove("active");
});


const btn_contact = document.querySelector('.btn_contact');
btn_contact.addEventListener("click", ()=>{
    const page = document.getElementById('contact')
    page.scrollIntoView();
});