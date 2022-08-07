// show hide create - article

const modalArticle = document.querySelector(".modal__article-wrapper");
const btnCreate = document.querySelector(".btn__create");
const btnArticleClose = document.querySelector(".btn__article-close");
const modal__article = document.querySelector(".modal__article");

btnCreate.onclick = () => {
  modalArticle.classList.add("open");
};

btnArticleClose.onclick = (e) => {
  e.preventDefault();
  modalArticle.classList.remove("open");
};

modal__article.onclick = (e) => {
  e.stopPropagation();
};
modalArticle.onclick = () => {
  modalArticle.classList.remove("open");
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
temp = itemsArticle.map(
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
