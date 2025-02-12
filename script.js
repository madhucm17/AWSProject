

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        
        if (name && email && message) {
            alert(`Thank you, ${name} Your message has been received.`);
            form.reset(); 
        } else {
            alert('Please fill in all fields before submitting.');
        }
    });
    const galleryImages = document.querySelectorAll('.gallery-container img');

    galleryImages.forEach((img) => {   
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s';
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
});
