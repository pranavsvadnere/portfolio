/**
 * Premium Portfolio - Interaction & Animation Effects
 * High-end animations for Awwwards-inspired portfolio
 */

// ==========================================
// 1. Smooth Scrolling & Navbar Effects
// ==========================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==========================================
// 2. Parallax Effect on Sections (DISABLED - causes overlap)
// ==========================================

// Parallax effect disabled to prevent section overlap
// All other scroll animations remain active

// ==========================================
// 3. Card Hover Effect (CSS-Driven, No Tilt)
// ==========================================

// Card hover effects are now handled via CSS
// for a cleaner, crisper appearance without tilt

// ==========================================
// 4. Magnetic Button Effect
// ==========================================

const buttons = document.querySelectorAll('.btn-brand, .link-custom');

buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const moveX = (x - centerX) * 0.2;
        const moveY = (y - centerY) * 0.2;
        
        button.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// ==========================================
// 5. Link Hover Effects
// ==========================================

// Link hover effects handled by CSS
// Smooth transitions and glow effects active

const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(0, 212, 255, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    display: none;
    transition: all 0.1s ease-out;
`;
document.body.appendChild(cursor);

const cursorDot = document.createElement('div');
cursorDot.className = 'custom-cursor-dot';
cursorDot.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background: rgba(0, 212, 255, 0.8);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    display: none;
`;
document.body.appendChild(cursorDot);

document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursorDot.style.display = 'block';
    
    cursor.style.left = (e.clientX - 10) + 'px';
    cursor.style.top = (e.clientY - 10) + 'px';
    
    cursorDot.style.left = (e.clientX - 4) + 'px';
    cursorDot.style.top = (e.clientY - 4) + 'px';
});

document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
    cursorDot.style.display = 'none';
});

// Cursor interactions
const interactiveElements = document.querySelectorAll('a, .btn, button, input, textarea');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.borderWidth = '3px';
        cursor.style.borderColor = 'rgba(0, 212, 255, 1)';
        cursor.style.transform = 'scale(1.5)';
        cursorDot.style.background = 'rgba(0, 212, 255, 1)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.borderWidth = '2px';
        cursor.style.borderColor = 'rgba(0, 212, 255, 0.5)';
        cursor.style.transform = 'scale(1)';
        cursorDot.style.background = 'rgba(0, 212, 255, 0.8)';
    });
});

// ==========================================
// 6. AOS (Animate On Scroll) Enhancement
// ==========================================

if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100
    });
}

// ==========================================
// 7. Image Zoom on Hover
// ==========================================

const images = document.querySelectorAll('.card-custom-image img');
images.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.15) rotate(3deg)';
    });
    
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1) rotate(0)';
    });
});

// ==========================================
// 8. Load More Button Animation
// ==========================================

const loadMoreBtn = document.querySelector('.ps-Load-More');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
        this.innerHTML = '<span style="display: inline-block; animation: spin 1s linear infinite;">⟳</span> Loading...';
        this.disabled = true;
        
        // Show all hidden portfolio items
        const hiddenItems = document.querySelectorAll('.ps-portfolio-col');
        hiddenItems.forEach(item => {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.6s ease-out forwards';
            item.style.animationDelay = Math.random() * 0.3 + 's';
        });
        
        setTimeout(() => {
            this.style.display = 'none';
        }, 600);
    });
}

// Add spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .custom-cursor {
        mix-blend-mode: screen;
    }
    
    .custom-cursor-dot {
        mix-blend-mode: screen;
    }
`;
document.head.appendChild(style);

// ==========================================
// 9. Section Fade-in on Scroll
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

// ==========================================
// 10. Stagger Animation for List Items
// ==========================================

const listItems = document.querySelectorAll('.ps-pro-li li');
listItems.forEach((item, index) => {
    item.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
});

// ==========================================
// 11. Form Input Animation
// ==========================================

const formInputs = document.querySelectorAll('#contact .form-control');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// ==========================================
// 12. Timeline Animation on Scroll
// ==========================================

const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.6s ease-out forwards';
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

const timelineStyle = document.createElement('style');
timelineStyle.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(timelineStyle);

// ==========================================
// 13. Ripple Effect on Buttons
// ==========================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: translate(${x}px, ${y}px);
            pointer-events: none;
            animation: rippleAnimation 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleAnimation {
        from {
            transform: translate(var(--x), var(--y)) scale(0);
            opacity: 1;
        }
        to {
            transform: translate(var(--x), var(--y)) scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ==========================================
// 14. Progress Circle Animation
// ==========================================

const progressCircles = document.querySelectorAll('.progress');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

progressCircles.forEach(circle => {
    progressObserver.observe(circle);
});

// ==========================================
// 15. Smooth Page Load Animation
// ==========================================

window.addEventListener('load', () => {
    document.body.style.animation = 'pageLoad 0.8s ease-out';
});

const pageLoadStyle = document.createElement('style');
pageLoadStyle.textContent = `
    @keyframes pageLoad {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(pageLoadStyle);

// ==========================================
// 16. Text Selection Animation
// ==========================================

// Note: Keeping this subtle as per original requirement
document.addEventListener('selectstart', (e) => {
    // Allow selection
}, false);

console.log('✨ Premium Portfolio Interactions Loaded');
