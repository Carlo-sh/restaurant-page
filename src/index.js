import './style.css';
import component from './home';
import { dishes, generateMenu } from './menu';
import { info, generateContact } from './contact';

const content = document.getElementById('content');
const tabs = document.querySelectorAll('.tabs-btn');

tabs.forEach(t =>
	t.addEventListener('click', () => {
		content.innerHTML = '';
		if (t.textContent === 'Home') content.appendChild(component());
		if (t.textContent === 'Menu') content.appendChild(generateMenu());
		if (t.textContent === 'Contact') content.appendChild(generateContact());
	}),
);

content.appendChild(component());
