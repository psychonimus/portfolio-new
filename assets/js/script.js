$('.card-bg').tilt({
    maxTilt : 3,
    glare : true,
    maxGlare: .5
})



function smoothScroll(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

document.querySelector("#btt").addEventListener("click", () => {
  locoScroll.scrollTo(0);
})



// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}





smoothScroll();






Draggable.create(".dragme",{
  type: "x",
  inertia : true,
  bounds : document.querySelector(".drag-box"),
});

function onLight(){
  var div1 = document.querySelector(".dragme");
  var div2 = document.querySelector(".drag-target")

  var divLeft = div1.getBoundingClientRect();
  var divRight = div2.getBoundingClientRect();
  
  if(divRight.left > divLeft.right)
  {
    document.querySelector("#vid-2").style.opacity = 0;
  }
  else{
    document.querySelector("#vid-2").style.opacity= 1;

  }

}

window.addEventListener("touchmove", onLight);
window.addEventListener("mousemove", onLight);



function bigCursor(){
  var cursor = document.querySelector(".cur");
var main = document.querySelector(".main-hero");
var cursorX = 0;
var cursorY = 0;

function moveCursor() {
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
  requestAnimationFrame(moveCursor);
}

main.addEventListener("mousemove", function(dets) {
  cursorX = dets.x;
  cursorY = dets.y;
});

main.addEventListener("mouseenter", function() {
  cursor.style.display = "block";
  moveCursor();
});

main.addEventListener("mouseleave", function() {
  cursor.style.display = "none";
  
});

// Initial hide of the cursor
cursor.style.display = "none";
}

bigCursor();


function smallCursor(){
  var cursor = document.querySelector(".cur-2");
var main = document.querySelector(".sub-hero");
var cursorX = 100;
var cursorY = 700;

function moveCursor() {
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
  requestAnimationFrame(moveCursor);
}

main.addEventListener("mousemove", function(dets) {
  cursorX = dets.x;
  cursorY = dets.y;
});

main.addEventListener("mouseenter", function() {
  cursor.style.display = "block";
  moveCursor();
});

main.addEventListener("mouseleave", function() {
  cursor.style.display = "none";
  
});

// Initial hide of the cursor
cursor.style.display = "none";
}

smallCursor();

tippy('#html', {
  content: "HTML",
  animation : "fade",
});
tippy('#css', {
  content: "CSS",
  animation : "fade",
});
tippy('#js', {
  content: "Javascript",
  animation : "fade",
});
tippy('#bootstrap', {
  content: "Bootstrap",
  animation : "fade",
});
tippy('#jquery', {
  content: "Jquery",
  animation : "fade",
});
tippy('#react', {
  content: "React",
  animation : "fade",
});
tippy('#figma', {
  content: "Figma",
  animation : "fade",
});
tippy('#photoshop', {
  content: "Photoshop",
  animation : "fade",
});
tippy('#illustrator', {
  content: "Illustrator",
  animation : "fade",
});
tippy('#premier', {
  content: "Premier Pro",
  animation : "fade",
});
tippy('#chatgpt', {
  content: "Chat GPT",
  animation : "fade",
});
tippy('#canva', {
  content: "Canva",
  animation : "fade",
});
tippy('#maya', {
  content: "Maya",
  animation : "fade",
});



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    autoplay : true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});



gsap.from(".navbar",{
  y : 40,
  opacity : 0,
  duration : 1,
  delay : 1,
  
})

gsap.from(".nav-link",{
  y:40,
  opacity : 0,
  duration : 1,
  delay : 1,
  stagger : 0.3,
})

gsap.from(".main-heading h1", {
  opacity : 0,
  y : 50,
  delay : 1,
  duration : 1,
})

gsap.from(".hero", {
  opacity : 0,
  y : 50,
  delay : 1,
  duration : 1,
})

gsap.from("#left-side-text", {
  x : -600,
  duration : 1,
  delay : 2,
})

gsap.from("#right-side-text", {
  x : 600,
  duration : 1,
  delay : 2,
})

gsap.from("#icon", {
  scale : 0,
  duration : 3,
  delay : 2,
})

var t1 = gsap.timeline();

t1.from("#second-section-head",{
  scrollTrigger : {
    trigger : ".second-section",
    scroller : ".main",
    start : "0% 50%",
    end : "50% 50%",
    scrub : 3
  },
  opacity : 0,
  x: -400,
  duration : 2,
})

.from(".second-section .sub-desc h4",{
  scrollTrigger : {
    trigger : ".second-section",
    scroller : ".main",
    start : "0% 50%",
    end : "50% 50%",
    // markers : true,
    scrub : 3
  },
  opacity : 0,
  x: -400,
  duration : 2,
  stagger : 2,
})

.from("#bento",{
  scrollTrigger : {
    trigger : ".second-section",
    scroller : ".main",
    start : "0% 50%",
    end : "50% 50%",
    // markers : true,
    scrub : 3
  },
  opacity : 0,
  x: 400,
  duration : 2,
  stagger : 2,
})

.from("#web-projects h2",{
  scrollTrigger : {
    trigger : "#web-projects",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true,
    scrub : 3
  },
  opacity : 0,
  scale : 0,
  duration : 2,
  // stagger : 2,
})

.from("#web-projects-overlay",{
  scrollTrigger : {
    trigger : "#web-projects",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true,
    scrub : 3
  },
  opacity : 0,
  scale : 0,
  duration : 2,
  delay : 1,
  // stagger : 2,
})

.from("#web-projects-left-p",{
  scrollTrigger : {
    trigger : "#web-projects",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true,
    scrub : 3
  },
  opacity : 0,
  x : -300,
  duration : 2,
  // stagger : 2,
}, "b")

.from("#web-projects-right-p",{
  scrollTrigger : {
    trigger : "#web-projects",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true, 
    scrub : 3
  },
  opacity : 0,
  x : 300,
  duration : 2,
  // stagger : 2,
}, "b")

.from("#uiux-design h2",{
  scrollTrigger : {
    trigger : "#uiux-design",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true,
    scrub : 3
  },
  opacity : 0,
  scale : 0,
  duration : 2,
  // stagger : 2,
})
.from("#ui-designs-overlay",{
  scrollTrigger : {
    trigger : "#uiux-design",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true,
    scrub : 3
  },
  opacity : 0,
  scale : 0,
  duration : 2,
  delay : 1,
  // stagger : 2,
})

.from("#ui-design-left-p",{
  scrollTrigger : {
    trigger : "#uiux-design",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true,
    scrub : 3
  },
  opacity : 0,
  x : -300,
  duration : 2,
  // stagger : 2,
}, "c")

.from("#ui-design-right-p",{
  scrollTrigger : {
    trigger : "#uiux-design",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true, 
    scrub : 3
  },
  opacity : 0,
  x : 300,
  duration : 2,
  // stagger : 2,
}, "c")

.from(".ui-card",{
  scrollTrigger : {
    trigger : ".fourth-section",
    scroller : ".main",
    start : "0% 80%",
    end : "70% 80%",
    // markers : true,
    scrub : 1
  },
  scale : 0.5,
  duration : 1,
  
})

.from("#play-ground h2",{
  scrollTrigger : {
    trigger : "#play-ground",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true,
    scrub : 3
  },
  opacity : 0,
  scale : 0,
  duration : 2,
  // stagger : 2,
})
.from("#playground-overlay",{
  scrollTrigger : {
    trigger : "#play-ground",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true,
    scrub : 3
  },
  opacity : 0,
  scale : 0,
  duration : 2,
  delay : 1,
  // stagger : 2,
})

.from("#play-ground-left-p",{
  scrollTrigger : {
    trigger : "#play-ground",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true,
    scrub : 3
  },
  opacity : 0,
  x : -300,
  duration : 2,
  // stagger : 2,
}, "d")

.from("#play-ground-right-p",{
  scrollTrigger : {
    trigger : "#play-ground",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true, 
    scrub : 3
  },
  opacity : 0,
  x : 300,
  duration : 2,
  // stagger : 2,
}, "d")

// jkjk


.from("#about-me h2",{
  scrollTrigger : {
    trigger : "#about-me",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true,
    scrub : 3
  },
  opacity : 0,
  scale : 0,
  duration : 2,
  // stagger : 2,
})
.from("#aboutme-overlay",{
  scrollTrigger : {
    trigger : "#about-me",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true,
    scrub : 3
  },
  opacity : 0,
  scale : 0,
  duration : 2,
  delay : 1,
  // stagger : 2,
})

.from("#about-me-left-p",{
  scrollTrigger : {
    trigger : "#about-me",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true,
    scrub : 3
  },
  opacity : 0,
  x : -300,
  duration : 2,
  // stagger : 2,
}, "e")

.from("#about-me-right-p",{
  scrollTrigger : {
    trigger : "#about-me",
    scroller : ".main",
    start : "0% 80%",
    end : "50% 80%",
    // markers : true, 
    scrub : 3
  },
  opacity : 0,
  x : 300,
  duration : 2,
  // stagger : 2,
}, "e")

.from("#sixth-section .about-center-col",{
  scrollTrigger : {
    trigger : "#sixth-section",
    scroller : ".main",
    start : "0% 80%",
    end : "30% 80%",
    // markers : true, 
    scrub : 3
  },
  opacity : 0,
  x : -300,
  duration : 2,
  // stagger : 2,
})

.from("#sixth-section .about-right-col",{
  scrollTrigger : {
    trigger : "#sixth-section",
    scroller : ".main",
    start : "0% 80%",
    end : "30% 80%",
    // markers : true, 
    scrub : 3
  },
  opacity : 0,
  x : 300,
  duration : 2,
  // stagger : 2,
})

.from("#sixth-section .about-left-col",{
  scrollTrigger : {
    trigger : "#sixth-section",
    scroller : ".main",
    start : "0% 80%",
    end : "30% 80%",
    // markers : true, 
    scrub : 3
  },
  opacity : 0,
  y : 300,
  duration : 2,
  // stagger : 2,
})





