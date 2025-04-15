// DOM Elements
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const contactForm = document.querySelector('.contact form');
const learnMoreBtn = document.querySelector('.hero button');
const features = document.querySelectorAll('.feature');
const serviceItems = document.querySelectorAll('.service-item');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav');

// On load animations
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Close mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Form submission handler
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Simple validation
            if (nameInput.value && emailInput.value && messageInput.value) {
                // In a real application, you would send this data to a server
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    
    // Learn More button action
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            
            window.scrollTo({
                top: aboutSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }

    // Animate features on hover
    if (features.length > 0) {
        features.forEach(feature => {
            feature.addEventListener('mouseenter', function() {
                this.classList.add('hovered');
                const icon = this.querySelector('.feature-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                    setTimeout(() => {
                        icon.style.transform = 'scale(1) rotate(0deg)';
                    }, 300);
                }
            });
            
            feature.addEventListener('mouseleave', function() {
                this.classList.remove('hovered');
            });
        });
    }

    // Initialize ScrollReveal for animations on scroll
    initScrollReveal();
    
    // Initial call to highlight active nav
    highlightActiveNavLink();
});

// Scroll events
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Header shadow on scroll
    if (scrollPosition > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Highlight active nav link based on scroll position
    highlightActiveNavLink();
});

// Window resize handler
window.addEventListener('resize', function() {
    // Reset mobile menu if window is resized larger than mobile breakpoint
    if (window.innerWidth > 768 && nav.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        nav.classList.remove('active');
    }
});

// Function to highlight the active nav link
function highlightActiveNavLink() {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Function to initialize ScrollReveal for animations on scroll
function initScrollReveal() {
    // Check if ScrollReveal is available (for future implementation)
    // For now we'll use a simple implementation with Intersection Observer
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe features
    features.forEach(feature => {
        feature.classList.add('reveal-item');
        observer.observe(feature);
    });
    
    // Observe service items
    serviceItems.forEach(item => {
        item.classList.add('reveal-item');
        observer.observe(item);
    });
    
    // Observe other elements that should animate on scroll
    document.querySelectorAll('.showcase-text, .showcase-image, .testimonial').forEach(item => {
        item.classList.add('reveal-item');
        observer.observe(item);
    });
}

// Add CSS for reveal animations
const style = document.createElement('style');
style.textContent = `
    .reveal-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    header.scrolled {
        box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    }
    
    nav a.active {
        color: var(--primary-color);
    }
    
    nav a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style); 