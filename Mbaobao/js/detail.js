$(function(){
	$('.show_small_pic li').hover(function(){
		$('.show_small_pic li img').eq($(this).index()).css({
			'border':'2px solid #d41c50'
		})
	},function(){
		$('.show_small_pic li img').css({
			'border':'1px solid #ccc'
		})
	})
	var n=10;
	$('.pic_operate .like').click(function(){
		n++
		$('.pic_operate em').eq(0).html("( "+n+" )")
	})
	var m=0;
	$('.pic_operate .unlike').click(function(){
		m++
		$('.pic_operate em').eq(1).html("( "+m+" )")
	})
	
	$('.goods_color a img').hover(function(){
		$(this).css('border','2px solid #d41c50')
	},function(){
		$('.goods_color a img').css('border','1px solid #dcdcdc')
	})
	//-----插入图片 details
	for (var i = 1; i < 22; i++) {
		$("<img src='../img/16090020g_"+i+".jpg'/>").appendTo($(".preview_wrap"))
	}
	//-----顶部吸页效果$('body').width() $('.detail_head_nav').width()
	//alert()
	console.log($('.goods_production').offset().top)
	//console.log($("body").scrollTop())
	$(window).scroll(function(e){
		if($("body").scrollTop()<=$('.goods_production').offset().top-30){
			$('.detail_head_nav').css({
				position:'absolute',
				top:$('.goods_production').offset().top-60+"px",
				left:($('body').width()-$('.detail_head_nav').width())/2,
				background:"none"
			})
		}else{
		$('.detail_head_nav').css({
				position:'fixed',
				top:'-30px',
				left:($('body').width()-$('.detail_head_nav').width())/2,
				background:"#fff"
			})
		}
	})
	//---goods放大镜效果
	$('.show_pic').hover(function(){
		$('.jing').css('display','block');
		$('.big_show').css('display','block').animate({opacity:1,left:490},1000)
		$('.fdsx').text('点击查看大图').css({
			'background-position':'190px center'
		})
	},function(){
		$('.jing').css('display','none')
		$('.big_show').css('display','none').animate({opacity:0,left:240},0)
		$('.fdsx').text('鼠标移至图片上可看放大图片').css({
			'background-position':'143px center'
		})
	})
	
	$('.show_pic').mousemove(function(e){
		var l=0;t=0;
		l=e.clientX-$('.jing').width()/2-$(this).offset().left;
		t=e.clientY+$('body').scrollTop()-$('.jing').height()/2-$(this).offset().top;
		l<=0?l=0:l;
		l>$(this).width()-$('.jing').width()?l=($(this).width()-$('.jing').width()):l;
		t<=0?t=0:t;
		t>$(this).height()-$('.jing').height()?t=($(this).height()-$('.jing').height()):t;
		$('.jing').css({
			left:l,
			top:t
		})
		$('.big_show').css({
			'background-position':-2.31*l+"px "+ -2.31*t+"px"
		})
	})
	
	//style="border: 2px solid #CA234F;"
	$('.goods_color a img').eq(0).css('border','2px solid #CA234F')
	//定义数组
	var arrpic=['../img/pic1.jpg','../img/pic2.jpg','../img/pic3.jpg','../img/pic4.jpg','../img/pic5.jpg','../img/pic6.jpg']
	
	$('.show_small_pic li').hover(function(){
		//$(this).css('border','2px solid #CA234F')
		//$(this).index()
		$('.show_pic img').attr('src',arrpic[$(this).index()])
		$('.big_show').css({
			background:' url('+arrpic[$(this).index()]+')'
		})
	})
	
	//设置cookie
	//var arr_coolie=["../img/shop_1.jpg","[麦包包(M Plus)]黑白涂鸦系列手提双肩背包",]
	//var src=src;
	$('.goods_buy_btn').click(function(){
		$.cookie("src","../img/shop_1.jpg",{path:'/',expires:14});
		$.cookie("goods_name1","[麦包包(M Plus)]黑白涂鸦系列手提双肩背包",{path:'/',expires:14});
		$.cookie("goods_name2","1609002201",{path:'/',expires:14});
		$.cookie("goods_price","￥199.00",{path:'/',expires:14});
		$.cookie("goods_count","￥199.00",{path:'/',expires:14});
	})
	//$.cookie("src")
	
	//load
	/*$('#header_detail').load('../header.html',function(){
					$(' .all_menu ').css('position','relative')
					$('<b></b>').appendTo($(' .all_menu ')).css({'position':'absolute',top:'15px',right:'20px','width':0,'height':0,'border-style':'solid','border-color':'#fff #ac143f #ac143f','font-size':0,'border-width':'4px','margin-left':'4px'
					})
					$('.firs').css({'background':'none',background:'url(img/H_top.png) right -465px no-repeat'})
				
					$(".menu .firs").hover(function(){
						$(this).css({'background': '#96193c'})
					},function(){
						$(".menu .firs").css('background','url(img/H_top.png) right -465px no-repeat')
					})
					
					$(' .all_menu ').hover(function(){
						$('.tab_nav').css('display','block')
					},function(){
						$('.tab_nav').css('display','none')
					})
					$(' .top_nav .webnav2 img ').remove()
					
				});//页头
				
		$('#footer_detail').load('../footer.html');*/
	
	
	
})
