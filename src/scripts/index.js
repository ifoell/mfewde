import "regenerator-runtime";
import "../styles/main.css";
import "../styles/responsive.css";
import "../styles/items.css";
import data from "../DATA.json";
import "../public/images/ReStopp.png";

const menu = document.querySelector("#menu");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("navbar-toggleShow");
  event.stopPropagation();
});

const renderAllResto = (resto) => {
  const restoListElement = document.querySelector("#post");
  restoListElement.innerHTML = "";

  let tabindex = 0;

  resto.restaurants.forEach((resto) => {
    restoListElement.innerHTML += `
      <article class="resto-item">
        <div class="image-text">
          <img
              class="img-picture"
              src="${resto.pictureId}"
              alt="${resto.name}"
            />
          <div class="resto-kota">${resto.city}</div>
        </div>
                 
        <div class="post-item-content">
          <div class="text-resto">
            <h3 class="resto-title" tabindex=${tabindex}>${resto.name}</h3>
            <p class="resto-rating">Rating : <span class="rating-number">${resto.rating}</span></p>
            <p class="resto-desc">${resto.description}</p>
          </div>
        </div>
            
      </article>

    `;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderAllResto(data);
});