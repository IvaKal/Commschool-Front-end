function setupNav() {
  const navElement = document.querySelector("header nav");
  const menLink = navElement.querySelector("#men_nav");
  const womenLink = navElement.querySelector("#women_nav");
  const dropdownMen = navElement.querySelector(".dropdown__men");
  const dropdownWomen = navElement.querySelector(".dropdown__women");
  menLink.addEventListener("mouseenter", function () {
    dropdownMen.classList.add("open");
    dropdownWomen.classList.remove("open");
  });
  womenLink.addEventListener("mouseenter", function () {
    dropdownWomen.classList.add("open");
    dropdownMen.classList.remove("open");
  });

  navElement.addEventListener("mouseleave", function () {
    dropdownMen.classList.remove("open");
    dropdownWomen.classList.remove("open");
  });
}

setupNav();

function slider(data) {
  const trendingSlider = document.querySelector(".trending");
  if (trendingSlider == null) {
    return;
  }
  const sliderElement = trendingSlider.querySelector(".slider");
  const trendingSlice = data.slice(0, 5);
  for (let i = 0; i < 5; i++) {
    const product = trendingSlice[i];
    const div = document.createElement("div");
    div.innerHTML = '<img src="' + product.image + '">';
    sliderElement.appendChild(div);
    div.style.left= i*15+10+"%"
    if(i==2){
      div.classList.add("active")
    }
  }
}

async function fetchData() {
  const response = await fetch("/FP/src/data/stock.json");
  const data = await response.json();
  slider(data);
}

fetchData();
