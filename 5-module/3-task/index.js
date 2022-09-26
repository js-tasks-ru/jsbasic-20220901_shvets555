function initCarousel() {
  let slider = document.querySelector('.carousel__inner');
  let images = document.querySelectorAll('.carousel__slide');
  let width = document.querySelector('.carousel__inner').offsetWidth;

  let buttonLeft = document.querySelector('.carousel__arrow_left');
  let buttonRight = document.querySelector('.carousel__arrow_right');

  let count = 0;

  buttonLeft.style.display = 'none';

  buttonRight.addEventListener('click', () => {
    count++;
    slider.style.transform = 'translateX(-' + count * width + 'px)';
    if(count > 0)
    buttonLeft.style.display = '';
    if(count >= images.length - 1)
    buttonRight.style.display = 'none';
  });

  buttonLeft.addEventListener('click', () => {
  count--;
  slider.style.transform = 'translateX(-' + count * width + 'px)';
  if (count < images.length - 1)
  buttonRight.style.display = '';
  if(count <= 0)
  buttonLeft.style.display = 'none';
  });
}