const rotateButton = document.getElementById('rotate-button');
const resetButton = document.getElementById('reset-button');
const pageRotator = document.getElementById('page-rotator');

let currentRotation = 0;

if (rotateButton && resetButton && pageRotator) {
  rotateButton.addEventListener('click', () => {
    currentRotation += 11;
    pageRotator.style.transform = `rotate(${currentRotation}deg)`;
  });

  resetButton.addEventListener('click', () => {
    currentRotation = 0;
    pageRotator.style.transform = 'rotate(0deg)';
  });
}
