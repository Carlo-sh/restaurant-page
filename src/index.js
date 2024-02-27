import './style.css';
import component from './home';
import { dishes, generateMenu } from './menu';
import { info, generateContact } from './contact';

const content = document.getElementById('content');
const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(t =>
	t.addEventListener('click', () => {
		content.innerHTML = '';
		if (t.textContent === 'Home') content.appendChild(component());
		if (t.textContent === 'Menu') content.appendChild(generateMenu());
		if (t.textContent === 'Contact') content.appendChild(generateContact());

		tabs.forEach(t => {
			if (t.classList.contains('tab-active')) t.classList.remove('tab-active');
			if (!t.classList.contains('tab-h')) t.classList.add('tab-h');
		});

		t.classList.add('tab-active');
		t.classList.remove('tab-h');
	}),
);

content.appendChild(component());
