/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
    
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");


function linkAction(){
    const navMenu = document.querySelector("#nav-menu");
    //por cada link que clickeamos se remueva el show-menu class
    navMenu.classList.remove("show-menu")
}

navLink.forEach(link =>{
    link.addEventListener("click" , linkAction);
})

/*==================== ACCORDION SKILLS ====================*/
// const skillsContent = document.querySelectorAll(".skills__content");
// console.log(skillsContent)
// const skillsHeader = document.querySelectorAll(".skills__header");
// console.log(skillsHeader)
// const skillList = document.querySelectorAll(".skills__list")

// skillsContent.forEach(el=>{
//     el.addEventListener("click",()=>{
//         skillList.classList.toggle("skills__bground")
        
//     })
// })










/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')


tabs.forEach(tab =>{
    tab.addEventListener("click", ()=>{
        const target = document.querySelector(tab.dataset.target)


        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})




/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
   
  });

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ============*/