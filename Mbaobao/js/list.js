$(document).ready(function(){
			$('#list_header').load('../header.html',function(){
					$(' .all_menu ').css('position','relative')
					$('<b></b>').appendTo($(' .all_menu ')).css({'position':'absolute',top:'15px',right:'20px','width':0,'height':0,'border-style':'solid','border-color':'#fff #ac143f #ac143f','font-size':0,'border-width':'4px','margin-left':'4px'
					})
					$(".menu .firs").css('background','url(img/H_top.png) right -465px no-repeat')
					$(".menu .firs").hover(function(){
						$(this).css({'background': '#96193c'})
					},function(){
						$(".menu .firs").css('background','url(img/H_top.png) right -465px no-repeat')
					})
					$(' .all_menu .tab_nav').css('display','none')
					$(' .all_menu ').hover(function(){
						$('.tab_nav').css('display','block')
					},function(){
						$('.tab_nav').css('display','none')
					})
			})
			$('#list_footer').load('../footer.html')
	
	//lihover
	function hoverLi(){
		$('.cont_list li').hover(function(){
			$(this).css({
				'box-shadow':'0 0 15px rgba(0,0,0,.3)'
			})
		},function(){
			$('.cont_list li').css({
				'box-shadow':'none'
			})
		})
	}
	//封装分页函数
	function list(json){
		var list="";
		for(var i in json){
			list="<li><a href='detail.html'><img src='../listimg/"+json[i].img_src+"' /> </a>"+
			"<div class='listbag_color'><a href=''><img src='../listimg/"+json[i].img_src_m.src_01+"'/></a><a href=''><img src='../listimg/"+json[i].img_src_m.src_02+"'/></a></div>"+
			"<p class='cont_list_name'><a href=''>"+json[i].txt+"</a></p>"+
							"<p class='list_price'><strong>"+json[i].price.pri_now+"</strong><del>"+json[i].price.pri_ori+"</del></p></li>"
		
			$(list).appendTo($('.cont_list'));
		}
	}
	//ajax
	$.get("../data/list.json",function(json){
	list(json)	
	hoverLi()
	//第二页
	$('.page_two').click(function(){
		$('.cont_list').empty();
		$.get('../data/list2.json',function(json){
		list(json)
		hoverLi()
		})
		$('.list_top b').html("2/3")
	})
	//首页
	$('.page_first').click(function(){
		$('.cont_list').empty();
		$.get('../data/list.json',function(json){
		list(json)
		hoverLi()
		})
		$('.list_top b').html("1/3")
	})
	//尾页 第三页
	$('.page_end').click(function(){
		$('.cont_list').empty();
		$.get('../data/list3.json',function(json){
		list(json)
		hoverLi()
		})
		$('.list_top b').html("3/3")
	})
	})
	
	//
	var onOff=true;
	$('.list_sider dt').click(function(){
		
		if(onOff){
			$(this).siblings().css('display','none');
			$(this).find('b').css('border-color',' #fff  #fff  #fff #666')
		}else{
			$(this).siblings().css('display','block');
			$(this).find('b').css('border-color',' #666 #fff  #fff  #fff')
		}
		onOff=!onOff;
	})
	
	//吸页
	console.log($('.list_top').offset().top);
	$(window).scroll(function(){
		if($('body').scrollTop()>=308){
			$('.list_top').css({
				position:'fixed',
				top:"-10px",
				background:"#dcdcdc",
				width:'988px'
			})
		}else{
			$('.list_top').css({
				position:'absolute',
				top:'308px',
				background:"#fff",
				width:'998px'
			})
		}
	})
	
	
	
	
});//