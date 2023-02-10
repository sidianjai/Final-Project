window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

// CONTACT BUTTONS (circular text buttons)

const textButtons = document.querySelectorAll('.contact_btn');
textButtons.forEach(textButton => {
    let text = textButton.querySelector ('p');
    text.innerHTML = text.innerHTML.split('').map((character, index) => 
    `<span style="transform: rotate(${index * 13}deg)">${character}</span>`).join('')
})

//  Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        599:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1023:{
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});

// NavBar Toggle
const nav = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav_toggle-open');
const closeNavBtn = document.querySelector('#nav_toggle-close');


// Open NavBar
const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}
openNavBtn.addEventListener('click', openNav);


// Close NavBar
const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}
closeNavBtn.addEventListener('click', closeNav);

 // If Statement For The NavBar To Disappear When On The Web And Show On Tablets And Phones
 if (document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    })
 }