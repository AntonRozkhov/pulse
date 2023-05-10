	// проверка поддержки webp, Добавление класса webp или -webp для Html
export function isWebp() {
	//  Проверка пожжержки -webp
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	//добавление класса _Webp  или _no-webp для HTML
	testWebp(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}