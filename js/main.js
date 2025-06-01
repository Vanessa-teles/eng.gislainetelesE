/* Main JavaScript for Gislaine Teles Engineering Website */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navToggle = document.createElement('div');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('#header').appendChild(navToggle);

    navToggle.addEventListener('click', function() {
        document.querySelector('#nav').classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if(this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form validation
    const contactForm = document.querySelector('form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let valid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if(!field.value.trim()) {
                    valid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if(!valid) {
                e.preventDefault();
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }

    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .gallery-item, .testimonial, .faq-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if(elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };

    // Run on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Add CSS class for animations
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .gallery-item, .testimonial, .faq-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .service-card.animate, .gallery-item.animate, .testimonial.animate, .faq-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        .nav-toggle {
            display: none;
            cursor: pointer;
            font-size: 1.5rem;
            margin-right: 1rem;
        }
        @media screen and (max-width: 736px) {
            .nav-toggle {
                display: block;
            }
            #nav {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                box-shadow: 0 5px 10px rgba(0,0,0,0.1);
                padding: 1rem;
            }
            #nav.active {
                display: block;
            }
            #nav ul {
                flex-direction: column;
                align-items: flex-start;
            }
            #nav ul li {
                margin: 0.5rem 0;
            }
        }
    `;
    document.head.appendChild(style);
});
