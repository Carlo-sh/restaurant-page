const dishes = [
	'Spaghetti alla scorreggiona',
	'Saltinculo alla mignotta',
	'Piselloni alla mandrillo',
	'Piatto 4',
	'Piatto 5',
];

function generateMenu() {
	const menuContainer = document.createElement('div');

	const menuTitle = document.createElement('h1');
	menuTitle.textContent = 'Menu';

	const menuList = document.createElement('ul');

	for (let i = 0; i < dishes.length; i++) {
		const dish = document.createElement('li');
		dish.textContent = dishes[i];

		menuList.appendChild(dish);
	}

	menuContainer.append(menuTitle, menuList);
	return menuContainer;
}

export { dishes, generateMenu };
