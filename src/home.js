import Gigi from './gigi-il-troione.jpg';

function component() {
	const homeContainer = document.createElement('div');
	homeContainer.classList.add('home');

	const restaurantName = document.createElement('h1');
	restaurantName.textContent = 'Gigi il Troione';

	homeContainer.appendChild(restaurantName);

	const image = new Image();
	image.src = Gigi;

	homeContainer.appendChild(image);

	const paragraph = document.createElement('p');
	paragraph.textContent =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	homeContainer.appendChild(paragraph);
	return homeContainer;
}

export default component;
