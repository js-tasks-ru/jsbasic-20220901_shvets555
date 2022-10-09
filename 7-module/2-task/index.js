import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();

    this.elem.querySelector('.modal__close').addEventListener('click', this.close);
    document.addEventListener('keydown', this.closeBtn);
  }

  render(){
    this.elem = document.createElement('div');
    this.elem.classList.add('modal');

    let modal = `
      <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title">
              Вот сюда нужно добавлять заголовок
            </h3>
          </div>
          <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
          </div>
        </div>
    `

    this.elem.innerHTML = modal;
  }

  open(){
    document.body.classList.add('is-modal-open');
    document.body.append(this.elem);
  }

  setTitle(modalTitle) {
    this.elem.querySelector('.modal__title').innerHTML = modalTitle;
  }

  setBody(node) {
    this.elem.querySelector('.modal__body').innerHTML = '';
    this.elem.querySelector('.modal__body').append(node);
  }

  close = () => {
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
    document.removeEventListener('keydown', this.closeBtn);
  }

  closeBtn = (event) => {
    if(event.code === 'Escape'){
      this.close();
    }
  }

}
