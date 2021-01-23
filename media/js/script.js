$(document).ready(function() {
	$(".slide").jCarouselLite({
		btnNext: '.side-slide > .radial > .seta.proximo',
		btnPrev: '.side-slide > .radial > .seta.anterior',
		visible: 1,
		auto: 3000,
		speed: 800,
	});
});