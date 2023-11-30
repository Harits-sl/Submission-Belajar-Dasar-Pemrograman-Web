const itemBestSeller = (imageUrl, name, description, price) => {
  return `
  <div class="col-best-seller card">
    <img src="${imageUrl}" class="card-img" alt="..." />
    <div class="card-body p-0 mx-2 mt-3">
      <p class="card-title text-primary fw-semibold fs-2">
      ${name}
      </p>
      <p class="card-text text-secondary" style="margin-top: 8px">
        ${description}
      </p>
      <p class="card-text text-yellow fw-semibold fs-4 mt-1">${price}</p>
    </div>
  </div>
  `;
};

const addCardBestSeller = () => {
  const bestSeller = document.querySelector(".row-best-seller");

  const listBestSeller = [
    {
      imageUrl: "assets/motasuren.jpg",
      name: "Mota Suren",
      description: "Perpaduan kopi, susu dan gula aren",
      price: "15k",
    },
    {
      imageUrl: "assets/blueocean.jpg",
      name: "Blue Ocean",
      description: "Sirup blue curacao dicampur soda",
      price: "20k",
    },
    {
      imageUrl: "assets/coklat.jpg",
      name: "Choco Hazelnut",
      description: "Coklat premium dengan sirup Hazelnut",
      price: "20k",
    },
  ];

  listBestSeller.map((item) => {
    return (bestSeller.innerHTML += itemBestSeller(
      item.imageUrl,
      item.name,
      item.description,
      item.price
    ));
  });
};

window.addEventListener("load", () => {
  addCardBestSeller();
});

// add class active navbar
const navItems = document.querySelectorAll(".nav-item");
if (navItems.length) {
  navItems.forEach((nav) => {
    nav.addEventListener("click", (e) => {
      // remove all class active
      navItems.forEach((nav) => {
        nav.classList.remove("active");
      });

      nav.classList.add("active");
    });
  });
}

// Hamburger navbar
let openHam = document.querySelector("#openHam");
let closeHam = document.querySelector("#closeHam");
let navigationItems = document.querySelector(".navbar-nav");

const hamburgerEvent = (navigation, close, open) => {
  navigationItems.style.display = navigation;
  closeHam.style.display = close;
  openHam.style.display = open;
};

openHam.addEventListener("click", () =>
  hamburgerEvent("block", "block", "none")
);
closeHam.addEventListener("click", () =>
  hamburgerEvent("none", "none", "block")
);

// wheen scroll add bg navbar
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-black");
  } else {
    navbar.classList.remove("bg-black");
    navbar.classList.add("bg-transparent");
  }
});
