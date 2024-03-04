document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('slider');
  const images = document.querySelectorAll('.image');

  // Show only the first image initially
  images[0].style.display = 'block';

  slider.addEventListener('input', () => {
    const value = parseInt(slider.value);

    images.forEach((image, index) => {
      image.style.display = index === value ? 'block' : 'none';
    });
  });
});