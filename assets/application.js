// Put your application javascript here
// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.createElement('button');
  mobileMenuToggle.className = 'mobile-menu-toggle';
  mobileMenuToggle.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  
  const headerContainer = document.querySelector('.header-container');
  const headerNav = document.querySelector('.header-nav');
  
  if (headerContainer && headerNav) {
    headerContainer.appendChild(mobileMenuToggle);
    
    mobileMenuToggle.addEventListener('click', function() {
      headerNav.classList.toggle('active');
    });
  }
  
  // Update cart count dynamically
  if (typeof Shopify !== 'undefined') {
    Shopify.onCartUpdate = function(cart) {
      const cartCount = document.querySelector('.cart-count');
      if (cartCount) {
        cartCount.textContent = cart.item_count;
      }
    };
  }
});
 document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('open-search-modal');
  const closeBtn = document.getElementById('close-search-modal');
  const modal = document.getElementById('search-modal');

  if (openBtn && closeBtn && modal) {
    openBtn.addEventListener('click', function (e) {
      e.preventDefault();
      modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});

// ================================ hero section ================================
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".hero-slider");
  const nextBtn = document.querySelector(".next-slide");
  const prevBtn = document.querySelector(".prev-slide");
  let index = 0;
  let autoplayInterval;

  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    slider.style.transform = "translateX(" + (-index * 100) + "%)";
  }

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      showSlide(index + 1);
    }, 3000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  nextBtn.addEventListener("click", () => {
    showSlide(index + 1);
    stopAutoplay();
    startAutoplay();
  });

  prevBtn.addEventListener("click", () => {
    showSlide(index - 1);
    stopAutoplay();
    startAutoplay();
  });

  // Hover par autoplay stop, hover hatne par resume
  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);

  showSlide(index);
  startAutoplay();
});
