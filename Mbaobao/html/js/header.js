$(document).ready(function(){
	//-------------------------header表头---------------------------------------------
				$('.shop_car').hover(fb1,fb2);
				function fb1(){
					$('.shop_car b').css({
						top:'8px',
						'border-color':  '#f2f2f2 #F2F2F2 #e61e56'
					})
				}
				function fb2(){
					$('.shop_car b').css({
						top:'10px',
						'border-color':  '#666 #f2f2f2 #F2F2F2 '
					})
				}
				$('.top_nav').hover(fb3,fb4);
				function fb3(){
					$('.top_nav b').css({
						top:'8px',
						'border-color':  '#f2f2f2 #F2F2F2 #e61e56'
					})
				}
				function fb4(){
					$('.top_nav b').css({
						top:'10px',
						'border-color':  '#666 #f2f2f2 #F2F2F2 '
					})
				}
				//点击input
				$('#text1').val('搜索"双肩包"试试~')
				$('#text1').focus(function(){
					$('#text1').val('').css({
						background:'#fff'
					})
				})
				$('#text1').blur(function(){
					$('#text1').val('搜索"双肩包"试试~').css({
						background:'#f2f2f2'
					})
				})
				//header 划过a
				$('.header_c_nav a').hover(function(){
					$(this).css({
						'text-decoration':'underline'
					})
				},function(){
					$('.header_c_nav a').css({
						'text-decoration':'none'
					})
				})
		$('.menu a').not('.all_menu,.null,.phone').css({
					width:'64px',
					height:'35px'
				})
//--------------------tab_main------------------
for (var i = 0; i < $('.tab_nav dl').length; i++) {
	$('.tab_nav dl').eq(i).hover(function(){
		$('.tab_nav dl').animate({width:199},10).css({background:'#CA234F'})
		$(this).animate({width:225},10).css({background:'#333'})
		$('.mm').css('display','none')
		$('.mm').eq($(this).index()).css('display','block')
	},function(){
		$('.mm').css('display','none')
		$('.tab_nav dl').animate({width:199},10).css({background:'#CA234F'})
	})
}
	
$('.shop_car').hover(function(){
	$('#shop_main2').css('display','block')
},function(){
	$('#shop_main2').css('display','none')
})

$('.top_nav').hover(function(){
	$('.webnav2').css('display','block')
},function(){
	$('.webnav2').css('display','none')
})


});