// Optional: Adding click interaction to grid items
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('expanded');
        item.querySelector('p').textContent = 'More content revealed! Add specific details here.';
    });
});
