(() => {
	const openMenu = document.querySelector('.header__box-burger')
	const closeMenu = document.querySelector('.header__nav-close')
	const headerNavigation = document.querySelector('.header__nav')

	openMenu.addEventListener('click', (event) => {
		headerNavigation.classList.add('active')
	})

	closeMenu.addEventListener('click', (event) => {
		headerNavigation.classList.remove('active')
	})
})();

(() => {
	const tabsItems = document.querySelectorAll('.tabs__links-item')
	const tabsContents = document.querySelectorAll('.tabs__contents-item')

	tabsItems.forEach((tab, index) => {
		tab.addEventListener('click', (event) => {
			tabsContents.forEach((content) => {
				content.classList.remove('active')
			})
			tabsItems.forEach((tab) => {
				tab.classList.remove('active')
			})

			tabsItems[index].classList.add('active')
			tabsContents[index].classList.add('active')
		})
	})
})();

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	spaceBetween: 40,
	grabCursor: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
});