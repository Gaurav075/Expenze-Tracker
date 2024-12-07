class Navigation {
    constructor() {
      this.mobileNavBtn = document.querySelector(".mobile-navbar-btn");
      this.header = document.querySelector(".header");
      this.links = document.querySelectorAll(".navbar-list li");
  
      this.init();
    }
  
    init() {
      this.mobileNavBtn.addEventListener("click", () => this.toggleNavbar());
      this.links.forEach(link => link.addEventListener("click", () => this.removeNavbar()));
    }
  
    toggleNavbar() {
      this.header.classList.toggle("active");
    }
  
    removeNavbar() {
      this.header.classList.remove("active");
    }
  }
  
  new Navigation();
  
  function sendEmail() {
    var message = document.getElementById('message').value;
    var recipientEmail = 'priyamagggarwal@gmail.com';
    var mailtoLink = 'mailto:' + recipientEmail + '?subject=Message&body=' + encodeURIComponent(message);
    window.location.href = mailtoLink;
}


const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('Dark'); // Toggle Dark class on the body
  if (document.body.classList.contains('Dark')) {
    toggleButton.textContent = 'Light'; // Update button text
  } else {
    toggleButton.textContent = 'Dark'; // Revert button text
  }
});
