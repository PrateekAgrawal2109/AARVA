const menuData = {
  dosa: {
    image: "assets/quinoa-dosa-02.jpg?auto=format&fit=crop&w=1000&q=85",
    alt: "Golden South Indian dosa",
    items: [
      ["Plain Dosa","Crisp, golden and beautifully simple.","₹90"],
      ["Masala Dosa","A classic dosa with spiced potato filling.","₹120"],
      ["Onion Masala Dosa","Crisp dosa with onion and potato masala.","₹140"],
      ["Mysore Masala Dosa","A bold, flavourful Mysore-style favourite.","₹160"],
      ["Paper Plain Dosa","Extra-thin, crisp and wonderfully light.","₹160"],
      ["Paneer Dosa","A delicious paneer-filled variation.","₹170"],
      ["Ghee Podi Masala Dosa","Aromatic podi with rich ghee and masala.","₹170"],
      ["AARVA Signature Dosa","The house signature, made for a special craving.","₹200"],
      ["Benne Podi Dosa","Bangalore-style butter dosa with podi.","₹140"],
      ["Benne Podi Masala Dosa","Buttery benne, podi and potato masala.","₹170"]
    ]
  },
  idli: {
    image: "assets/Idli-2040-scaled.jpg?auto=format&fit=crop&w=1000&q=85",
    alt: "South Indian idli and accompaniments",
    items: [
      ["Plain Idli","Soft, steamed and comforting.","₹70"],
      ["Medu Vada","Golden lentil fritters, crisp outside.","₹80"],
      ["Idli Vada Combo","A comforting combination of two favourites.","₹90"],
      ["Dahi Vada","A cooling, savoury classic.","₹100"],
      ["Fried Idli","A deliciously crisp take on a classic.","₹100"],
      ["Ghee Podi Idli","Soft idli finished with ghee and podi.","₹100"],
      ["Tomato Idli","A tangy, flavourful idli variation.","₹100"],
      ["Chettinad Idli","Aromatic spices with a South Indian favourite.","₹120"]
    ]
  },
  uttapam: {
    image: "https://www.cookwithmanali.com/wp-content/uploads/2024/02/rava-uttapam-with-coconut-chutney.jpg?auto=format&fit=crop&w=1000&q=85",
    alt: "South Indian savoury dosa-style dish",
    items: [
      ["Onion Uttapam","Topped with freshly chopped onion.","₹150"],
      ["Onion Podi Uttapam","Onion with a flavourful podi finish.","₹160"],
      ["Onion Tomato Uttapam","A fresh, savoury onion and tomato topping.","₹170"],
      ["Mix Veg Uttapam","A colourful mix of vegetables.","₹180"]
    ]
  },
  rice: {
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85",
    alt: "Indian rice dish",
    items: [
      ["Lemon Rice","Bright, tangy and full of flavour.","₹140"],
      ["Curd Rice","A cooling, comforting South Indian classic.","₹140"],
      ["Tomato Rice","Fragrant rice with tomato and spices.","₹150"],
      ["Ghee Podi Rice","Rice tossed with aromatic podi and ghee.","₹160"],
      ["Bisi Bele Bath","A hearty rice, lentil and vegetable favourite.","₹160"]
    ]
  },
  drinks: {
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=1000&q=85",
    alt: "Freshly brewed coffee",
    items: [
      ["Filter Coffee","A rich, aromatic South Indian classic.","₹60"],
      ["Iced Filter Coffee","Your favourite filter coffee, served chilled.","₹60"],
      ["Buttermilk","A refreshing savoury cooler.","₹70"],
      ["Fresh Lime Soda","A bright and refreshing sip.","₹90"],
      ["Lemon Ice Tea","A cool citrus lift.","₹90"],
      ["Sweet Lassi","Creamy, cool and gently sweet.","₹100"],
      ["Hazelnut Iced Coffee","A chilled coffee treat.","₹130"],
      ["Tiramisu Iced Coffee","Coffee-inspired indulgence.","₹140"]
    ]
  }
};

const itemsContainer = document.getElementById("menu-items");
const menuPhoto = document.getElementById("menu-photo");
const tabs = [...document.querySelectorAll(".menu-tab")];

function showCategory(category) {
  const data = menuData[category] || menuData.dosa;
  menuPhoto.src = data.image;
  menuPhoto.alt = data.alt;
  itemsContainer.innerHTML = data.items.map((item, index) => `
    <article class="menu-item" style="animation-delay:${index * 35}ms">
      <div class="item-top"><h3>${item[0]}</h3><span class="price">${item[2]}</span></div>
      <p>${item[1]}</p>
    </article>`).join("");
  tabs.forEach(tab => {
    const active = tab.dataset.category === category;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });
}
tabs.forEach(tab => tab.addEventListener("click", () => showCategory(tab.dataset.category)));
document.querySelectorAll("[data-show-category]").forEach(link => link.addEventListener("click", () => {
  showCategory(link.dataset.showCategory);
}));
showCategory("dosa");

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();
