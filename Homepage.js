// Wait until page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation buttons
    const navButtons = document.querySelectorAll('#buttons button');
    
    // Add click event to each button
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Scroll to section based on button class
            if (this.classList.contains('btn.home')) {
                document.getElementById('Homepage').scrollIntoView({ behavior: 'smooth' });
            } 
            else if (this.classList.contains('btn.projects')) {
                document.getElementById('Project').scrollIntoView({ behavior: 'smooth' });
            }
            else if (this.classList.contains('btn.skills&resume')) {
                document.getElementById('skills&resume').scrollIntoView({ behavior: 'smooth' });
            }
            else if (this.classList.contains('btn.contact')) {
                document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
