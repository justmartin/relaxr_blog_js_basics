$(document).ready(function() {

	$('.readmore').click(readMoreText);
	$('.readless').click(readLessText);
	$('.learnmore').click(learnMoreText);
	$('a').click(preventLinkJump);

	function preventLinkJump(event) {
	  event.preventDefault();
	}

	function readMoreText(){
		$('.readmore').hide();
		$('#show-this-on-click').slideDown();
		$('.readless').show();
	}

	function readLessText(){
		$('.readless').hide();
		$('#show-this-on-click').slideUp();
		$('.readmore').show();
	}

	function learnMoreText(){
		$('.learnmore').hide();
		$('#learnmoretext').slideDown();
	}

});