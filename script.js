document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        alert('Form submitted successfully!');
        return false; // prevent actual form submission
    };
});
