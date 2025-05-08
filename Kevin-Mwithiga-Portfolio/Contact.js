document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#Contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Simple form submission (will be replaced with real submission later)
            setTimeout(function() {
                alert('Message sent successfully! (This is a demo)');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }, 1500);
        });
    }
});
