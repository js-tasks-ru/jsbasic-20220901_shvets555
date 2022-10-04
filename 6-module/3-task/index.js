import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.count = 0;

    this.render();
    this.addEventListeners();
  }

  render(){
    this.elem = document.createElement("div");
    this.elem.classList.add("carousel");
    let carousel = `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

      <div class="carousel__inner">      
        ${this.slides.map(slide =>`
          <div class="carousel__slide" data-id="${slide.id}">
            <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
              <div class="carousel__caption">
                <span class="carousel__price">€${slide.price.toFixed(2)}</span>
                <div class="carousel__title">${slide.name}</div>
                <button type="button" class="carousel__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
              </div>
          </div>
          `
          ).join('')
        }        
      </div>
      `
  this.elem.innerHTML = carousel;

  this.initCarousel();
  }

  addEventListeners(){
    
    this.elem.onclick = ({target}) => {
      let button = target.closest('.carousel__button');
      if (button) {
        let id = target.closest('[data-id]').dataset.id;
        console.log(id);
        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: id,
          bubbles: true
        }));
      }

      if(target.closest('.carousel__arrow_right')) {
        this.right();
      }

      if(target.closest('.carousel__arrow_left')) {
        this.left();
      }

    };
      
  }

  initCarousel(){
    let slider = this.elem.querySelector('.carousel__inner');
    let width = this.elem.offsetWidth;
  
    let buttonLeft = this.elem.querySelector('.carousel__arrow_left');
    let buttonRight = this.elem.querySelector('.carousel__arrow_right');
  
    slider.style.transform = `translateX(${-width * this.count}px)`;

      if(this.count > 0)
      buttonLeft.style.display = '';
      if(this.count >= this.slides.length - 1)
      buttonRight.style.display = 'none';

      if (this.count < this.slides.length - 1)
      buttonRight.style.display = '';
      if(this.count <= 0)
      buttonLeft.style.display = 'none';
  }

  right() {
    this.count++;
    this.initCarousel();
  }

  left() {
    this.count--;
    this.initCarousel();
  }
}
