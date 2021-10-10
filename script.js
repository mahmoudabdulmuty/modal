'use strict';

const showModalBtns = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const show = () => {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const close = () => {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

showModalBtns.forEach(btn => {
	btn.addEventListener('click', show);
});

closeModal.addEventListener('click', close);

overlay.addEventListener('click', close);

document.addEventListener('keydown', e => {
	e.key === 'Escape' ? close() : show();
});
