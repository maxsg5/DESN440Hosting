
document.addEventListener('mousemove', function (e) {
    const mask = document.getElementById('mask');
    const hero = document.getElementById('Hero');

    // Get the rectangle of the hero section
    const heroRect = hero.getBoundingClientRect();

    // Calculate mask's new position, keeping it within the hero section
    let newX = e.pageX - heroRect.left - (mask.offsetWidth / 2);
    let newY = e.pageY - heroRect.top - (mask.offsetHeight / 2);

    // Ensure the mask does not move outside the hero section
    newX = Math.max(0, Math.min(newX, heroRect.width - mask.offsetWidth));
    newY = Math.max(0, Math.min(newY, heroRect.height - mask.offsetHeight));

    // Update mask position
    mask.style.left = `${newX}px`;
    mask.style.top = `${newY}px`;
}, false);
