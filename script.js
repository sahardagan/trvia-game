document.querySelectorAll('.card').forEach(card => {
    const answer = card.querySelector('p');

    // אירוע קליק
    card.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';
    });

    // אירוע מגע
    card.addEventListener('touchstart', (e) => {
        e.preventDefault(); // מונע פעולות ברירת מחדל של הדפדפן
        answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';
    });
    
    // אירוע שחרור מגע
    card.addEventListener('touchend', (e) => {
        e.preventDefault(); // מונע פעולות ברירת מחדל של הדפדפן
        answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';
    });
});
