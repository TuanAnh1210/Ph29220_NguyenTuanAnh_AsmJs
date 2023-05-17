// show hide create - article

const modalArticle = document.querySelector(".modal__article-wrapper");
const btnCreate = document.querySelector(".btn__create");
const btnArticleClose = document.querySelector(".btn__article-close");
const modal__article = document.querySelector(".modal__article");
const message__delete = document.querySelector(".message__delete");

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
let itemsArticle = JSON.parse(localStorage.getItem("article__storage"))
  ? JSON.parse(localStorage.getItem("article__storage"))
  : [
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
      {
        title: "grid-auto-flow",
        image: "./assets/imgs/modal3.png",
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
    ];

// let jsonJobs = JSON.stringify(itemsArticle);

// localStorage.setItem("article__storage", jsonJobs);
// console.log(localStorage);

// let itemsArticleStorage = localStorage.getItem("article__storage");
// console.log(JSON.parse(localStorage.getItem("article__storage")));

const articleItemsContainer = document.querySelector(
  ".article__items-container"
);

let temp = [];
let countArticle = 8;

function render() {
  let articleRender = JSON.parse(localStorage.getItem("article__storage"))
    ? JSON.parse(localStorage.getItem("article__storage"))
    : itemsArticle;
  if (countArticle <= articleRender.length) {
    let articleMain = articleRender.slice(0, countArticle);
    temp = articleMain.map(
      (item, index) =>
        `
        <div class=" col l-3"        
        >
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
                         <button class='btn__article-dlt' onclick='deleteAR(${index})'>Delete</button>
                        
                        </div>
                        </div>
                  </div>
        `
    );
  } else {
    let articleMain = articleRender.slice(0, articleRender.length);
    temp = articleMain.map(
      (item, index) =>
        `
        <div class=" col l-3"
            
        >
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
                        <button class='btn__article-dlt' onclick='deleteAR(${index})'>Delete</button>
                        
                        
                     </div>
                    </div>
                  </div>
        `
    );
  }
  articleItemsContainer.innerHTML = temp.join("");
}

// Load more article
const articleLoadmoreBtn = document.querySelector(".article__loadmore-btn");
articleLoadmoreBtn.onclick = () => {
  countArticle += 4;

  // Hiện ẩn bớt
  if (countArticle > 8) {
    articleRemoveBtn.style.display = "block";
  }
  render();
};

// Ẩn bớt
const articleRemoveBtn = document.querySelector(".article__remove-btn");
articleRemoveBtn.onclick = function () {
  countArticle = 8;
  this.style.display = "none";
  render();
};

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

  let articleData = {
    composer: "",
    description: "",
    email: "",
    image: "",
    title: "",
  };

  if (validate(articleData)) {
    itemsArticle.unshift(articleData);

    localStorage.setItem("article__storage", JSON.stringify(itemsArticle));
    render();

    clearInput();
  }
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
    console.log(element);
    const regEmail = /^\w+@(\w+\.\w+){1,2}$/;
    const regImg =
      /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/;
    if (field == "title") {
      if (element.value.trim().length < 10) {
        element.parentElement.classList.add("red");
        element.parentElement.querySelector(".errror").innerText =
          "Title phải lớn hơn 10 kí tự";
        isError = false;
      }
    }

    if (field == "image") {
      if (regImg.test(element.value.trim()) == false) {
        element.parentElement.classList.add("red");
        element.parentElement.querySelector(".errror").innerText =
          "Đường dẫn ảnh không hợp lệ";
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
        console.log("lan chay tiep theo");
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

  if (Object.values(articleData).includes("")) {
    return false;
  } else {
    return true;
  }
}

// handle delete

const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
function deleteAR(index) {
  let i = index;
  message__delete.classList.add("open");

  yes.onclick = function () {
    console.log(i);
    let testDeleteStorage = JSON.parse(localStorage.getItem("article__storage"))
      ? JSON.parse(localStorage.getItem("article__storage"))
      : itemsArticle;

    testDeleteStorage.reverse().splice(i, 1);
    itemsArticle.reverse().splice(i, 1);

    localStorage.setItem(
      "article__storage",
      JSON.stringify(testDeleteStorage.reverse())
    );

    message__delete.classList.remove("open");

    render();
  };

  no.onclick = function () {
    message__delete.classList.remove("open");
  };
}
