const header = document.querySelector("header");

// ............. sticky navbar .......................//
// const first_skill = document.querySelector(".skill:first-child");
// const sk_counter = document.querySelectorAll(".counter span");
// const progress_bar =document.querySelectorAll(".skill svg circle");

// window.addEventListener("scroll", () => {
//     skillsCounter();
// })


// .....................................sd.............
function stickynavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}
stickynavbar();

window.addEventListener("scroll", stickynavbar);
// ............. reveal animation .......................//

// let sr = ScrollReveal({
//     duration: 2500,
//     distance: "60px",
// });

// // sr.reveal(".showcase-info", {delay: 600});
// sr.reveal(".showcase-img", {origin: "top", delay: 700});

// // // ...............\


// function hasRsached (el) {
//     let topPosition = el.getBoundingClientRect().top;

//     if (window.innerHeight >= topPosition + el.offsetHeight) return true;  
//     return false;
//  }
// function skillsCounter() {
//     // if (!hasRsached(first_skill)) return;
//     // console.log("you've reached the skill
//     progress_bars.forEach((p) => (p.style.animation = "progress 2s ease-in-out"));
// }


// -----------------------------------asasassasasasaa sasasasas .......-------------------
const ml_section = document.querySelector(".milestones")
const ml_counter = document.querySelectorAll(".number span")


window.addEventListener("scroll", () => {
    if(!skillsPlayed); skillsCounter();
    mlCounter();
})

function mlCounter() {
    if (!hasRsached(ml_counter)) return;
    ml_counter.forEach(ctr =>{
        let target =+ctr.dataset.target;

        setTimeout(()=>{
        updateCount(ctr, target)
    }, 400);

    }) 
    
}

// ...................................................

var mixer = mixitup('.portfolio-galary');

