'use strict'

let circle = document.querySelector('.car__circle'),
	carImages = document.querySelectorAll('.car__circle img'),
	startCoordX, curImg = 0;

circle.addEventListener('pointerdown', startToMonitor);

function startToMonitor(event) {
	startCoordX = event.x;
	circle.addEventListener('pointermove', monitorMouse);
	circle.addEventListener('pointerup', () => circle.removeEventListener('pointermove', monitorMouse));
	event.preventDefault();
}

function monitorMouse(event) {
	let x = event.x;
	if (Math.abs(x - startCoordX) < 5) return;
	carImages[curImg].hidden = 'true';
	carImages[curImg].classList.remove('car__show');
	if (x - startCoordX > 5) {
		curImg = (curImg + 1) % 52;
		carImages[curImg].hidden = '';
	} else {
		curImg = (curImg) ? (curImg - 1) % 52 : 51;
		carImages[curImg].hidden = '';
	}
	startCoordX = x;
}