export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;

    this.spans()
    this.render();
    this.addEventListeners();
  }

  spans(){
    let spans = '';
      for(let i = 0; i < this.steps; i++){
        if(i === this.value){
          spans += '<span class="slider__step-active"></span>';
      } else {
        spans += '<span></span>';
      }
    }
    return spans;
  }

  render(){

    this.elem = document.createElement('div');
    this.elem.classList.add('slider');

    let slider = `
    <div class="slider__thumb">
      <span class="slider__value">0</span>
    </div>

    <div class="slider__progress"></div>

    <div class="slider__steps">
      ${this.spans()}
    </div>
    `

    this.elem.innerHTML = slider;

    this.elem.querySelector('.slider__thumb').style.left = 0;
    this.elem.querySelector('.slider__progress').style.width = 0;
  }

  addEventListeners(){
    this.elem.addEventListener('click', (event) => {
      
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100 + '%';

      this.value = value;
      this.elem.querySelector('.slider__value').innerHTML = this.value;

      let slider = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      if(!slider || !progress) return;
      slider.style.left = `${valuePercents}`;
      progress.style.width = `${valuePercents}`;

      this.elem.querySelector('.slider__step-active').classList.remove('slider__step-active');
      let spans = this.elem.querySelector('.slider__steps').querySelectorAll('span');
      spans[this.value].classList.add('slider__step-active');

      this.elem.dispatchEvent(new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      }));

    });
  }
}
