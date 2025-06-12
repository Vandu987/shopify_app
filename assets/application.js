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
document.querySelector('.close_search').addEventListener('click', function() {
  document.querySelector('.search_form').style.display = 'none';
});