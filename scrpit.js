// Toggle menu visibility on mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the "show" class to display the mobile menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

function selectPlan(plan) {
    alert(`You have selected the ${plan} plan!`);
}

const faqQuestions = document.querySelectorAll('.faq-question');

document.getElementById('disclaimerButton').addEventListener('click', function() {
    var disclaimer = document.getElementById('disclaimerText');
    if (disclaimer.style.display === 'none' || disclaimer.style.display === '') {
        disclaimer.style.display = 'block';
    } else {
        disclaimer.style.display = 'none';
    }
});


