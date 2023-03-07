function forms(){
     //Forms

  const forms = document.querySelectorAll("form");

  const message = {
    loading: "img/form/spinner.svg",
    succes: "Спасибо, мы скоро с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0;
      `;
      form.append(statusMessage);
      // form.insertAdjacendElement('afterend', statusMessage);

      // const request = new XMLHttpRequest();
      // request.open('POST', 'server.php');

      // request.setRequestHeader('Content-type','multipart/form-data');
      // request.setRequestHeader('Content-type','application/json');
      const formData = new FormData(form);

      // const object = {};
      // formData.forEach(function(value, key){
      //   object[key] = value;
      // });

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // const json = JSON.stringify(object);

      //   fetch('server.php', {
      //     method: "POST",
      //     headers: {
      //       'Content-type':'application/json'
      //     },
      //     body: JSON.stringify(object)
      // })
      postData("http://localhost:3000/requests", json)
        // .then(data => data.text())
        .then((data) => {
          console.log(data);
          showThanksModal(message.succes);
          form.reset();
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });
      // request.send(json);

      // request.addEventListener('load', ()=>{
      //   if(request.status === 200){
      //     console.log(request.response);
      //     console.log(message.succes);
      //     // statusMessage.textContent = message.succes;
      //     showThanksModal(message.succes);
      //     form.reset();
      //     // setTimeout(()=>{
      //       statusMessage.remove();
      //     // }, 2000);
      //   } else {
      //     // statusMessage.textContent = message.failure;
      //     showThanksModal(message.failure);
      //     console.log(message.failure);
      //   }
      // });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
    <div class="modal__content">
      <div class="modal__close" data-close>×</div>
      <div class="modal__title">${message}</div>
      </div>
  `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }
  //TestFetch
  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //       method: "POST",
  //       body: JSON.stringify({name: 'Max'}),
  //       headers: {
  //         'content-type': 'application/json'
  //       }
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  fetch("http://localhost:3000/menu")
    .then((data) => data.json())
    .then((res) => console.log(res));

}
module.exports = forms;