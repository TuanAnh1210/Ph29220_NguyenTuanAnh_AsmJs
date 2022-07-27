const modal = document.querySelector(".modal");
const search = document.querySelector(".header__search");
const modalContainer = document.querySelector(".modal__container");
const modalClose = document.querySelector(".modal__form-close");

search.onclick = () => {
  modal.classList.add("open");
  document.querySelector("body").style.overflow = "hidden";
};

modalContainer.onclick = (e) => {
  e.stopPropagation();
};

modalClose.onclick = () => {
  modal.classList.remove("open");
  document.querySelector("body").style.overflow = "";

  let NewItems = modalItems.slice(6);
  console.log(NewItems);
  const test = NewItems.map((item) => {
    if (item.style.display == "flex") {
      item.style.display = "none";
    }
  });
  count = 8;
};

modal.onclick = function () {
  this.classList.remove("open");
  document.querySelector("body").style.overflow = "";

  let NewItems = modalItems.slice(6);
  console.log(NewItems);
  const test = NewItems.map((item) => {
    if (item.style.display == "flex") {
      item.style.display = "none";
    }
  });
  count = 8;
};

// Search

searchInput.onkeyup = function (e) {
  for (let i = 0; i < modalItems.length; i++) {
    var text = modalItems[i].innerText.toLowerCase();
    if (e.keyCode === 13) {
      if (text.indexOf(searchInput.value.toLowerCase()) > -1) {
        modalItems[i].style.display = "";
      } else {
        modalItems[i].style.display = "none";
      }
    }
    if (searchInput.value.toLowerCase() == "") {
      if (i < 6) {
        modalItems[i].style.display = "";
      }

      if (i > 6) {
        modalItems[i].style.display = "none";
      }
    }
  }
};

// Load more
let count = 8;
const loadMore = document.querySelector(".loadMore");
let modalItems = Array.from(document.querySelectorAll(".modal__item"));

loadMore.onclick = function () {
  if (count <= modalItems.length) {
    let NewItems = modalItems.slice(5, count);
    const test = NewItems.map((item) => {
      item.style.display = "flex";
    });
  } else {
    alert("ĐÃ LOAD HẾT THÔNG TIN...!!");
  }
  count += 2;
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
