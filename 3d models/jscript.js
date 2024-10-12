document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    let isDragging = false, startX, currentRotation = 0;

    // Drag to rotate the carousel
    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - currentRotation;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentRotation = e.pageX - startX;
        carousel.style.transform = `rotateY(${currentRotation / 2}deg)`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});
