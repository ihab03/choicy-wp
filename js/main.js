

//navbar stick
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) { 
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});




//bact to top 
const backToTopButton = document.getElementById("backToTop");


window.addEventListener("scroll", function () {
    if (window.scrollY > 400) { 
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});


backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});






//swiper 1
var swiper = new Swiper('.swiper-1', {
    direction: 'vertical',
    effect: 'flip', 
    
    loop: true,

    autoplay: {
      delay: 7000,
      disableOnInteraction: true,
    },

    pagination: {
      el: '.swiper-pagination-1',
      clickable: true,
    },

    allowTouchMove: false, 
    mousewheel: false,
  });




  //moving dev
const movingDivs = document.querySelectorAll('.moving-div');
document.addEventListener('mousemove', (event) => {
    movingDivs.forEach((div) => {
        let rect = div.getBoundingClientRect();
        let lastX = rect.left;
        let lastY = rect.top;

        let moveX = (event.clientX - lastX) * 0.02; 
        let moveY = (event.clientY - lastY) * 0.01;

        div.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});



//swiper 2
var swiper12 = new Swiper(".swiper-2", { 
    effect: "coverflow", 
    grabCursor: false, 
    centeredSlides: true, 
    slidesPerView: "auto", 
    loop: true,  
    autoplay: {  
        delay: 3000, 
        disableOnInteraction: false,  
    },
    coverflowEffect: { 
        rotate: 0, 
        stretch: 0, 
        depth: 100, 
        modifier: 1, 
        slideShadows: true, 
    }, 
    pagination: { 
        el: ".swiper-pagination-2", 
        clickable: true,
    }, 
    navigation: { 
        nextEl: ".swiper-button-next-2", 
        prevEl: ".swiper-button-prev-2",
      },
      
});




//swiper 3
  var swiper = new Swiper(".mySwiper", {
      loop: true,  
      
      autoplay: {
          delay: 3000,  
          disableOnInteraction: false,
      },
      speed: 2000,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
     
      mousewheel: false,
  });


//stop-paly-video
  document.addEventListener("DOMContentLoaded", function () {
    let videoLinks = document.querySelectorAll(".video-link");

    videoLinks.forEach(link => {
      link.addEventListener("click", function () {
        let targetModalId = link.getAttribute("data-bs-target");
        let videoUrl = link.getAttribute("data-video");
        let modal = document.querySelector(targetModalId);
        let iframe = modal.querySelector("iframe");

        // Set video URL when opening modal
        iframe.src = videoUrl;
      });
    });

    // Stop video when modal is closed
    let modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
      modal.addEventListener("hidden.bs.modal", function () {
        let iframe = modal.querySelector("iframe");
        iframe.src = ""; // Reset src to stop video
      });
    });
  });




//under development alert 
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a.under-dev").forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Stop navigation

        // Remove existing alert
        document.querySelectorAll(".custom-alert, .custom-alert-overlay").forEach(el => el.remove());

        // Create overlay
        const overlay = document.createElement("div");
        overlay.className = "custom-alert-overlay";
        overlay.addEventListener("click", () => overlay.remove());

        // Create alert box
        const alertBox = document.createElement("div");
        alertBox.className = "custom-alert";
        alertBox.innerHTML = `
          <p>This feature is under development. Please check back later!</p>
          <img src="./img/Public/3263182.png" alt="under-dev">
          <button onclick="this.parentElement.remove(); document.querySelector('.custom-alert-overlay').remove();">OK</button>
        `;

        // Add elements to body
        document.body.appendChild(overlay);
        document.body.appendChild(alertBox);
      });
    });
  });









