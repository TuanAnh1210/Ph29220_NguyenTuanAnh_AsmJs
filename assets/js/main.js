const modal = document.querySelector(".modal");
const search = document.querySelector(".header__search");
const modalContainer = document.querySelector(".modal__container");
const modalClose = document.querySelector(".modal__form-close");

search.onclick = () => {
  modal.classList.add("open");
};

modalContainer.onclick = (e) => {
  e.stopPropagation();
};

modalClose.onclick = () => {
  modal.classList.remove("open");
};

modal.onclick = function () {
  this.classList.remove("open");
};

// Search

const searchInput = document.getElementById("searchInput");
let modalItems = document.querySelectorAll(".modal__item");

searchInput.onkeyup = function () {
  modalItems.forEach(function (el) {
    var text = el.innerText.toLowerCase();
    console.log(text);
    if (text.indexOf(searchInput.value.toLowerCase()) > -1) {
      el.style.display = "";
    } else if (searchInput.value.toLowerCase() == "") {
      el.style.display = "";
    } else {
      el.style.display = "none";
    }
  });
};
