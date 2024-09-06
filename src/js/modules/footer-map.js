
function footerMap() {

	function init (ymaps) {
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
		}));
	
		map.controls.remove('geoLocationControl'); // удаляем поиск
		map.controls.remove('searchControl'); // удаляем поиск
		map.controls.remove('trafficControl'); // удаляем контроль трафика
		map.controls.remove('typeSelector'); // удаляем тип
		map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
		map.controls.remove('zoomControl'); // удаляем контрол зуммирования
		map.controls.remove('rulerControl'); // удаляем контрол правил
	};

let ymapsApiTimeout = false;                 
window.addEventListener('DOMContentLoaded', function() {
    if (ymapsApiTimeout === false) {
        ymapsApiTimeout = true;    
        setTimeout(() => {
			let script = document.createElement('script');
			var head = document.getElementsByTagName('head')[0]
         script.src = "https://api-maps.yandex.ru/2.1/?apikey=c7e59a09-e494-4853-9995-f10ce7c10525&load=Map,Placemark&lang=ru_RU";
			head.appendChild(script);       
			script.onload = function() {
				ymaps.ready(init);
			}
        }, 3000)
    }
});
}

export default footerMap;

