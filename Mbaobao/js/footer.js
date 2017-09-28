$(document).ready(function(){
	$('#footer_serve ul a:first-child').siblings().css('color','#999');
	$('#footer_serve ul a').hover(function(){
		$(this).css({
			'text-decoration':'underline',
			color:"#e61e56"
		})
	},function(){
		$('#footer_serve ul a').css('text-decoration','none')
		$('#footer_serve ul a:first-child').css('color','#333')
		$('#footer_serve ul a:first-child').siblings().css('color','#999');
	})
	$('.horor_1,.horor_2,.horor_8').hover(function(){
		$(this).css('text-decoration','underline')
	},function(){
		$('.horor_1,.horor_2,.horor_8').css('text-decoration','none')
	})
});