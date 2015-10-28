$(document).ready(function() {

	$('.readmore').click(readMoreText);
	$('.readless').click(readLessText);
	$('.learnmore').click(learnMoreText);
	//$('a').click(preventLinkJump);

	/*
	function preventLinkJump(event) {
	  event.preventDefault();
	}
	*/

	function readMoreText(event){
		event.preventDefault();
		$('.readmore').hide();
		$('#show-this-on-click').slideDown();
		$('.readless').show();
	}

	function readLessText(event){
		event.preventDefault();
		$('.readless').hide();
		$('#show-this-on-click').slideUp();
		$('.readmore').show();
	}

	function learnMoreText(event){
		event.preventDefault();
		$('.learnmore').hide();
		$('#learnmoretext').slideDown();
	}

});