import Piselloni from './images/piselloni.jpg';
import Saltimbocca from './images/saltimbocca.jpg';
import Scoreggiona from './images/scoreggiona.jpg';

const dishes = [
	{ url: Scoreggiona, name: 'Spaghetti alla scorreggiona', price: '€ 9' },
	{ url: Saltimbocca, name: 'Saltinculo alla mignotta', price: '€ 10' },
	{ url: Piselloni, name: 'Piselloni alla mandrillo', price: '€ 8' },
];

function generateMenu() {
	const menuContainer = document.createElement('div');

	const menuTitle = document.createElement('h1');
	menuTitle.textContent = 'Menu';

	for (let i = 0; i < dishes.length; i++) {
		const dishContainer = document.createElement('div');
		dishContainer.classList.add('dish-container');

		const dishName = document.createElement('h3');
		dishName.textContent = dishes[i].name;

		const dishImg = new Image();
		dishImg.src = dishes[i].url;

		const dishPrice = document.createElement('h3');
		dishPrice.textContent = dishes[i].price;

		dishContainer.append(dishName, dishImg, dishPrice);
		menuContainer.appendChild(dishContainer);
	}

	return menuContainer;
}

export default generateMenu;
