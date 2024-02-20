import './style.css';

export function home() {
  const container = document.createElement("div");
  container.setAttribute('id', 'main-section');


  const card = document.createElement('div');
  card.setAttribute('id', 'home--card');

  const heading = document.createElement('h2');
  heading.setAttribute('id', 'card--heading');
  heading.textContent = 'ASIAN INSPIRED BOWLS';

  const text = document.createElement('p');
  text.setAttribute('id', 'card--text');
  text.textContent = 'Fresh, healthy, delicious';

  const button = document.createElement('button');
  button.setAttribute('id', 'card--btn');
  button.textContent = 'Order Now';

  card.appendChild(heading);
  card.appendChild(text);
  card.appendChild(button);

  container.appendChild(card);

  

  return container;
}
