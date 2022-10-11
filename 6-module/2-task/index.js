export default class ProductCard {

  constructor(product) {
    this.name = product.name;    
    this.price = product.price;
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;

    this.elem = document.createElement('div');
    this.#render();
    this.#pushButton();
  }

  #render(){
    let card = `
    <div class="card__top">
        <img src="/assets/images/products/laab_kai_chicken_salad.png" class="card__image" alt="product">
        <span class="card__price">€${this.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    `
    this.elem.innerHTML = card;
  }

  #pushButton(){
    let button = this.elem.querySelector(".card__button");
    
    button.addEventListener('click', () => {
      let e = new CustomEvent("product-add", {bubbles: true,
      detail: this.id})

      this.elem.dispatchEvent(e);
    }); 

  }

}