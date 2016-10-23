
function hold(){
document.getElementById('leftdrop').style.display = 'block';
document.getElementById('leftdrop').style.animationName = 'leftdrop_in';
};

function times(){
	document.getElementById('leftdrop').style.animationName = 'leftdrop_out';
};

function logo(){
	document.getElementById('logo').style.animation = 'opacity_out .5s 1';
};

$(document).ready(function(){
	$("#head").removeClass("default");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 30) {
			$("#head").addClass("default").fadeIn('fast');
		} else {
			$("#head").removeClass("default").fadeIn('fast');
		};
	});

	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});