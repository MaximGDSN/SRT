function examplesOpenDesc(){
	const openDesc = document.getElementsByClassName('examples__desc--open');
	const closeDesc = document.getElementsByClassName('examples__desc--close');
	const mainBlock = document.getElementsByClassName('examples__desc');

	for (var i=0 ; i<openDesc.length; i++) {
		openDesc[i].addEventListener("click", function(){
			mainBlock[0].style.left = '0';
			mainBlock[0].style.opacity = '1';
			openDesc[0].style.display = 'none';
		});
	}

	for (var i=0 ; i<closeDesc.length; i++) {
		closeDesc[i].addEventListener("click", function(){
			mainBlock[0].style.left = '-110%';
			mainBlock[0].style.opacity = '0';
			openDesc[0].style.display = 'block';

		});
	 }
	// openDesc.addEventListener('onclick', function() {
	// 	mainBlock.style.display = 'block';
	//  });
	// closeDesc.addEventListener('onclick', function() {
	// 	mainBlock.style.display = 'none';
	//  });
}

export default examplesOpenDesc;