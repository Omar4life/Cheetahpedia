
// Bounce effect on click - Scoop 2 Feature
document.addEventListener('DOMContentLoaded', function() {
    // Add bounce effect to cheetah images
    const bounceElements = document.querySelectorAll('.bounce-click');
    
    bounceElements.forEach(element => {
        element.addEventListener('click', function() {
            // Remove existing bounce class
            this.classList.remove('bounce');
            
            // Force reflow
            void this.offsetWidth;
            
            // Add bounce class
            this.classList.add('bounce');
            
            // Remove bounce class after animation
            setTimeout(() => {
                this.classList.remove('bounce');
            }, 600);
        });
    });
    
    // Speed bar animation - Scoop 1 Feature
    const startRaceButton = document.getElementById('startRace');
    if (startRaceButton) {
        startRaceButton.addEventListener('click', function() {
            const speedFills = document.querySelectorAll('.speed-fill');
            
            // Reset all animations
            speedFills.forEach(fill => {
                fill.classList.remove('animate');
                fill.style.width = '0%';
            });
            
            // Force reflow to ensure reset
            void document.body.offsetWidth;
            
            // Change button text immediately
            this.textContent = '🏁 Race in Progress...';
            this.disabled = true;
            
            // Start animations with delays
            setTimeout(() => {
                speedFills.forEach((fill, index) => {
                    setTimeout(() => {
                        fill.classList.add('animate');
                        // Also trigger width change directly for fallback
                        const speed = parseInt(fill.getAttribute('data-speed')) || 0;
                        const maxSpeed = 390; // falcon speed as reference
                        const percentage = (speed / maxSpeed) * 100;
                        fill.style.width = percentage + '%';
                    }, index * 500);
                });
            }, 100);
            
            // Re-enable button after animation
            setTimeout(() => {
                this.textContent = '🏁 Start Race!';
                this.disabled = false;
            }, 5000);
        });
    }
    
    // console messages
    console.log('🐆 Welcome to Cheetapedia! Built by a high school student with lots of cheetah love!');
    console.log('🏃‍♂️ Did you know cheetahs can\'t maintain their top speed for more than 30 seconds?');
    console.log('🐾 Try clicking on the cheetah images for a surprise!');
});
