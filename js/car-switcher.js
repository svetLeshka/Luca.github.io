'use strict'

let carMenuItems = document.querySelectorAll('.car__menu div'),
	carWrapperElements = document.querySelectorAll('.car__wrapper > div');

carMenuItems.forEach((elem) => elem.addEventListener('click', switchCar));

function switchCar(event) {
	let elem = event.target;
	if (elem.classList.contains('car__menu-item-active')) return;
	let carWrapper = document.querySelector('.car__wrapper'),
		index = +elem.dataset.index,
		curShownCar = document.querySelector('.car__show'),
		curActiveMenuItem = document.querySelector('.car__menu-item-active');

	curShownCar.classList.remove('car__show');
	curShownCar.classList.add('car__hide');
	curActiveMenuItem.classList.remove('car__menu-item-active');
	curActiveMenuItem.classList.add('car__menu-item-passive');

	carWrapper.style.left = index * (-100) + '%';
	carWrapperElements[index].classList.remove('car__hide');
	carWrapperElements[index].classList.add('car__show');
	carMenuItems[index].classList.remove('car__menu-item-passive');
	carMenuItems[index].classList.add('car__menu-item-active');

	if (index == 3) {
		let statisticsBars = document.querySelectorAll('.car__overview-statistics p');
		statisticsBars[0].classList.add('car__overview-first-sidebar');
		statisticsBars[1].classList.add('car__overview-second-sidebar');
		statisticsBars[2].classList.add('car__overview-third-sidebar');
	}
}