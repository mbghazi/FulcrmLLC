document.addEventListener("DOMContentLoaded", function () {

    // Greeting functionality for index.html
    const greetingButton = document.getElementById('greetingButton');
    if (greetingButton) {
        greetingButton.addEventListener('click', function () {
            alert('Hello and welcome to Fulcrm LLC!');
        });
    }

    // Contact form validation
    const contactForm = document.querySelector("#contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            const email = contactForm.querySelector("[name='email']");
            if (!email.value.includes("@")) {
                alert("Please enter a valid email address.");
                event.preventDefault();
            } else {
                alert('Thank you for reaching out! We will get back to you shortly.');
                event.preventDefault();  // prevent form submission for demo
            }
        });
    }

    // Navigation menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
        });
    }

    // Slideshow functionality for pictures.html
    const nextSlideButton = document.getElementById('nextSlide');
    if (nextSlideButton) {
        nextSlideButton.addEventListener('click', function () {
            let current = document.querySelector('.slide.active');
            let next = current.nextElementSibling;

            if (!next || !next.classList.contains('slide')) {
                next = document.querySelector('.slide:first-child');
            }

            current.classList.remove('active');
            next.classList.add('active');
        });
    }
});
