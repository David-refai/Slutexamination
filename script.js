'use client';

document.addEventListener('DOMContentLoaded', function () {
  // 0. CSP-Compliant Deferred CSS Loading
  const preloadLinks = document.querySelectorAll('link[rel="preload"][as="style"]');
  preloadLinks.forEach(link => {
    link.rel = 'stylesheet';
  });

  console.log('Portfolio initialized with Modern Grid Layout');

  // 1. Hamburger Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Toggle icon between bars and times
      const icon = menuToggle.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
        icon.classList.replace('fa-bars', 'fa-times');
      } else {
        icon.classList.replace('fa-times', 'fa-bars');
      }
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.replace('fa-times', 'fa-bars');
      });
    });
  }

  // 2. Scroll Reveal Effect (Intersection Observer)
  const revealOptions = {
    threshold: 0.25, // Reveal when 25% is visible
    rootMargin: "0px 0px -100px 0px" // Offset reveal to happen slightly later
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing once visible
        // observer.unobserve(entry.target); 
      } else {
        // Re-blur when scrolling away if desired
        entry.target.classList.remove('visible');
      }
    });
  }, revealOptions);

  const revealElements = document.querySelectorAll('.reveal-image');
  revealElements.forEach(el => revealObserver.observe(el));
  // 3. Custom Slideshow Logic (Now using Splide.js)
  const splideElement = document.querySelector('#image-carousel');
  if (splideElement) {
    const splide = new Splide('#image-carousel', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      autoplay: true,
      interval: 5000,
      pauseOnHover: true,
      arrows: true,
      pagination: true,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      speed: 800,
      breakpoints: {
        768: {
          arrows: false,
        },
      }
    });
    splide.mount();
  }
});
