document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        alert('Form submitted successfully!');
        return false; // prevent actual form submission
    };
});

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').onsubmit = function() {
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();

        if (name === "" || email === "" || message === "") {
            alert('Please fill out all fields.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        alert('Form submitted successfully!');
        return false; // Prevent actual form submission
    };

    function validateEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
