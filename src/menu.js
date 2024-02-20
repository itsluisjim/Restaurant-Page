import IMG from "./assets/pokebowl.png";
import Items from "./data/items.json";

export function menu() {
  const container = document.createElement("div");

  const banner = document.createElement("div");
  banner.setAttribute("id", "menu--img-banner");

  const h1 = document.createElement("h1");
  h1.setAttribute("id", "menu--heading");
  h1.textContent = "Our menu";

  const menu_items_container = document.createElement("div");
  menu_items_container.setAttribute("id", "menu--items");

  const allItemCards = Items.forEach((item) => {
    const item_card = document.createElement("div");
    item_card.setAttribute("id", "item-card");

    const img = new Image();
    img.setAttribute("id", "item-img");

    img.src = IMG;

    const card_h3 = document.createElement("h4");
    card_h3.setAttribute("id", "item--heading");

    card_h3.textContent = item.heading;

    const card_text = document.createElement("p");
    card_text.setAttribute("id", "item--text");

    card_text.textContent = item.description;

    const card_btn = document.createElement("button");
    card_btn.setAttribute("id", "item--btn");

    card_btn.textContent = "Order Now";

    item_card.appendChild(img);
    item_card.appendChild(card_h3);
    item_card.appendChild(card_text);
    item_card.appendChild(card_btn);

    menu_items_container.appendChild(item_card);
  });

  container.appendChild(banner);
  container.appendChild(h1);
  container.appendChild(menu_items_container);

  return container;
}
