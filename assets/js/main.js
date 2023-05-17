const modal = document.querySelector(".modal");
const search = document.querySelector(".header__search");
const modalContainer = document.querySelector(".modal__container");
const modalClose = document.querySelector(".modal__form-close");

search.onclick = () => {
  modal.classList.add("open");
  searchInput.focus();
  document.querySelector("body").style.overflow = "hidden";
  goToTop.style.display = "none";
};

modalContainer.onclick = (e) => {
  e.stopPropagation();
};

modalClose.onclick = () => {
  modal.classList.remove("open");
  document.querySelector("body").style.overflow = "";

  let NewItems = modalItems.slice(6);
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
  const test = NewItems.map((item) => {
    if (item.style.display == "flex") {
      item.style.display = "none";
    }
  });
  count = 8;
};

// render modal item
const renderModalList = (ele, data) => {
  ele.innerHTML = data
    .map(
      (item) => `
<li class="modal__item">
<a href="https://github.com/TuanAnh1210" class="modal__link">
  <h3 class="searchText itemTitle">${item.title}</h3>
  <p class="itemDescription">${item.desc}</p>
  <p class="itemDate">
  ${Math.floor(
    (new Date().getTime() - new Date(item.create_At).getTime()) /
      (1000 * 60 * 60 * 24)
  )} ngày trước</p>
</a>
<img
  class="modal__img"
  src="${item.thumb}"
  alt=""
/>
</li>
`
    )
    .join("");
};

const handleFilter = (option) => {
  const modal__lists = document.querySelector(".modal__lists");
  switch (option) {
    case "relevance": {
      renderModalList(modal__lists, data);
      break;
    }
    case "newest": {
      const newData = [...data].sort(
        (a, b) =>
          new Date(b.create_At).getTime() - new Date(a.create_At).getTime()
      );
      renderModalList(modal__lists, newData);
      break;
    }
    case "oldest": {
      const newData = [...data].sort(
        (a, b) =>
          new Date(a.create_At).getTime() - new Date(b.create_At).getTime()
      );
      renderModalList(modal__lists, newData);
      break;
    }
    default: {
      renderModalList(modal__lists, data);
      break;
    }
  }
};
handleFilter("relevance");
// end render modal item

// sort by date
const filter_options = document.querySelectorAll(".filter_option");
filter_options.forEach((item) => {
  item.onclick = () => {
    document.querySelector(".filter_option.active").classList.remove("active");
    item.classList.add("active");
    handleFilter(item.dataset.time);
  };
});
// end sort by date

// Search

const highlightItems = (filterInput) => {
  const searchText = filterInput.toLowerCase();
  const items = document.querySelectorAll(".modal__item");

  items.forEach((item) => {
    const title = item.querySelector(".itemTitle");
    const description = item.querySelector(".itemDescription");

    const titleText = title.textContent.toLowerCase();
    const descriptionText = description.textContent.toLowerCase();

    if (titleText.indexOf(searchText) !== -1) {
      highlightText(title, searchText);
      item.style.display = "flex";
    } else {
      removeHighlight(title);
      item.style.display = "none";
    }

    if (descriptionText.indexOf(searchText) !== -1) {
      highlightText(description, searchText);
      item.style.display = "flex";
    } else {
      removeHighlight(description);
      item.style.display = "none";
    }
  });
};

const highlightText = (element, searchText) => {
  const regex = new RegExp("(" + searchText + ")", "gi");
  element.innerHTML = element.textContent.replace(
    regex,
    '<span class="highlight">$1</span>'
  );
};

const removeHighlight = (element) => {
  element.innerHTML = element.textContent;
};

searchInput.oninput = (e) => {
  highlightItems(e.target.value);
  const modal__items = document.querySelectorAll(".modal__item");
  const totalResult = Array.from(modal__items).filter(
    (item) => item.style.display == "flex"
  );
  const total_result = document.querySelector(".total_result");
  total_result.innerText = totalResult.length;
};

// end search

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
  if (window.scrollY >= 680) {
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

const testDate = new Date("2020-09-27T00:00:00");

console.log(testDate.getTime());
