function modal(){
    
  //Modal

  const modalTrigger = document.querySelectorAll("[data-modal]"),
  modal = document.querySelector(".modal");
// modalCloseBtn = document.querySelector('[data-close]');

function openModal() {
  // modal.classList.add('shoshow
  // modal.classList.remove('hide');
  modal.classList.toggle("show");
  document.body.style.overflow = "hidden";
  // clearInterval(modalTimerId);
}

modalTrigger.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

function closeModal() {
  modal.classList.toggle("show");
  document.body.style.overflow = "";
}

// modalCloseBtn.addEventListener('click', closeModal);

// modal.classList.add('hide');
// modal.classList.remove('show');

modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.getAttribute("data-close") == "") {
    closeModal();
    //   modal.classList.toggle('show');
    // document.body.style.overflow = '';
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});

// const modalTimerId = setTimeout(openModal, 5000);

// function showModalByScroll(){
//   if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
//     openModal();
//     window.removeEventListener('scroll', showModalByScroll);
//   }

// }

// window.addEventListener('scroll', showModalByScroll);





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


}
module.exports =modal;