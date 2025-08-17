// Mobile Dippin' Donuts JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to content
    document.body.classList.add('fade-in');
    
    // Initialize mobile interactions
    initializeMobileInteractions();
    
    // Initialize form handling
    initializeFormHandling();
    
    // Initialize cart functionality
    initializeCart();
});

function initializeMobileInteractions() {
    // Add touch feedback to buttons
    const buttons = document.querySelectorAll('.mobile-button, .nav-button');
    
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = '';
        });
        
        // Add click animation
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255,255,255,0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = (e.clientX - this.offsetLeft) + 'px';
            ripple.style.top = (e.clientY - this.offsetTop) + 'px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

function initializeFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = form.querySelector('.mobile-button') || 
                               document.querySelector('a[href="/info"]');
            
            if (submitButton) {
                // Show loading state
                const originalText = submitButton.textContent;
                submitButton.innerHTML = '<span class="loading"></span> Submitting...';
                submitButton.style.pointerEvents = 'none';
                
                // Simulate form submission
                setTimeout(() => {
                    submitButton.textContent = '✓ Submitted!';
                    submitButton.classList.add('success');
                    
                    setTimeout(() => {
                        window.location.href = '/info';
                    }, 1000);
                }, 1500);
            }
        });
    });
    
    // Add input validation feedback
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = '#ef4444';
                this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
            } else {
                this.style.borderColor = '#10b981';
                this.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = '#ec4899';
            this.style.boxShadow = '0 0 0 3px rgba(236, 72, 153, 0.1)';
        });
    });
}

function initializeCart() {
    let cart = JSON.parse(localStorage.getItem('dippinDonutsCart')) || [];
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('a[href="/offers"]');
    addToCartButtons.forEach(button => {
        if (button.textContent.includes('Add to Cart')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Add item to cart
                const item = {
                    name: 'Classic Glazed Donut',
                    price: 2.50,
                    quantity: 1
                };
                
                cart.push(item);
                localStorage.setItem('dippinDonutsCart', JSON.stringify(cart));
                
                // Visual feedback
                this.textContent = '✓ Added to Cart!';
                this.classList.add('success');
                
                setTimeout(() => {
                    window.location.href = '/offers';
                }, 1000);
            });
        }
    });
    
    // Update cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('dippinDonutsCart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Add cart badge if items exist
    if (cartCount > 0) {
        const badge = document.createElement('div');
        badge.style.position = 'fixed';
        badge.style.top = '10px';
        badge.style.right = '10px';
        badge.style.background = '#ef4444';
        badge.style.color = 'white';
        badge.style.borderRadius = '50%';
        badge.style.width = '25px';
        badge.style.height = '25px';
        badge.style.display = 'flex';
        badge.style.alignItems = 'center';
        badge.style.justifyContent = 'center';
        badge.style.fontSize = '12px';
        badge.style.fontWeight = 'bold';
        badge.style.zIndex = '1000';
        badge.textContent = cartCount;
        
        document.body.appendChild(badge);
    }
}

// Page transition effects
function navigateWithTransition(url) {
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .fade-in {
        animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Prevent zoom on double tap
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Add haptic feedback for supported devices
function hapticFeedback() {
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// Add haptic feedback to button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('mobile-button') || 
        e.target.classList.contains('nav-button')) {
        hapticFeedback();
    }
});

