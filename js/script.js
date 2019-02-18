$(document).ready(function() {
	$('.menu li').click(function(event){
		var item = ($(this).data('item'));
		// $('.iteMenu').removeClass('active');
		// $('#'+item).addClass('active');
		$('.iteMenu').css('display', 'none');
		$('#'+item).slideToggle(function(){
			$(this).addClass('active');
		});
	});
});