// Countdown Timer - Calculate Days, Hours, Minutes, Seconds
function updateCountdown() {
    // Target date: Midnight of next Sunday (23:59:59)
    // To set a specific date, replace the next 5 lines with:
    // const targetDate = new Date('2025-12-31T23:59:59').getTime();
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const daysUntilSunday = (7 - dayOfWeek) % 7 || 7; // If today is Sunday, target next Sunday
    const nextSunday = new Date(today);
    nextSunday.setDate(today.getDate() + daysUntilSunday);
    nextSunday.setHours(23, 59, 59, 999); // Set to end of day
    
    const targetDate = nextSunday.getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Get countdown elements
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        return; // Elements not found yet
    }

    if (distance < 0) {
        // Timer expired - reset to 7 days from now
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        
        // Add expired message or reset timer
        return;
    }

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update display with zero-padding
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
    
    // Add animation class for visual effect
    secondsEl.parentElement.classList.add('ticking');
    setTimeout(() => {
        secondsEl.parentElement.classList.remove('ticking');
    }, 300);
}

// Initialize countdown timer
function initCountdown() {
    // Run immediately on load
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);
}

// Start countdown when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCountdown);
} else {
    initCountdown();
}

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Registration Modal Functions - Global functions accessible from HTML
window.openRegistrationModal = function() {
    const modal = document.getElementById('registrationModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

window.closeRegistrationModal = function() {
    const modal = document.getElementById('registrationModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('registrationModal');
    if (event.target === modal) {
        window.closeRegistrationModal();
    }
});

// Close modal with X button
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', window.closeRegistrationModal);
    }
    
    // Handle form submission - redirect to external form with data
    const form = document.getElementById('registrationForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Form will submit to the external URL
            // You can add additional validation or data handling here if needed
        });
    }
});

// Add scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .topic-card, .testimonial-card, .bonus-card, .stat-card, .mentor-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add floating animation to CTA buttons
document.querySelectorAll('.cta-button, .cta-button-large').forEach(button => {
    setInterval(() => {
        button.style.animation = 'pulse 2s ease-in-out infinite';
    }, 100);
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);


