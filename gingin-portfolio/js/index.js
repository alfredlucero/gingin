$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#B8D5D9', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#D8D8D8'],
		navigation: true,
		navigationTooltips: ['Home', 'About Me', 'Currently', 'Past Projects', 'Edu/Orgs', 'Reach Out', 'Contact'],
		responsiveWidth: 1024
	});

	// Wrap every letter in a span
$('.home-title').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.home-title .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1500,
    delay: function(el, i) {
      return 30 * i;
    }
  });
});