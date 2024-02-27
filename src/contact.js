const info = {
	telephone: '555-5555',
	email: 'myemail@mail.com',
	facebook: 'facebook/fbPage.com',
};

function generateContact() {
	const contactContainer = document.createElement('div');

	const contactTitle = document.createElement('h1');
	contactTitle.textContent = 'Contact us:';
	contactContainer.appendChild(contactTitle);

	for (let contact in info) {
		const par = document.createElement('p');
		par.classList.add('contact-p');
		par.textContent = `${contact}: ${info[contact]}`;
		contactContainer.appendChild(par);
	}

	return contactContainer;
}

export { info, generateContact };
