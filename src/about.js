import IMG from './assets/bowls.jpg'
import ICON from './assets/icon.svg'

export function about() {
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'about-container');


    const img = new Image();
    img.setAttribute('id', 'about-img');
    img.src = IMG;

    const icon = new Image();
    icon.setAttribute('id', 'about-icon');
    icon.src = ICON;

    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'contentContainer');


    const heading = document.createElement('h1');
    heading.setAttribute('id', 'about-heading');
    heading.textContent = 'Follow us';

    const subHeading = document.createElement('p');
    subHeading.setAttribute('id', 'about-subheading');
    subHeading.textContent = '@chowtime';

    const text = document.createElement('p');
    text.setAttribute('id', 'about-text');
    text.textContent = 'To stay updated with the latest news, promotions, and offerings from the chowtime restaurant, make sure to follow our social media accounts. Don\'t miss out on any updates!'

    contentContainer.appendChild(heading);
    contentContainer.appendChild(subHeading);
    contentContainer.appendChild(text);
    contentContainer.appendChild(icon);


    mainContainer.appendChild(contentContainer);
    mainContainer.appendChild(img);

    return mainContainer;
}