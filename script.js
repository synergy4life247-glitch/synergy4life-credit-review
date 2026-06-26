const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('touchstart', () => button.classList.add('is-tapped'), { passive: true });
  button.addEventListener('touchend', () => button.classList.remove('is-tapped'));
});
