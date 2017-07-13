$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#fff', '#fff', '#fff', '#806F80'],
		anchors: ['about', 'currently', 'past-projects', 'contacts'],
		menu: '#menu',
		navigation: true,
		navigationPosition: 'right',
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		responsiveSlides: true,
		responsiveWidth: 768
	});
});