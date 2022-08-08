// import { itemsArticle } from "./itemsArticle.js";

// show hide create - article

const modalArticle = document.querySelector(".modal__article-wrapper");
const btnCreate = document.querySelector(".btn__create");
const btnArticleClose = document.querySelector(".btn__article-close");
const modal__article = document.querySelector(".modal__article");

btnCreate.onclick = () => {
  modalArticle.classList.add("open");
  document.querySelector("body").style.overflow = "hidden";
};

btnArticleClose.onclick = (e) => {
  e.preventDefault();
  modalArticle.classList.remove("open");
  document.querySelector("body").style.overflow = "";
  for (const field of formField) {
    document.getElementById(field).parentElement.classList.remove("red");
  }
};

modal__article.onclick = (e) => {
  e.stopPropagation();
};
modalArticle.onclick = () => {
  modalArticle.classList.remove("open");
  for (const field of formField) {
    document.getElementById(field).parentElement.classList.remove("red");
  }
  document.querySelector("body").style.overflow = "";
};

//
const itemsArticle = [
  {
    title: "Recreating MDN’s Truncated Text Effect",
    image: "./assets/imgs/article/ar1.png",
    composer: "Geoff Graham",
    description:
      "back in March. It’s gorgeous! And there are some sweet CSS-y gems in it that are fun to look at. One of those",
  },
  {
    title: "Recreating MDN’s ",
    image: "./assets/imgs/article/ar2.png",
    composer: "Geoff symkey",
    description:
      "back in March. It’s gorgeous! And there are some sweet CSS-y gems in ",
  },
  {
    title: "grid-auto-flow",
    image: "./assets/imgs/modal1.png",
    composer: "Tuan Anh",
    description:
      "that allows us to control the flow of grid items that are automatically placed when they are not explicitly positioned with any grid-placement properties.",
  },
  {
    title: "Recreating MDN’s ",
    image: "./assets/imgs/article/ar2.png",
    composer: "Geoff symkey",
    description:
      "back in March. It’s gorgeous! And there are some sweet CSS-y gems in ",
  },
  {
    title: "Recreating MDN’s Truncated Text Effect",
    image: "./assets/imgs/article/ar1.png",
    composer: "Geoff Graham",
    description:
      "back in March. It’s gorgeous! And there are some sweet CSS-y gems in it that ",
  },
  {
    title: "grid-auto-flow",
    image: "./assets/imgs/modal1.png",
    composer: "Tuan Anh",
    description:
      "that allows us to control the flow of grid items that are automatically placed when they are not explicitly positioned with any grid-placement properties.",
  },
  {
    title: ":first",
    image: "./assets/imgs/modal2.png",
    composer: "Tuan Anh",
    description:
      "that allows us to control the flow of grid items that are automatically placed ",
  },
  {
    title: ":first",
    image: "./assets/imgs/modal2.png",
    composer: "Tuan Anh",
    description:
      "that allows us to control the flow of grid items that are automatically placed ",
  },
  //   {
  //     title: "grid-auto-flow",
  //     image: "./assets/imgs/modal3.png",
  //     composer: "Tuan Anh",
  //     description:
  //       "that allows us to control the flow of grid items that are automatically placed when they are not explicitly positioned with any grid-placement properties.",
  //   },
  //   {
  //     title: "Recreating MDN’s Truncated Text Effect",
  //     image: "./assets/imgs/article/ar1.png",
  //     composer: "Geoff Graham",
  //     description:
  //       "back in March. It’s gorgeous! And there are some sweet CSS-y gems in it that are fun to look at. One of those gems is how card components handle truncated …",
  //   },
];

const articleItemsContainer = document.querySelector(
  ".article__items-container"
);

let temp = [];

function render() {
  let articleRender = [...itemsArticle];
  let articleMain = articleRender.reverse().slice(0, 8);
  temp = articleMain.map(
    (item) =>
      `
      <div class="col l-3">
                  <div class="article__item">
                    <div class="article__item-img">
                      <img  src="${item.image}" alt="">
                    </div>
    
                   <div class="article__item-text">
                     <div class="article__item-title"> 
                      <h2 >${item.title}</h2>
                    </div>
  
                     <div class="article__item-decs"> 
                      <p>${item.description}</p>
                    </div>
      
                      <div class="article__item-author">
                        <img src="./assets/imgs/author2.jpg" alt="">
                        <p><strong>${item.composer}</strong> on Jul 28, 2022</p>
                      </div>
                   </div>
                  </div>
                </div>
      `
  );
  articleItemsContainer.innerHTML = temp.join("");
}

// get form submit

const btnArticleAdd = document.querySelector(".btn__article-add");
const input__title = document.querySelector("#title");
const input__img = document.querySelector("#image");
const input__composer = document.querySelector("#composer");
const input__email = document.querySelector("#email");
const input__desc = document.querySelector("#description");

const formField = ["title", "image", "composer", "email", "description"];

btnArticleAdd.onclick = function (e) {
  e.preventDefault();

  let articleData = {};
  validate(articleData);
  if (Object.keys(articleData).length != 0) {
    itemsArticle.push(articleData);
    render();

    clearInput();
  }
  console.log(itemsArticle);
};

// clear input

function clearInput() {
  input__title.value = "";
  input__img.value = "";
  input__composer.value = "";
  input__email.value = "";
  input__desc.value = "";
}

// Validate form

function validate(articleData) {
  let isError = true;
  for (let field of formField) {
    let element = document.getElementById(field);
    const regEmail = /^\w+@(\w+\.\w+){1,2}$/;

    if (field == "title") {
      if (element.value.trim().length < 10) {
        element.parentElement.classList.add("red");
        element.parentElement.querySelector(".errror").innerText =
          "Title phải lớn hơn 10 kí tự";
        isError = false;
      }
    }

    if (field == "email") {
      if (regEmail.test(element.value.trim()) == false) {
        element.parentElement.classList.add("red");
        element.parentElement.querySelector(".errror").innerText =
          "Email sai định dạng";
        isError = false;
      }
    }

    if (field == "description") {
      if (element.value.trim().length < 20) {
        element.parentElement.classList.add("red");
        element.parentElement.querySelector(".errror").innerText =
          "Description phải lớn hơn 20 kí tự";
        isError = false;
      }
    }

    if (element.value.trim() === "") {
      element.parentElement.classList.add("red");
      element.parentElement.querySelector(
        ".errror"
      ).innerText = `Vui lòng nhập ${
        element.parentElement.querySelector("label").innerText
      }`;
      isError = false;
    }

    element.oninput = () => {
      element.parentElement.classList.remove("red");
    };
    if (isError) {
      articleData[field] = element.value;
    }
  }
}
