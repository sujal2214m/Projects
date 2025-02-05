const hamburger = document.querySelector('.hamburger');
const menuPage = document.querySelector('.menu-page ul');

hamburger.addEventListener('click', () => {
    menuPage.classList.toggle('active');
});


const manageCards = document.querySelectorAll('.manage-card');

manageCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const { offsetX: x, offsetY: y } = e;
    const { offsetWidth: width, offsetHeight: height } = card;

    // Calculate the glow position relative to the card
    const glowX = (x / width) * 100;
    const glowY = (y / height) * 100;

    // Update CSS variables for the glow position
    card.style.setProperty('--x', `${glowX}%`);
    card.style.setProperty('--y', `${glowY}%`);
  });

  card.addEventListener('mouseleave', () => {
    // Reset the glow position when the cursor leaves the card
    card.style.setProperty('--x', `-100%`);
    card.style.setProperty('--y', `-100%`);
  });
});