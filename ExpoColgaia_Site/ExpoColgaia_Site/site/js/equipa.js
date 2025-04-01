const cardsContainer = document.querySelector('.cards');

function moveLeft() {
  cardsContainer.scrollBy({ left: -350, behavior: 'smooth' });
}

function moveRight() {
  cardsContainer.scrollBy({ left: 350, behavior: 'smooth' });
}
