const container = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
// const desc_text = document.getElementsByID('desc_text');
// const desc = document.getElementById('desc_text')

const n = slides.length;
const angle = 360 / n;

let setId = 0;
let deg = [];
let x = 0;
let y = 0;

const touchDevice = () => ('ontouchstart' in document.documentElement);
const setTransition = (time) => {
  let i = 0;
  for (; i < n; i++) slides[i].style.transition = `all ${time}s`;
}
const positionSlides = () => {
  const r = container.offsetWidth / 2;
  let i = 0;
  
  setTransition('0');
  
  for (; i < n; i++) {
    deg[i] = i * angle;
    x = Math.cos(deg[i] * (Math.PI / 180)) * r + r;
    y = Math.sin(deg[i] * (Math.PI / 180)) * r + r;
    
    slides[i].style.top = `${~~y}px`;
    slides[i].style.left = `${~~x}px`;
  }
  
  setTimeout(() => {
    setTransition('.3');
  }, 10);
}
const prevSlide = () => {
  let i = 0;
  for (; i < n; i++) deg[i] -= angle;
  animateSlide();
}
const nextSlide = () => {
  let i = 0;
  for (; i < n; i++) deg[i] += angle;
  animateSlide();
}
const animateSlide = () => {
  const r = container.offsetWidth / 2;
  let i = 0;
  
  for (; i < n; i++) {
    x = Math.cos(deg[i] * (Math.PI / 180)) * r + r;
    y = Math.sin(deg[i] * (Math.PI / 180)) * r + r;
    
    slides[i].style.top = `${~~y}px`;
    slides[i].style.left = `${~~x}px`;
    
    y === 0 ? slides[i].classList.add('active') : slides[i].classList.remove('active');
  }
  
  const activeSlide = document.querySelector('.slide.active');
  const slideBgImg = getComputedStyle(activeSlide).backgroundImage;
  
  container.style.backgroundImage = slideBgImg;
}
const autoPlay = () => setId = setInterval(nextSlide, 3000);
const changeSlideImg = (e) => {
  let i = 0;
  for (; i < n; i++) slides[i].classList.remove('active');
  e.currentTarget.classList.add('active');

  const activeSlide = document.querySelector('.slide.active');
  const slideBgImg = getComputedStyle(activeSlide).backgroundImage;

  container.style.backgroundImage = slideBgImg;
}

positionSlides();
nextSlide();
// autoPlay();

btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide);
btns.forEach(btn => {
  btn.addEventListener('mouseenter', () => clearInterval(setId));
  btn.addEventListener('mouseleave', () => {
    clearInterval(setId);
    // autoPlay();
  });
})
slides.forEach(slide => {
  if (touchDevice()) {
    slide.addEventListener('click', (e) => {
      changeSlideImg(e);
      clearInterval(setId);
      // autoPlay();
    });
  }
  else {
    slide.addEventListener('click', (e) => {
      changeSlideImg(e);
      clearInterval(setId);

    });
  
    // slide.addEventListener('mouseleave', () => {
    //   clearInterval(setId);
    //   autoPlay();
    // });

  }
})
window.addEventListener('resize', () => {
  clearInterval(setId);
  positionSlides();
  // autoPlay();
})


const desc = document.getElementById('desc_text')

function changetext(id){
    switch(id){
      case 'slide_1':
        desc.innerHTML = "<h1>FOOTBALL</h1>"+"        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, at animi. A corrupti in cum distinctio voluptatum. Excepturi vero ullam eius sequi, recusandae veniam exercitationem iure, accusantium magnam, explicabo esse.</h3>        ";
        break;
    case 'slide_2':
        desc.innerHTML = "<h1>BADMINTON</h1>"+"        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, at animi. A corrupti in cum distinctio voluptatum. Excepturi vero ullam eius sequi, recusandae veniam exercitationem iure, accusantium magnam, explicabo esse.</h3>        ";
        break;
    case 'slide_3':
        desc.innerHTML = "<h1>CARROM</h1>"+"        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, at animi. A corrupti in cum distinctio voluptatum. Excepturi vero ullam eius sequi, recusandae veniam exercitationem iure, accusantium magnam, explicabo esse.</h3>        ";
        break;
    case 'slide_4':
        desc.innerHTML = "<h1>CHESS</h1>"+"        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, at animi. A corrupti in cum distinctio voluptatum. Excepturi vero ullam eius sequi, recusandae veniam exercitationem iure, accusantium magnam, explicabo esse.</h3>        ";
        break;
    case 'slide_5':
        desc.innerHTML = "<h1>VOLLEYBALL</h1>"+"        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, at animi. A corrupti in cum distinctio voluptatum. Excepturi vero ullam eius sequi, recusandae veniam exercitationem iure, accusantium magnam, explicabo esse.</h3>        ";
        break;
    case 'slide_6':
        desc.innerHTML = "<h1>TABLETENNIS</h1>"+"        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, at animi. A corrupti in cum distinctio voluptatum. Excepturi vero ullam eius sequi, recusandae veniam exercitationem iure, accusantium magnam, explicabo esse.</h3>        ";
        break;
    case 'slide_7':
        desc.innerHTML = "<h1>KABBADI</h1>"+"        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, at animi. A corrupti in cum distinctio voluptatum. Excepturi vero ullam eius sequi, recusandae veniam exercitationem iure, accusantium magnam, explicabo esse.</h3>        ";
        break;
    case 'slide_8':
        desc.innerHTML = "<h1>KHOKHO</h1>"+"        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, at animi. A corrupti in cum distinctio voluptatum. Excepturi vero ullam eius sequi, recusandae veniam exercitationem iure, accusantium magnam, explicabo esse.</h3>        ";
        break;
    case 'slide_9':
        desc.innerHTML = "<h1>CYCLOTHON</h1>"+"        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, at animi. A corrupti in cum distinctio voluptatum. Excepturi vero ullam eius sequi, recusandae veniam exercitationem iure, accusantium magnam, explicabo esse.</h3>        ";
        break;
    case 'slide_10':
        desc.innerHTML = "<h1>MARATHON</h1>"+"        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, at animi. A corrupti in cum distinctio voluptatum. Excepturi vero ullam eius sequi, recusandae veniam exercitationem iure, accusantium magnam, explicabo esse.</h3>        ";
        break;
    case 'slide_11':
        desc.innerHTML = "<h1>WORKOUTWONDERS</H1>"+"        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, at animi. A corrupti in cum distinctio voluptatum. Excepturi vero ullam eius sequi, recusandae veniam exercitationem iure, accusantium magnam, explicabo esse.</h3>        ";
        break;
    case 'slide_12':
        desc.innerHTML = "<h1>YOGA</h1>"+"        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, at animi. A corrupti in cum distinctio voluptatum. Excepturi vero ullam eius sequi, recusandae veniam exercitationem iure, accusantium magnam, explicabo esse.</h3>        ";
        break;
    default:
        break;
  
    }
  }
