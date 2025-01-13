function openPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('profilePopup').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('closeBtn');
    const homeUrl = closeButton.getAttribute('data-home-url'); // Get the home URL from the data attribute

    closeButton.addEventListener('click', () => {
        if (confirm("Are you sure? Unsaved changes will be lost.")) {
            window.location.href = homeUrl; // Redirects to the Django-defined 'home' URL
        }
    });
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}
