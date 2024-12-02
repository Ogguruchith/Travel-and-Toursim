const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const cards = document.querySelectorAll('.cards');
let currentIndex = 0;

function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === cards.length - 1;
}

function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });
    updateButtons();
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showCard(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        showCard(currentIndex);
    }
});

updateButtons();
