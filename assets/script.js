const shopifyBaseUrl = 'https://starblinkstore.myshopify.com';

const pageLinks = document.querySelectorAll('.shopify-link');
pageLinks.forEach((link) => {
  link.href = shopifyBaseUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

const toggleButton = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.main-nav');

if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
