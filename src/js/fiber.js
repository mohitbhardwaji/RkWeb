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
  

// Create an observer for the columns
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add class to trigger animation when column is in the viewport
            entry.target.classList.add('in-view');
        } else {
            // Remove class when the column goes out of view to reset the animation
            entry.target.classList.remove('in-view');
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the column is visible

// Target the columns for observation
document.querySelectorAll('.points-column').forEach(column => {
    observer.observe(column);
});




// Function to trigger animations when section is in view
const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation classes when the section is in view
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing after it's in view
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is in view

// Target sections for animations
const leftColumn = document.querySelector('.left-column');
const rightColumn = document.querySelector('.right-column');

intersectionObserver.observe(leftColumn);
intersectionObserver.observe(rightColumn);


// Function to handle counting animation
const counters = document.querySelectorAll('.count');
const speed = 200; // Speed of counting (milliseconds)

const animateCount = (element) => {
    const target = +element.getAttribute('data-target');
    let count = 0;
    const increment = target / speed; // Calculate the increment value based on speed
    
    const updateCount = () => {
        if (count < target) {
            count += increment;
            element.textContent = Math.ceil(count) ; // Update the count
            requestAnimationFrame(updateCount); // Repeat the animation frame
        } else {
            element.textContent = target ; // Set to the final target value
        }
    };

    updateCount();
};

// Function to check if the element is in view
const isInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

// Function to handle the scroll event and trigger animation when in view
const handleScroll = () => {
    counters.forEach(counter => {
        if (isInView(counter) && !counter.classList.contains('counted')) {
            animateCount(counter);
            counter.classList.add('counted'); // Ensure the count runs only once
        }
    });
};

// Listen for scroll events to trigger animation when elements are in view
window.addEventListener('scroll', handleScroll);
handleScroll(); // Initial check in case the section is already in view





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


