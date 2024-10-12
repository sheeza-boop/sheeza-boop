document.addEventListener('DOMContentLoaded', () => {
    const cube = document.querySelector('.cube');
    let rotateX = 0;
    let rotateY = 0;

    document.addEventListener('mousemove', (e) => {
        rotateX = (e.clientY / window.innerHeight - 0.5) * 360;
        rotateY = (e.clientX / window.innerWidth - 0.5) * 360;
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});
