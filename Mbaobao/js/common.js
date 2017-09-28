$(document).ready(function(){
	//content_top1->ul->img1
	$('#content_top_1 ul a').hover(function(){
		$('#content_top_1 ul a :first-child').hide()
		$('#content_top_1 ul a :last-child').show()
	},function(){
		$('#content_top_1 ul a :first-child').show()
		$('#content_top_1 ul a :last-child').hide()
	})
	//content_top2--选项卡
	$('#content_top_2 .hot_buy_main').clone(true,true).prependTo($('#hot_buy_main0 ')).css({
		position:'absolute',
		display:'none'
	}).clone(true).prependTo($('#hot_buy_main0')).css({
		position:'absolute',
		display:'none'
	})
	//<a href="">BESTINE 手提斜挎包</a><p><span>￥178</span><del> ￥268</del></p>
	$('.hot_buy_main ').eq(2).siblings().empty()
	var arr2l=['img/f1_1.jpg','img/f1_2.jpg','img/f1_3.jpg','img/f1_4.jpg']
	var arr3l=['img/f1_5.jpg','img/f1_6.jpg','img/f1_7.jpg','img/f1_8.jpg',]
	for (var i = 0; i < 4; i++) {
		$("<li><img src="+arr2l[i]+" /><a href=''>BESTINE 手提斜挎包</a><p><span>￥178</span><del> ￥268</del></p></li>").appendTo($('.hot_buy_main').eq(0))
		$("<li><img src="+arr3l[i]+" /><a href=''>BESTINE 手提斜挎包</a><p><span>￥178</span><del> ￥268</del></p></li>").appendTo($('.hot_buy_main').eq(1))
	}
	
	//alert($('#content_top_2 .hot_buy_main').length)
	$('.hot_buy_head a').hover(function(){
		$('.hot_buy_head a').css({
			background:'#fff',
			color:'#333'
		})
		$(this).css({
			background:'#333',
			color:'#fff'
			
		})
		$('#content_top_2 .hot_buy_main').hide().css({
			'z-index':10
		})
		//alert($(this).index())
		$('#content_top_2 .hot_buy_main').eq($(this).index()).show().css({
			'z-index':1000
		})
	})
	//-----------content_bottom_nav
	//var $ca='';
	/*for (var i = 0; i < 16; i++) {
	 var $ca+=$('.content_bottom1_content a').clone(true)
	}*/
	//$ca.appendTo($('.content_bottom1_content'))
	for (var i = 0; i < 4; i++) {
		$('.content_bottom1_content .fox').clone(true).appendTo($('.content_bottom1_content'))	
	}
//------------------右侧边栏导航----------------------------------------------------------------------------------
	$('.fd_side li a').hover(function(){
		$(this).css({
			background:'#fff',
			color:'#d41c50'
		})
		
	},function(){
		$('.fd_side li a').css({
			background:'#d41c50',
			color:'#fff'
		})
	})
	//
	$(window).scroll(function(){
		//console.log($('body').scrollTop())
		if($('body').scrollTop()>=300){
			//alert(122)
		$('.fd_side li:first').animate({opacity:1},20);
	}else{
		$('.fd_side li:first').animate({opacity:0},20);
	}
	})
	$('.fd_side li:first').click(function(){
		$('body').animate({scrollTop:0})
	})
//--------------------------------------轮播图-淡入淡出----------------------------------------------------------------
	//animate({opacity:0},1000).next().animate({opacity:1},1000)
	//$('#banner_tap a:first').css({display:'block'}).siblings().css({display:'none'})
		var n=0;var timer=null;
		function video(){
			$('#banner_tap a').eq(n).fadeIn(2000).siblings().not('.three_bags0,ul,p').fadeOut(2000);
			$('#banner_tap li').eq(n).css({background: '#CA234F',border: '1px solid #CA234F'}).siblings().css({
				border: '1px solid #777',background:'#777'
			})
			n++;
			if(n>4){
				n=0
			}
		}
		timer=setInterval(video,2000)
	//滑动点击左右按钮p
	$('#banner_tap p').hover(function(){
		$(this).css({opacity:0.8})
		clearInterval(timer);
		timer=null;
	},function(){
		$('#banner_tap p').css({opacity:0.3})
	})
	//必须全局n
	$('#banner_tap .nav_left').click(function(){
		n--;
		if(n<0){n=4}
		$('#banner_tap a').eq(n).fadeIn(2000).siblings().not('.three_bags0,ul,p').fadeOut(2000)
		$('#banner_tap li').eq(n).css({background: '#CA234F',border: '1px solid #CA234F'}).siblings().css({
				border: '1px solid #777',background:'#777'
			})
	})
	$('#banner_tap .nav_right').click(function(){
		n++;
		if(n>4){n=0}
		$('#banner_tap a').eq(n).fadeIn(2000).siblings().not('.three_bags0,ul,p').fadeOut(2000);
		$('#banner_tap li').eq(n).css({background: '#CA234F',border: '1px solid #CA234F'}).siblings().css({
				border: '1px solid #777',background:'#777'
			})
	})
	//--------鼠标滑动上就会停止定时器
	$('#banner_tap a').hover(function(){
		clearInterval(timer);
		timer=null;
	},function(){
		timer=setInterval(video,2000)
	})
	//---------滑动小圆点时候
	$('#banner_tap li').hover(function(){
		$('#banner_tap a').eq($(this).index()).fadeIn(1000).siblings().not('.three_bags0,ul,p').fadeOut(1000);
		$(this).css({background: '#CA234F',border: '1px solid #CA234F'}).siblings().css({
				border: '1px solid #777',background:'#777'
			})
		clearInterval(timer);
		timer=null;
	})
//---------------------------以上是轮播图-----------以下是右侧浮动的3p--------------------------------------------
	$('.three_bags img').hover(function(){
		$('.three_bags img').css({opacity:0.5,cursor:'pointer'})
		$(this).css({opacity:1})
	},function(){
		$('.three_bags img').css({opacity:1})
	})
//------------------------以下是floor楼梯------ajax请求json数据--------------------------------------------------------------------------
	$.get("data/floor.json",function(json){
		var arr=json.floor1_img_src.split(" ");
		var arr1=json.floor_float_right.split(",");
		var arr2=json.floor_float_bottom.split(",");
		//alert(arr1[1])
			var floor1="";
			floor1="<div class='floor_main_top'>"+
					"<div class='floor_float_right'>"+
						"<a href=''>"+arr1[0]+"</a>"+
						"<a href=''>"+arr1[1]+"</a>"+
						"<a href=''>"+arr1[2]+"</a>"+
					"</div>"+
					"<div class='floor_main_top_l left'><img src="+arr[0]+" /><a href='#'>进入新品频道>></a></div>"+
					"<div class='thisMon' style='display:block'><div class='floor_main_top_c left'><img src="+arr[1]+" /></div>"+
					"<div class='floor_main_top_r left'>"+
					"</div></div><div class='thisMon thisMon2' style='border-right:1px solid #f2f2f2'><img src='img/thismonth2.png'></div><div class='thisMon thisMon2'><img src='img/mk952-440.jpg'></div>"+
				"</div>"+
				"<ul class='floor_main_bottom'>"+
				"</ul>"
		$(floor1).appendTo($('.floor_first'));
		for (var i = 2; i <7 ; i++) {
			var oA="<a href=''><img src="+arr[i]+" /></a>"
			$(oA).appendTo($('.floor_main_top_r'))
		}
		for (var i = 0; i < arr2.length; i++) {
			var oB="<a href=''><img src="+arr2[i]+" /></a>"
			$(oB).appendTo($('.floor_main_bottom'))
		}
		var $f_info=$("<div><p>DUDU</p><p>抽绳小包时代单肩斜挎包</p><p><b>￥298</b> <del>￥528</del></p></div>")
		$f_info.appendTo($('.floor_main_bottom a'))
//-------------------选项卡a----hover------------------------------
		$('.floor_first .floor_float_right a:first').css({background:'#333',color:'#fff'})
		$('.floor_first .floor_float_right a').hover(function(){
			$('.floor_first .floor_float_right a').css({background:'#fff',color:'#333'})
			$(this).css({background:'#333',color:'#fff'})
		})
//-------------------floor1选项卡-------------------------------
	$('.thisMon2 img').css({
		width:"956px",
		height:'441px'
	})
	$('.floor_float_right a').hover(function(){
		$('.thisMon').css('display','none')
		$('.thisMon').eq($(this).index()).css('display','block')
	},function(){
		$('.thisMon').eq(0).css('display','block')
	})
//---------------左边图片滑动--移动-------------------		
	$('.floor_main_top_l img').hover(function(){
		$(this).animate({left:-5},200)
	},function(){
		$(this).animate({left:0},200)
	})
	

	
	$('.floor_main_bottom a img').hover(function(){
		$(this).animate({left:-5},200)
	},function(){
		$(this).animate({left:0},200)
	})
	
	$('	.floor_main_top_r a img').hover(function(){
		$(this).animate({left:-5},200)
	},function(){
		$(this).animate({left:0},200)
	})
//===================thisMon==定时器===============================
	
	var floor2='';
		floor2="<div class='floor_main_top2'>"+
					"<div class='floor_float_right2'></div>"+
					"<div class='floor_main_top_l2 left'><img src='"+json.floor2.img1_src+"' /><a href='#'>进入女包时尚馆>></a></div>"+
					"<div class='floor_main_top_r2 left'>"+
						"<div class='floor2_top'><div class='floor2_top_l left'><img src='img/710-360cat.jpg'/></div><div class='floor2_top_r left'><p>热卖品牌</p></div></div>"+
						"<div class='floor2_bottom'></div></div>"+
				"</div>"+
					"<ul class='floor_main_bottom2'>"+
					"</ul>"
		$(floor2).appendTo($('.floor_second'));		
		$("<a href=''>查看更多>></a>").appendTo($('.floor_float_right2'));
		
		for (var i = 0; i < arr2.length; i++) {
			var oB2="<a href=''><img src="+arr2[i]+" /></a>"
			$(oB2).appendTo($('.floor_main_bottom2'))
		}
		
		var $f_info2=$("<div><p>DUDU</p><p>抽绳小包时代单肩斜挎包</p><p><b>￥298</b> <del>￥528</del></p></div>")
		$f_info2.appendTo($('.floor_main_bottom2 a'))
		
		for(var x in json.floor2.hot_sell){
				var $sell=$("<a href=''><img src='"+json.floor2.hot_sell[x]+"' /><span>ENVIROSAX</span></a>")
				$sell.appendTo($('.floor2_top_r '))
		}
		
		for(var x in json.floor2.three_pic){
			var $three_pic=$("<a href=''><img src='"+json.floor2.three_pic[x]+"' /></a>")
			$three_pic.appendTo($('.floor2_bottom '))
		}
		
//--女包图片		
	$('.floor_main_top_l2 img').hover(function(){
		$(this).animate({left:-5},200)
	},function(){
		$(this).animate({left:0},200)
	})
	
	$('.floor2_top_r a').eq(1).css('border-right','none')	
	$('.floor2_top_r a').eq(5).css('border-right','none')	
	$('.floor2_top_r a').eq(3).css('border-right','none')	
	$('.floor2_top_r a').eq(6).css('border-bottom','none')	
		
	$('.floor2_top_r a img').hover(function(){
		$(this).animate({left:-5},200)
	},function(){
		$(this).animate({left:0},200)
	})	
	
	$('.floor_main_bottom2 a img').hover(function(){
		$(this).animate({left:-5},200).parent().siblings().css({
			opacity:0.2,
			border:0
			//'border-color':'#fff'
			//background:'#ccc'
		})
	},function(){
		$(this).animate({left:0},200)
		$('.floor_main_bottom2 a img').parent().css({
			opacity:1,
			//background:'#fff',
			'border-color':'#dcdcdc'
		})
	})
	$('.floor_main_bottom2 a img').parent().css('border',0)
	$('.floor_main_bottom2 a img').parent().parent().css('border-right','1px solid #dcdcdc')
	
	$('.floor2_bottom a img').hover(function(){
		$('.floor2_bottom a img').css({'opacity':0.5,'border':'none'})
		$(this).css({'opacity':1,'border':'1px solid #cdcdcd'})
	},function(){
		$('.floor2_bottom a img').css({'opacity':1,'border':'none'})
	})
//-------------------下面进行clone楼层的操作-----------------------------		
	/*$('.floor_second').clone().appendTo($('.floor_three'))	
	$('.floor_three').clone(true).appendTo($('.floor_fou'))
	$('.floor_fou').clone().appendTo($('.floor_fiv'))	
	$('.floor_fiv').clone(true).appendTo($('.floor_six'))	
	$('.floor_six').clone().appendTo($('.floor_sev'))	
	$('.floor_sev').clone(true).appendTo($('.floor_eig'))	
	$('.floor_eig').clone().appendTo($('.floor_nin'))	
	//alert($('.floor_nav ul  a').length)*/
	$('.floor_nav li').hover(function(){
			//注意隔着一层孙元素拿不到index()只能拿到0  alert($(this).index())
			
			$('.floor_nav ul li a').css({
				background: '#fff',
				color:'#333'
			})
			$('.floor_nav ul li a').eq($(this).index()).css({
				background: '#D41C50',
				color:'#fff'
			})
			$('.floor_nav ul i').eq($(this).index()).css({
				border:'1px solid #fff',
				color:'#D41C50',
				background:'#fff'
			})	
		},function(){
			$('.floor_nav ul  a').css({
				background: '#fff',
				color:'#333'
			})
			$('.floor_nav ul li  i').css({
				border:'1px solid #999',
				color:'#fff',
				background:'#999'
			})
	})
	//楼层导航显示动画 .floor_first offset().top<=100
	$(window).scroll(function(){
		if($('body').scrollTop()>=600){
			$('.floor_nav').animate({'opacity':1},30)
		}else{
			$('.floor_nav').animate({'opacity':0},30)
		}
	})
	//alert($('.floor_first').offset().top)
	$('.floor_nav li a').eq(0).click(function(){
		$('body').animate({scrollTop:$('.floor_first').offset().top-50},100)
	})
	$('.floor_nav li a').eq(1).click(function(){
		$('body').animate({scrollTop:$('.floor_second').offset().top-50},100)
	})
	$('.floor_nav li a').eq(2).click(function(){
		$('body').animate({scrollTop:$('.floor_three').offset().top-50},100)
	})
	$('.floor_nav li a').eq(3).click(function(){
		$('body').animate({scrollTop:$('.floor_fou').offset().top-50},100)
	})
	$('.floor_nav li a').eq(4).click(function(){
		$('body').animate({scrollTop:$('.floor_fiv').offset().top-50},100)
	})
	$('.floor_nav li a').eq(5).click(function(){
		$('body').animate({scrollTop:$('.floor_six').offset().top-50},100)
	})
	$('.floor_nav li a').eq(6).click(function(){
		$('body').animate({scrollTop:$('.floor_sev').offset().top-50},100)
	})
	$('.floor_nav li a').eq(7).click(function(){
		$('body').animate({scrollTop:$('.floor_eig').offset().top-50},100)
	})
	$('.floor_nav li a').eq(8).click(function(){
		$('body').animate({scrollTop:$('.floor_nin').offset().top-50},100)
	})
	//-------------------------------以上为index首页部分--------------------------------------------
	})//ajax

	//floor3
	$.get("data/floor2.json",function(json){
		var floor3="";
		floor3="<div class='floor_main_top3'>"+
					"<div class='floor_float_right3'><a href=''>查看更多>></a></div>"+
					"<div class='floor_main_top_l3 left'><img src='img2/"+json.f2.src1+"'/></div>"+
					"<div class='floor_main_top_r3 right'>"+
						"<img src='img2/2_1.jpg'/>"+
						"</div>"+
				"</div>"+
					"<ul class='floor_main_bottom2 floor3_bottom'>"+
					"</ul>"
		
		$(floor3).appendTo($('.floor_three'));
		$(floor3).appendTo($('.floor_fou'));	
		$(floor3).appendTo($('.floor_fiv'));	
		$(floor3).appendTo($('.floor_six'));	
		$(floor3).appendTo($('.floor_sev'));
		$(floor3).appendTo($('.floor_eig'));
		$(floor3).appendTo($('.floor_nin'));
	
	$(".floor_main_top_l3").css('border-right','1px solid #dcdcdc')
	
	$('.floor_main_top_l3 img').hover(function(){
		$(this).animate({width:'240px',height:'450px',left:'-5px',top:'-5px'},300).parent().css({
			border:'1px dashed #f00'
		})
	},function(){
		$(this).animate({width:'227px',height:'440px',left:'0',top:'0'},300).parent().css({
			border:'none'
		})
	})
	
	for(var i in json.f2.src3){
		
		$("<li><a href='###'><img src='img2/"+json.f2.src3[i]+"'/></a></li>").appendTo($('.floor3_bottom'))
	}
	var $f_info2=$("<div><p>DUDU</p><p>抽绳小包时代单肩斜挎包</p><p><b>￥298</b> <del>￥528</del></p></div>")
		$f_info2.appendTo($('.floor3_bottom a'))
	
	$('.floor3_bottom a').css({
		position:'relative',
		overflow:'hidden'
	})
	
	$("<div class='guang'></div>").appendTo($('.floor3_bottom a')).css({
		position:'absolute',
		width:'238px',
		height:'30px',
		background:'#f00',
		opacity:0.3,
		top:'-30px',
		'border-radius':'50%',
		left:'0px'
	})
	
	$('.floor3_bottom a').hover(function(){
		$('.guang').eq($(this).parent().index()).animate({top:277},1000,function(){
			$('.guang').css({
				top:'-30px'
			})
			//$('.guang').animate({top:257},200)
		})
	},function(){
		$('.guang').css({
				top:'-30px'
			})
	})
	
	
	
	
	
	})//ajax3








});