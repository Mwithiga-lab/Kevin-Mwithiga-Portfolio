g
document.addEventListener('DOMContentLoaded', function() {
    // Track resume downloads
    const resumeLink = document.querySelector('.resume-container a');
    
    if (resumeLink) {
        resumeLink.addEventListener('click', function() {
            console.log('Resume downloaded!');
            // You can add more tracking here later
        });
    }
});
