import fb from './icons/facebook.svg';
import ig from './icons/instagram.svg';
import tw from './icons/twitter.svg';

const info = {
	telephone: '06-5555555',
	email: 'gigiiltroione@gmail.com',
	facebook: 'facebook/gigiiltroione.com',
};

const icons = [{ url: fb }, { url: ig }, { url: tw }];

function generateContact() {
	const contactContainer = document.createElement('div');
	contactContainer.setAttribute('id', 'contacts');

	const contactTitle = document.createElement('h1');
	contactTitle.textContent = 'Contact us:';
	contactContainer.appendChild(contactTitle);

	for (const contact in info) {
		const par = document.createElement('p');
		par.classList.add('contact-p');
		par.textContent = `${contact}: ${info[contact]}`;
		contactContainer.appendChild(par);
	}

	const socialContainer = document.createElement('div');
	socialContainer.classList.add('socials');

	for (const icon of icons) {
		const socialIcon = new Image();
		socialIcon.src = icon.url;
		socialIcon.classList.add('icons');
		socialContainer.appendChild(socialIcon);
	}

	contactContainer.appendChild(socialContainer);

	return contactContainer;
}

export default generateContact;
