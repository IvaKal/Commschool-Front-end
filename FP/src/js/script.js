function setupNav() {
  const navElement = document.querySelector("header nav");
  const menLink = navElement.querySelector("#men_nav");
  const womenLink = navElement.querySelector("#women_nav");
  const dropdownMen = navElement.querySelector(".dropdown__men");
  const dropdownWomen = navElement.querySelector(".dropdown__women");
  const burger = document.querySelector("header .burger");
  const mobileMenu = document.querySelector('header .mobile_menu')
  const mobileMenuClose = mobileMenu.querySelector(".close")
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
  burger.addEventListener("click", function () {
    mobileMenu.classList.add("open");
  })
  mobileMenuClose.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
  })
}

setupNav();

function slider(data) {
  const trendingSlider = document.querySelector(".trending");
  if (trendingSlider == null) {
    return;
  }
  const sliderElement = trendingSlider.querySelector(".slider");
  const trendingSlice = data.slice(0, 5);
  let active = 0;
  let shiftBy = active - 2;
  if (shiftBy < 0) shiftBy = 5 + shiftBy;
  for (let i = 0; i < shiftBy; i++) {
    trendingSlice.push(trendingSlice.shift());
  }
  const divArray = [];
  for (let i = 0; i < 5; i++) {
    const product = trendingSlice[i];
    const div = document.createElement("div");
    div.innerHTML = '<img src="' + product.image + '">';
    sliderElement.appendChild(div);
    divArray.push(div);
    styleDiv(div, i);
    div.addEventListener("click", function () {
      active = i;
      shiftBy = active - 2;
      const divs = [...divArray];
      if (shiftBy < 0) shiftBy = 5 + shiftBy;
      for (let j = 0; j < shiftBy; j++) {
        divs.push(divs.shift());
      }
      for (let j = 0; j < 5; j++) {
        styleDiv(divs[j], j);
      }
    });
  }
  function styleDiv(div, i) {
    if (i == 0) {
      div.style.transform = "scale(0.7) translateX(-180%) ";
      div.style.zIndex = 1;
    } else if (i == 1) {
      div.style.transform = "scale(0.85) translateX(-90%) ";
      div.style.zIndex = 2;
    } else if (i == 2) {
      const lastActive = div.parentNode.querySelector(".active");
      if (lastActive != null) {
        lastActive.classList.remove("active");
      }
      div.style.transform = "scale(1) translateX(0%) ";
      div.style.zIndex = 3;
      div.classList.add("active");
    } else if (i == 3) {
      div.style.transform = "scale(0.85) translateX(90%) ";
      div.style.zIndex = 2;
    } else {
      div.style.transform = "scale(0.7) translateX(180%) ";
      div.style.zIndex = 1;
    }
  }
}

function catalog(data) {
  const params = new URLSearchParams(window.location.search);
  const gender = params.get("gen");
  const catalog = document.querySelector(".catalog .grid");
  if (catalog == null) {
    return;
  }
  for (let i = 0; i < data.length; i++) {
    const product = data[i];
    if ((gender == product.gender || gender == null) 
    // && (category == product.category || category == null)
    ) {
      const productElement = document.createElement("a");
      productElement.innerHTML = '<img src="' + product.image + '">';
      productElement.innerHTML += '<p class="title">' + product.title + "</p>";
      productElement.innerHTML +=
        '<p class="price"> $' + product.price + "</p>";
      productElement.href = "/FP/details.html?id=" + product.id;
      catalog.appendChild(productElement);
    }
  }
}
function details(data) {
  const detailDiv = document.querySelector(".details");
  if (detailDiv == null) {
    return;
  }
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  let product;
  for (let i = 0; i < data.length; i++) {
    if (id == data[i].id) {
      product = data[i];
    }
  }
  const title = detailDiv.querySelector(".details__text .title");
  const description = detailDiv.querySelector(".details__text p");
  const price = detailDiv.querySelector(".details__text .price");
  const button = detailDiv.querySelector(".details__text button");
  const image = detailDiv.querySelector("img");
  image.src = product.image;
  title.innerHTML = product.title;
  description.innerHTML = product.description;
  price.innerHTML = "$" + product.price;
  button.addEventListener("click", function () {
    if (localStorage.cart == undefined) {
      localStorage.cart = JSON.stringify([]);
    }
    const cart = JSON.parse(localStorage.cart);
    cart.push(product.id);
    localStorage.cart = JSON.stringify(cart);
  });
}
function cart(data) {
  const checkout = document.querySelector(".checkout")
  if (checkout == null) {
    return;
  }
  const checkoutCart = checkout.querySelector(".checkout__cart")
  const totalElement = checkout.querySelector(".total")
  let total = 0 
  const cart = JSON.parse(localStorage.cart);
  for (let i = 0; i < data.length; i++) {
    const product = data[i];
    if (cart.includes(product.id)) {
      const quantity = cart.filter(function (v) {
        return v === product.id;
      }).length;
      let html = '<div class="product"> <img src="' + product.image + '" >'
      html += '<div class="product__info"><div class="title">' + product.title + ' </div>'
      html += '<div class="price"><span>Price:</span> $' + product.price + '</div>'
      html += '<div class="quantity"><span>Quantity:</span>'  + quantity + '</div>'
      html += '</div></div>'
      checkoutCart.innerHTML += html
      total += product.price * quantity
    }
  }
  totalElement.innerHTML += "Total: $" + total
  const order = checkout.querySelector(".order")
  const clear = checkout.querySelector(".clear")
  order.addEventListener("click", function () {
    localStorage.cart = '[]'
    alert("order placed")
    window.location.href="/FP/index.html"
  })
  clear.addEventListener("click", function () {
    localStorage.cart = '[]'
    window.location.href="/FP/index.html"
  })
}
async function fetchData() {
  const response = await fetch("/FP/src/data/stock.json");
  const data = await response.json();
  slider(data);
  catalog(data);
  details(data);
  cart(data);
}

fetchData();
