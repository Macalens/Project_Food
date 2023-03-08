import { getResource } from "../services/services";

function cards(){

    //Создаём карточки с помощью классов

    class MenuCards {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 37;
            this.changeToUAH();
        }
        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement("div");
            element.innerHTML = ` <div class="menu__item">
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
    </div>
    `;
            this.parent.append(element);
        }
    }

    // const getResource = async (url) => {
    //     const res = await fetch(url);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status ${res.status}`);
    //     }

    //     return await res.json();
    // };

    // async function getResource(url) {
    //     let res = await fetch(url);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status ${res.status}`);
    //     }

    //     return await res.json();
    // }

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCards(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
}
export default cards;


// axios.get("http://localhost:3000/menu").then((responce) =>
//   responce.data.forEach(({ img, altimg, title, descr, price }) => {
//     new MenuCards(
//       img,
//       altimg,
//       title,
//       descr,
//       price,
//       ".menu .container"
//     ).render();
//   })
// );

// getResource('http://localhost:3000/menu')
// .then(data => createCard(data) );

// function createCard(data){
//   data.forEach(({img, altimg, title, descr, price, transfer})=>{
//     const element = document.createElement('div');

//     element.classList.add('menu__item');

//     element.innerHTML = ` <div class="menu__item">
//     <img src=${img} alt=${altimg}>
//     <h3 class="menu__item-subtitle">${title}</h3>
//     <div class="menu__item-descr">${descr}</div>
//     <div class="menu__item-price">
//         <div class="menu__item-cost">Цена:</div>
//         <div class="menu__item-total"><span>${price*37}</span> грн/день</div>
//     </div>
// </div>
// `;
// document.querySelector('.menu .container').append(element);

//   });
// }

// const div = new MenuCards(
//   "img/tabs/vegy.jpg",
//   "vegy",
//   'Меню "Фитнес"',
//   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//   13,
//   '.menu .container'
// );
// div.render();
// new MenuCards(
//   "img/tabs/elite.jpg",
//   "elite",
//   'Меню "Премиум"',
//   'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//   14,
//   '.menu .container',
//   'menu_item'
// ).render();

// new MenuCards(
//   "img/tabs/post.jpg",
//   "elite",
//   'Меню "Постное"',
//   'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//   15,
//   '.menu .container',
//   'menu_item'
// ).render();