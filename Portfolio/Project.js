document.addEventListener('DOMContentLoaded', function() {
    // Make project cards interactive
    const projectCards = document.querySelectorAll('.project-one, .project-two, .project-three');
    
    projectCards.forEach(card => {
        // Change cursor to pointer
        card.style.cursor = 'pointer';
        
        // Add click event to open project link
        card.addEventListener('click', function() {
            const link = this.querySelector('.project-link a');
            if (link) {
                window.open(link.href, '_blank');
            }
        });
    });
});

