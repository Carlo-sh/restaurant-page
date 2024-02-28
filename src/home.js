import Gigi from './gigi-il-troione.jpg';

const hours = [
	['Lun:', 'Closed'],
	['Mar:', '18.00 - 23.30'],
	['Mer:', '18.00 - 23.30'],
	['Gio:', '18.00 - 23.30'],
	['Ven:', '18.30 - 00.30'],
	['Sab:', '18.30 - 00.30'],
	['Dom:', '19.00 - 23.30'],
];

function component() {
	const homeContainer = document.createElement('div');
	homeContainer.classList.add('home');

	const restaurantName = document.createElement('h1');
	restaurantName.textContent = 'Gigi il Troione';

	const image = new Image();
	image.src = Gigi;

	const lineContainer = document.createElement('div');
	lineContainer.classList.add('line-container');

	const paragraph = document.createElement('p');
	const span = document.createElement('span');
	span.textContent = 'Fantozzi: ';
	paragraph.textContent =
		"Signorina Silvani, posso avere l'onore di averla a colazione da Gigi il Troione? … ho già prenotato!";

	lineContainer.append(span, paragraph);

	const hoursTitle = document.createElement('h2');
	hoursTitle.textContent = 'Hours';

	const hoursContainer = document.createElement('div');
	const hoursList = document.createElement('ul');
	for (const day of hours) {
		const item = document.createElement('li');
		item.classList.add('li-item');
		item.innerHTML = `<span class="days">${day[0]}</span><span class="hours">${day[1]}</span>`;
		hoursList.appendChild(item);
	}

	hoursContainer.appendChild(hoursList);
	homeContainer.append(
		restaurantName,
		image,
		lineContainer,
		hoursTitle,
		hoursContainer,
	);

	return homeContainer;
}

export default component;
