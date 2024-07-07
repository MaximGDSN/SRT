function footerMap() {
	function init() {
		const map = new ymaps.Map("footer-map", {
			center: [46.35790020343951,48.11805894084198],
			zoom: 16,
	
			behaviors: ['default', 'scrollZoom'],
		});
	
		map.geoObjects.add(new ymaps.Placemark([46.35874811776785, 48.116946222714496], {
				hintContent: 'Собственный значок метки',
				balloonContent: 'Мы на карте'
		}, {
			iconLayout: 'default#image',
			iconImageHref: './img/footer/location-map.svg',
			iconImageSize: [40, 40],
			iconImageOffset: [-25, -40]
		}))
	
		map.controls.remove('geoLocationControl'); // удаляем поиск
		map.controls.remove('searchControl'); // удаляем поиск
		map.controls.remove('trafficControl'); // удаляем контроль трафика
		map.controls.remove('typeSelector'); // удаляем тип
		map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
		map.controls.remove('zoomControl'); // удаляем контрол зуммирования
		map.controls.remove('rulerControl'); // удаляем контрол правил
	
		}
		ymaps.ready(init);	
}

export default footerMap;