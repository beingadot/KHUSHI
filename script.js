// JavaScript to trigger the animations
const button = document.querySelector('.startAnimation'); // Button with the class 'startAnimation'
const heart = document.querySelector('.heart'); // Heart with the class 'heart'
const rainContainer = document.querySelector('.rain-container'); // Container for heart rain

button.addEventListener('click', () => {
  // Start the flying heart animation
  heart.classList.add('fly-heart');

  // Reset the heart and trigger rain after the fly animation is complete
  setTimeout(() => {
    heart.classList.remove('fly-heart'); // Remove animation class
    heart.style.transition = 'none'; // Disable transition temporarily
    heart.style.transform = 'translate(0, 0) rotate(45deg)'; // Reset position
    heart.style.opacity = '1'; // Reset visibility

    // Trigger the heart rain effect
    startHeartRain();
  }, 3000); // Match the flying animation duration
});

function startHeartRain() {
  const totalHearts = 200; // Number of raining hearts

  for (let i = 0; i < totalHearts; i++) {
    const rainHeart = document.createElement('div');
    rainHeart.classList.add('raining-heart');

    // Randomize position and delay
    rainHeart.style.left = Math.random() * 100 + '%';
    rainHeart.style.animationDelay = Math.random() * 3 + 's';

    // Add the heart to the rain container
    rainContainer.appendChild(rainHeart);

    // Remove hearts after animation to prevent DOM clutter
    setTimeout(() => {
      rainHeart.remove();
    }, 3000); // Match the rain animation duration
  }
}

