// Premium Logo Interactive Effects and Animations - Enhanced Version with Perfect Color Scheme

class PremiumLogoEffects {
    constructor() {
        this.logoContainer = null;
        this.logoText = null;
        this.isInitialized = false;
        this.particleSystem = null;
        this.animationFrame = null;
        this.lastTime = 0;
        this.isHovered = false;
        
        this.init();
    }
    
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupElements();
            if (this.isInitialized) {
                this.setupEventListeners();
                this.initParticleSystem();
                this.startAnimationLoop();
            }
        });
    }
    
    setupElements() {
        this.logoContainer = document.querySelector('.logo-container');
        this.logoText = document.querySelector('.logo-text');
        
        if (this.logoContainer && this.logoText) {
            this.isInitialized = true;
            this.setupAccessibility();
        }
    }
    
    setupEventListeners() {
        // Premium Click Effects
        this.logoContainer.addEventListener('click', this.handleClick.bind(this));
        
        // Enhanced Hover Effects
        this.logoContainer.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
        this.logoContainer.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
        
        // Scroll Effects with Throttling
        this.setupScrollEffects();
        
        // Touch Events for Mobile
        this.setupTouchEvents();
        
        // Keyboard Navigation
        this.setupKeyboardEvents();
        
        // Intersection Observer for Performance
        this.setupIntersectionObserver();
    }
    
    handleMouseEnter() {
        this.isHovered = true;
        this.logoContainer.classList.add('logo-hovered');
        
        // Enhanced hover animation
        if (this.logoText) {
            this.logoText.style.transform = 'scale(1.02)';
        }
        
        // Start enhanced particle system
        this.startEnhancedParticleSystem();
    }
    
    handleMouseLeave() {
        this.isHovered = false;
        this.logoContainer.classList.remove('logo-hovered');
        
        // Reset hover animation
        if (this.logoText) {
            this.logoText.style.transform = 'scale(1)';
        }
        
        // Stop enhanced particle system
        this.stopEnhancedParticleSystem();
    }
    
    handleClick() {
        // Enhanced click animation
        this.logoContainer.classList.add('logo-loading');
        
        // Create enhanced ripple effect
        this.createEnhancedRippleEffect();
        
        // Add sound effect (optional)
        this.playClickSound();
        
        // Enhanced click feedback
        this.logoContainer.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.logoContainer.style.transform = 'scale(1)';
        }, 150);
        
        setTimeout(() => {
            this.logoContainer.classList.remove('logo-loading');
        }, 3000);
    }
    
    createEnhancedRippleEffect() {
        const ripple = document.createElement('div');
        ripple.className = 'logo-ripple enhanced';
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: radial-gradient(circle, 
                rgba(220, 20, 60, 0.8) 0%, 
                rgba(255, 107, 107, 0.6) 30%, 
                rgba(255, 215, 0, 0.4) 60%, 
                transparent 100%
            );
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 1000;
            animation: enhanced-ripple 1.5s ease-out forwards;
        `;
        
        this.logoContainer.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 1500);
    }
    
    setupScrollEffects() {
        let ticking = false;
        
        const updateScrollEffects = () => {
            if (!this.logoContainer) return;
            
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.0002;
            
            if (scrolled > 100) {
                const scale = Math.max(0.85, 1 + rate);
                const opacity = Math.max(0.8, 1 + rate * 2);
                
                this.logoContainer.style.transform = `scale(${scale})`;
                this.logoContainer.style.opacity = opacity;
            } else {
                this.logoContainer.style.transform = 'scale(1)';
                this.logoContainer.style.opacity = '1';
            }
            
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }
    
    setupTouchEvents() {
        let touchStartX = 0;
        let touchStartY = 0;
        let touchStartTime = 0;
        
        this.logoContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchStartTime = Date.now();
            
            // Add touch feedback
            this.logoContainer.style.transform = 'scale(0.98)';
        });
        
        this.logoContainer.addEventListener('touchmove', (e) => {
            e.preventDefault();
            
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            
            const deltaX = touchX - touchStartX;
            const deltaY = touchY - touchStartY;
            
            // Enhanced touch movement effect
            if (this.logoText) {
                const moveX = deltaX / 8;
                const moveY = deltaY / 8;
                const rotation = deltaX / 20;
                
                this.logoText.style.transform = `
                    translate(${moveX}px, ${moveY}px) 
                    rotateZ(${rotation}deg)
                `;
            }
        });
        
        this.logoContainer.addEventListener('touchend', (e) => {
            const touchEndTime = Date.now();
            const touchDuration = touchEndTime - touchStartTime;
            
            // Reset touch effects
            if (this.logoText) {
                this.logoText.style.transform = 'translate(0px, 0px) rotateZ(0deg)';
            }
            
            this.logoContainer.style.transform = 'scale(1)';
            
            // Handle quick tap as click
            if (touchDuration < 300) {
                this.handleClick();
            }
        });
    }
    
    setupKeyboardEvents() {
        this.logoContainer.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.handleClick();
            }
        });
        
        this.logoContainer.addEventListener('keyup', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                this.logoContainer.style.transform = 'scale(1)';
            }
        });
    }
    
    setupIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.startParticleSystem();
                        this.logoContainer.classList.add('logo-visible');
                    } else {
                        this.stopParticleSystem();
                        this.logoContainer.classList.remove('logo-visible');
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(this.logoContainer);
        }
    }
    
    initParticleSystem() {
        this.particleSystem = {
            particles: [],
            maxParticles: 20,
            isActive: false,
            enhancedParticles: []
        };
    }
    
    startParticleSystem() {
        if (this.particleSystem.isActive) return;
        
        this.particleSystem.isActive = true;
        this.createParticle();
    }
    
    stopParticleSystem() {
        this.particleSystem.isActive = false;
        this.particleSystem.particles.forEach(particle => particle.remove());
        this.particleSystem.particles = [];
    }
    
    startEnhancedParticleSystem() {
        if (this.particleSystem.enhancedParticles.length > 0) return;
        
        // Create enhanced particles on hover
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                this.createEnhancedParticle();
            }, i * 100);
        }
    }
    
    stopEnhancedParticleSystem() {
        this.particleSystem.enhancedParticles.forEach(particle => particle.remove());
        this.particleSystem.enhancedParticles = [];
    }
    
    createParticle() {
        if (!this.particleSystem.isActive || this.particleSystem.particles.length >= this.particleSystem.maxParticles) {
            return;
        }
        
        const particle = document.createElement('div');
        particle.className = 'logo-particle premium';
        
        // Enhanced particle styling with perfect colors
        const colors = ['#dc143c', '#ff6b6b', '#ffd700'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 8 + 4}px;
            height: ${Math.random() * 8 + 4}px;
            background: radial-gradient(circle, ${randomColor} 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            box-shadow: 0 0 15px ${randomColor}, 0 0 25px ${randomColor}, 0 0 35px ${randomColor};
        `;
        
        // Position around logo
        const rect = this.logoContainer.getBoundingClientRect();
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        document.body.appendChild(particle);
        this.particleSystem.particles.push(particle);
        
        // Enhanced particle animation
        const animation = particle.animate([
            { 
                transform: 'translate(0, 0) scale(0) rotate(0deg)',
                opacity: 0 
            },
            { 
                transform: 'translate(0, 0) scale(1.2) rotate(180deg)',
                opacity: 1 
            },
            { 
                transform: `translate(${Math.random() * 150 - 75}px, ${Math.random() * 150 - 75}px) scale(0) rotate(360deg)`,
                opacity: 0 
            }
        ], {
            duration: 4000 + Math.random() * 2000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animation.onfinish = () => {
            const index = this.particleSystem.particles.indexOf(particle);
            if (index > -1) {
                this.particleSystem.particles.splice(index, 1);
            }
            particle.remove();
        };
        
        // Schedule next particle
        if (this.particleSystem.isActive) {
            setTimeout(() => this.createParticle(), 2500 + Math.random() * 2000);
        }
    }
    
    createEnhancedParticle() {
        const particle = document.createElement('div');
        particle.className = 'logo-enhanced-particle';
        
        // Enhanced particle with perfect colors
        const colors = ['#dc143c', '#ff6b6b', '#ffd700'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 12 + 6}px;
            height: ${Math.random() * 12 + 6}px;
            background: radial-gradient(circle, ${randomColor} 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1001;
            box-shadow: 0 0 20px ${randomColor}, 0 0 35px ${randomColor}, 0 0 50px ${randomColor};
        `;
        
        // Position around logo
        const rect = this.logoContainer.getBoundingClientRect();
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        document.body.appendChild(particle);
        this.particleSystem.enhancedParticles.push(particle);
        
        // Enhanced hover particle animation
        const animation = particle.animate([
            { 
                transform: 'translate(0, 0) scale(0) rotate(0deg)',
                opacity: 0 
            },
            { 
                transform: 'translate(0, 0) scale(1.5) rotate(180deg)',
                opacity: 1 
            },
            { 
                transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0) rotate(360deg)`,
                opacity: 0 
            }
        ], {
            duration: 2000 + Math.random() * 1000,
            easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        });
        
        animation.onfinish = () => {
            const index = this.particleSystem.enhancedParticles.indexOf(particle);
            if (index > -1) {
                this.particleSystem.enhancedParticles.splice(index, 1);
            }
            particle.remove();
        };
    }
    
    startAnimationLoop() {
        const animate = (currentTime) => {
            if (this.lastTime === 0) this.lastTime = currentTime;
            const deltaTime = currentTime - this.lastTime;
            
            // Update particle positions for smooth movement
            this.updateParticles(deltaTime);
            
            this.lastTime = currentTime;
            this.animationFrame = requestAnimationFrame(animate);
        };
        
        this.animationFrame = requestAnimationFrame(animate);
    }
    
    updateParticles(deltaTime) {
        this.particleSystem.particles.forEach(particle => {
            // Add subtle floating movement
            const time = Date.now() * 0.001;
            const x = Math.sin(time + Math.random()) * 3;
            const y = Math.cos(time + Math.random()) * 3;
            
            particle.style.transform += ` translate(${x}px, ${y}px)`;
        });
        
        this.particleSystem.enhancedParticles.forEach(particle => {
            // Enhanced hover particle movement
            const time = Date.now() * 0.002;
            const x = Math.sin(time + Math.random()) * 5;
            const y = Math.cos(time + Math.random()) * 5;
            
            particle.style.transform += ` translate(${x}px, ${y}px)`;
        });
    }
    
    playClickSound() {
        // Create a subtle click sound using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Enhanced sound with perfect color theme
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.15);
            
            gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.15);
        } catch (e) {
            // Fallback for browsers that don't support Web Audio API
            console.log('Audio not supported');
        }
    }
    
    setupAccessibility() {
        this.logoContainer.setAttribute('tabindex', '0');
        this.logoContainer.setAttribute('role', 'button');
        this.logoContainer.setAttribute('aria-label', 'Sachin Goyal Portfolio Logo - Click to go home');
        this.logoContainer.setAttribute('aria-describedby', 'logo-description');
        
        // Add description for screen readers
        const description = document.createElement('div');
        description.id = 'logo-description';
        description.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
        description.textContent = 'Interactive animated logo with text effects and particle animations. Click to navigate to home page.';
        document.body.appendChild(description);
    }
    
    destroy() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        
        this.stopParticleSystem();
        this.stopEnhancedParticleSystem();
        
        if (this.logoContainer) {
            this.logoContainer.removeEventListener('click', this.handleClick);
            this.logoContainer.removeEventListener('mouseenter', this.handleMouseEnter);
            this.logoContainer.removeEventListener('mouseleave', this.handleMouseLeave);
        }
    }
}

// Initialize the premium logo effects
const premiumLogoEffects = new PremiumLogoEffects();

// Add enhanced CSS for new effects
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
    .logo-ripple.enhanced {
        animation: enhanced-ripple 1.5s ease-out forwards;
    }
    
    @keyframes enhanced-ripple {
        0% {
            width: 0;
            height: 0;
            opacity: 1;
        }
        50% {
            width: 250px;
            height: 250px;
            opacity: 0.8;
        }
        100% {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
    
    .logo-particle.premium {
        will-change: transform, opacity;
        backface-visibility: hidden;
    }
    
    .logo-enhanced-particle {
        will-change: transform, opacity;
        backface-visibility: hidden;
        filter: brightness(1.2) contrast(1.1);
    }
    
    .logo-container {
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .logo-container:focus {
        outline: 3px solid rgba(220, 20, 60, 0.8);
        outline-offset: 6px;
        transform: scale(1.02);
    }
    
    .logo-container:focus:not(:focus-visible) {
        outline: none;
        transform: scale(1);
    }
    
    .logo-container.logo-hovered {
        transform: scale(1.03);
    }
    
    .logo-container.logo-visible {
        animation: logo-appear 0.8s ease-out forwards;
    }
    
    /* Enhanced loading animation */
    .logo-loading {
        animation: premium-loading 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
    }
    
    @keyframes premium-loading {
        0% {
            transform: scale(1) rotate(0deg);
        }
        25% {
            transform: scale(1.1) rotate(90deg);
        }
        50% {
            transform: scale(1.2) rotate(180deg);
        }
        75% {
            transform: scale(1.1) rotate(270deg);
        }
        100% {
            transform: scale(1) rotate(360deg);
        }
    }
    
    @keyframes logo-appear {
        0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
        }
        100% {
            opacity: 1;
            transform: scale(1) translateY(0px);
        }
    }
    
    /* Smooth transitions for all logo elements */
    .logo-container *,
    .logo-container::before,
    .logo-container::after {
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    /* High performance optimizations */
    .logo-container,
    .logo-text {
        will-change: transform, opacity, filter;
        backface-visibility: hidden;
        transform: translateZ(0);
    }
    
    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        .logo-container *,
        .logo-container::before,
        .logo-container::after {
            animation: none !important;
            transition: none !important;
        }
        
        .logo-particle,
        .logo-enhanced-particle {
            display: none !important;
        }
    }
    
    /* High contrast mode support */
    @media (prefers-contrast: high) {
        .logo-container:focus {
            outline: 4px solid #000000;
            outline-offset: 8px;
        }
    }
`;

document.head.appendChild(enhancedStyles);

// Export for potential external use
window.PremiumLogoEffects = PremiumLogoEffects;
