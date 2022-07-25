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

searchInput.onkeyup = function (e) {
  modalItems.forEach(function (el) {
    var text = el.innerText.toLowerCase();
    if (e.keyCode === 13) {
      if (text.indexOf(searchInput.value.toLowerCase()) > -1) {
        el.style.display = "";
      } else if (searchInput.value.toLowerCase() == "") {
        el.style.display = "";
      } else {
        el.style.display = "none";
      }
    } else if (searchInput.value.toLowerCase() == "") {
      el.style.display = "";
    }
  });
};

// GOtoTop

const goToTop = document.querySelector(".goToTop");

const handleScrooll = () => {
  if (window.scrollY >= 340) {
    goToTop.style.display = "flex";
  } else {
    goToTop.style.display = "none";
  }
};

goToTop.onclick = () => {
  window.location.href = "#";
};

window.addEventListener("scroll", handleScrooll);

// end GotoTop
