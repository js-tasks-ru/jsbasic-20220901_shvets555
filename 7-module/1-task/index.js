import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    
    this.#render();
    this.scroll();
    this.addEventListeners();
  }

  #render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');

    let carousel = `
    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <nav class="ribbon__inner">
    ${this.categories.map(categorie => `
    <a href="#" class="ribbon__item" data-id="${categorie.id}">${categorie.name}</a>
    `).join('')}
    
    </nav>

    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    `

    this.elem.innerHTML = carousel;
    
    this.scroll();
  }

  scroll(){
    let scrollWidth = this.elem.querySelector('.ribbon__inner').scrollWidth;
    let scrollLeft = this.elem.querySelector('.ribbon__inner').scrollLeft;
    let clientWidth = this.elem.querySelector('.ribbon__inner').clientWidth;
    
    let scrollRight = scrollWidth - scrollLeft - clientWidth;


    if(scrollLeft < 1) {
    this.elem.querySelector('.ribbon__arrow_left').classList.remove('ribbon__arrow_visible');
    this.elem.querySelector('.ribbon__arrow_right').classList.add('ribbon__arrow_visible');
    }
    
    if (scrollLeft > 1){
      this.elem.querySelector('.ribbon__arrow_left').classList.add('ribbon__arrow_visible');
    }

    if (scrollRight === 1){
    this.elem.querySelector('.ribbon__arrow_right').classList.remove('ribbon__arrow_visible');
    }
  }

  addEventListeners(){
    
    this.elem.onclick = (event) => {
      let button = event.target.closest('.ribbon__item');
      if (button) {
        event.preventDefault();
        let id = event.target.closest('[data-id]').dataset.id;
        console.log(id);
        this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
          detail: id,
          bubbles: true
        }));
      }

      if(event.target.closest('.ribbon__arrow_right')) {
        this.right();
      }

      if(event.target.closest('.ribbon__arrow_left')) {
        this.left();
      }

    };
      
  }

  right() {
    let slider = this.elem.querySelector('.ribbon__inner');
    slider.scrollBy(350, 0);
    this.scroll();
  }

  left() {
    let slider = this.elem.querySelector('.ribbon__inner');
    slider.scrollBy(-350, 0);
    this.scroll();
  }

}
