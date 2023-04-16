function setupNav() {
  const navElement = document.querySelector("header nav");
  const menLink = navElement.querySelector("#men_nav");
  const womenLink = navElement.querySelector("#women_nav");
  const dropdownMen = navElement.querySelector(".dropdown__men");
  const dropdownWomen = navElement.querySelector(".dropdown__women");
  menLink.addEventListener("mouseenter", function () {
    dropdownMen.classList.add("open");
  });
  menLink.addEventListener("mouseleave", function () {
    dropdownMen.classList.remove("open");
  });
  womenLink.addEventListener("mouseenter", function () {
    dropdownWomen.classList.add("open");
  });
  womenLink.addEventListener("mouseleave", function () {
    dropdownWomen.classList.remove("open");
  });
}

setupNav();
