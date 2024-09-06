function openModal() {

let modalBtns = document.querySelectorAll('button[id^="modal-btn');
let modalWindow = document.getElementById('modal-window');
let closeModalWindow = document.getElementById('close-modal-window');

for(let modalBtn of modalBtns) {
	modalBtn.addEventListener('click', function() {
		modalWindow.classList.add('open'); // Открыть модалку
	})
};

closeModalWindow.addEventListener('click', function() {
	modalWindow.classList.remove('open') //Закрыть крестиком
});

modalWindow.addEventListener('keydown', event => {
	if (event.key === "Escape" || event.keyCode === 27) {
		modalWindow.classList.remove('open') //Закрыть Esc
	}
});

document.querySelector('#modal-window .form__request').addEventListener('click', e => {
	e._isClickWithInModal = true;
});
modalWindow.addEventListener ('click', e => {
	if (e._isClickWithInModal) return;
	e.currentTarget.classList.remove('open');
});  //Закрыть при клике вне

}

export default openModal;