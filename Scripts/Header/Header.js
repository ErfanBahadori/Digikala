let SearchBar = document.querySelector(".Search__Elements");
let SearchPage = document.querySelector(".Search__Page");
let SearchBack = document.querySelector(".Search__Back");
let SearchText = document.querySelector(".Search__Text");
let SearchCoverBackground = document.querySelector(
  ".Search__Cover__Background"
);

const SearchPageToggle = () => {
  if (window.innerWidth < 1025) {
    SearchPage.classList.toggle("Search__Page__Open");
    document.body.classList.toggle("disable__scroll");
  } else {
    SearchPage.classList.add("open");
    document.body.classList.add("disable__scroll");
    SearchCoverBackground.classList.add("Search__Cover__Background__Visable");
    setTimeout(() => {
      window.addEventListener("click", function target(tag) {
        if (!tag.target.closest(".Search__Page")) {
          SearchPage.classList.remove("open");
          SearchCoverBackground.classList.remove(
            "Search__Cover__Background__Visable"
          );
          document.body.classList.remove("disable__scroll");
          SearchText.value = "";
          this.removeEventListener("click", target);
        }
      });
    }, 500);
  }
};

SearchBar.addEventListener("click", SearchPageToggle);
SearchBack.addEventListener("click", SearchPageToggle);

let CityItem = document.querySelector(".City__item");
let CityDownBox = document.querySelector(".City__down__box");
let CityPage = document.querySelector(".City__page__container");
let CityClose = document.querySelector(".City__page__close");

CityItem.addEventListener("mouseover", () => {
  CityDownBox.classList.add("box__visable");
});
CityItem.addEventListener("mouseout", () => {
  CityDownBox.classList.remove("box__visable");
});

CityItem.addEventListener("click", () => {
  CityPage.classList.add("City__page__visable");
  document.body.style.overflowY = "hidden";
});
CityClose.addEventListener("click", () => {
  CityPage.classList.remove("City__page__visable");
  document.body.style.overflowY = "scroll";
});


let MegaLink = document.querySelector(".Mega__Menu__Link")
let MegaMenu = document.querySelector(".Mega__Menu")

MegaLink.addEventListener("mouseover", () => {
  MegaMenu.classList.add("Mega__Menu__visable")
  document.body.classList.add("disable__scroll");
  SearchCoverBackground.classList.add("Search__Cover__Background__Visable");
})
MegaLink.addEventListener("mouseout", () => {
  MegaMenu.classList.remove("Mega__Menu__visable")
  document.body.classList.remove("disable__scroll");
  SearchCoverBackground.classList.remove("Search__Cover__Background__Visable");
})
