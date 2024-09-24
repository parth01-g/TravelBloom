function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => {
        if (p.id === page) {
            p.style.display = 'block';
        } else {
            p.style.display = 'none';
        }
    });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you for your message, ${email}! We will get back to you soon.`);
    this.reset();
});

