window.onload = function () {
    document.getElementById('section1').style.opacity = '1';
};

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const currentSection = document.querySelector('.section.show');
        const targetSection = document.querySelector(this.getAttribute('href'));

        // Hide current section instantly
        if (currentSection) {
            currentSection.classList.remove('show');
            currentSection.style.display = 'none';
        }

        // Fade in target section
        targetSection.style.display = 'block';
        setTimeout(() => {
            targetSection.classList.add('show');
        }, 10); // small delay to ensure display:block is applied
    });
});




function makeActive(element) {
    // Remove 'active' class from all nav-link elements
    document.querySelectorAll('.nav-link').forEach((navLink) => {
        navLink.classList.remove('active');
    });

    // Add 'active' class to clicked element
    element.classList.add('active');
}

