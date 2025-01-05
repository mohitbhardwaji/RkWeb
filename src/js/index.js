// Sidebar and Overlay Toggle
const menuToggle = document.getElementById('menu-toggle');
const closeSidebar = document.getElementById('close-sidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Open Sidebar
menuToggle.addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
});

// Close Sidebar
closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

// Close Sidebar when clicking on overlay
overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});


document.addEventListener("DOMContentLoaded", () => {
  const serviceMenu = document.querySelector(".sidebar-links li a[href='#service']");
  const sidebarItem = serviceMenu.closest('li'); // Get the closest <li> of the "Services" link
  const dropdown = sidebarItem.querySelector('.dropdown');

  serviceMenu.addEventListener("click", (event) => {
    event.preventDefault();
    sidebarItem.classList.toggle("open"); // Toggle the dropdown visibility
  });
});


// Animation on Scroll - Forward and Reverse
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-left, .fade-in-right');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Trigger forward animation
          entry.target.classList.remove('reverse'); // Remove reverse animation
        } else {
          entry.target.classList.add('reverse'); // Trigger reverse animation
          entry.target.classList.remove('visible'); // Remove forward animation
        }
      });
    }, {
      threshold: 0.1
    });
  
    fadeElements.forEach(element => observer.observe(element));
  });
  

  // Animation on Scroll - Popup and Reverse Animation
document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.image-text-section .image-container');
    const textContainer = document.querySelector('.image-text-section .text-container');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger entry animations
          if (entry.target === imageContainer) {
            imageContainer.classList.add('visible');
            imageContainer.classList.remove('reverse');
          }
          if (entry.target === textContainer) {
            textContainer.classList.add('visible');
            textContainer.classList.remove('reverse');
          }
        } else {
          // Trigger exit animations
          if (entry.target === imageContainer) {
            imageContainer.classList.add('reverse');
            imageContainer.classList.remove('visible');
          }
          if (entry.target === textContainer) {
            textContainer.classList.add('reverse');
            textContainer.classList.remove('visible');
          }
        }
      });
    }, {
      threshold: 0.1,
    });
  
    observer.observe(imageContainer);
    observer.observe(textContainer);
  });
 
  

  // Scroll Animation for Right Card
document.addEventListener('DOMContentLoaded', () => {
    const overlayCardRight = document.querySelector('.overlay-card-right');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    overlayCardRight.classList.add('animate-in');
                    overlayCardRight.classList.remove('animate-out');
                } else {
                    overlayCardRight.classList.add('animate-out');
                    overlayCardRight.classList.remove('animate-in');
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the card is visible
        }
    );

    observer.observe(overlayCardRight);
});




// Optional Slider Pause on Hover
const sliderTrack = document.querySelector('.slider-track');
const clientsSlider = document.querySelector('.clients-slider');

clientsSlider.addEventListener('mouseenter', () => {
    sliderTrack.style.animationPlayState = 'paused';
});

clientsSlider.addEventListener('mouseleave', () => {
    sliderTrack.style.animationPlayState = 'running';
});



// Modal Functionality
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const consultationModal = document.getElementById('consultationModal');

// Open Modal
openModalBtn.addEventListener('click', () => {
    consultationModal.style.display = 'block';
});

// Close Modal
closeModalBtn.addEventListener('click', () => {
    consultationModal.style.display = 'none';
});

// Close Modal When Clicking Outside
window.addEventListener('click', (event) => {
    if (event.target === consultationModal) {
        consultationModal.style.display = 'none';
    }
});


