document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li');
  
  burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      burger.classList.toggle('active');
  });
  
  navItems.forEach(item => {
      item.addEventListener('click', () => {
          navLinks.classList.remove('active');
          burger.classList.remove('active');
      });
  });
  
  // Scroll Reveal Animations
  const animateElements = document.querySelectorAll('.animate-text, .animate-btn');
  
  const animateOnScroll = () => {
      animateElements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
          
          if (elementPosition < screenPosition) {
              element.style.animation = element.getAttribute('data-animation');
              element.style.opacity = '1';
          }
      });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load
  
  // Skill Bar Animation
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const animateSkillBars = () => {
      skillBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          bar.style.width = '0';
          setTimeout(() => {
              bar.style.width = width + '%';
          }, 500);
      });
  };
  
  // Only animate when skills section is in view
  const skillsSection = document.querySelector('.skills');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateSkillBars();
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });
  
  observer.observe(skillsSection);
  
  // Profile Image Animation
  const profileImg = document.querySelector('.profile-img');
  const circleAnimation = document.querySelector('.circle-animation');
  
  setTimeout(() => {
      profileImg.style.opacity = '1';
      profileImg.style.transform = 'scale(1)';
      circleAnimation.style.opacity = '0.1';
  }, 500);
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Header Scroll Effect
  window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
          header.style.background = 'rgba(255, 255, 255, 0.98)';
          header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      } else {
          header.style.background = 'rgba(255, 255, 255, 0.9)';
          header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      }
  });
});