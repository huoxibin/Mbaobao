$(document).ready(function(){
	$('.outline_input').focus(function(){
		$(this).css({
			'border-color':'#f00',
			'box-shadow':"0 0 5px rgba(200,0,0,.3)"
		})
	})
	$('.outline_input').blur(function(){
		$('.outline_input').css({
			'border-color':'#e1e1e1',
			'box-shadow':"0 0 5px #e1e1e1"
		})
	//接口
		
	

	})
	//手机号注册获取焦点：
	$('.login_main input').eq(0).focus(function(){
		$('.login_notice').html("请填写正确的手机号，并进行验证").css({'color':'#5C941F','text-indent':'0','background':'none'})
	})
	//手机号注册失去焦点：
	$('.login_main input').eq(0).blur(function(){
		var re=/^1\d{10}$/ //定义一个正则
		if(re.test($('.login_main input').eq(0).val())){
				/*var name=$('.login_main input').eq(0).val()
				$.ajax({
				url:"http://bokanappapi.sinaapp.com/HQNews/user/userregister.php",
				data:{username:name},
				dataType:'json',
				success:function(msg){
					console.log(msg);
					if(msg.code==400){
						$('.login_notice').html("此号码已注册 <a href='register.html' style='color:#5C941F'>直接登录？</a>").css({
						background:'url(../img/cha.png) no-repeat left 0','text-indent': '22px',color:'#D41C4F'
					})
					}else if(msg.code==200){
						$('.login_notice').html("").css({
						background:'url(../img/dui.png) no-repeat left 0'
					})
					}
				},
				error:function(err){
					alert('注册失败');
					console.log(err);
				}})*/
				
				$('.login_notice').html("").css({
				background:'url(../img/dui.png) no-repeat left 0'})
			
		}else{
			$('.login_notice').html('手机号码格式错误，请重新填写').css({'display':'block',background: 'url(../img/cha.png) no-repeat left 0','text-indent': '22px',color:'#D41C4F'})
		}
		
	})
	
	
	//
	/*$('.password').blur(function(){
		var $pw = $(this).val()
		re=/^[\w.]{6,20}$/;
		if(!re.test($pw)){
			$('#ifo_s2').removeClass('sTrue');
			$('#ifo_s2').addClass('sError');
			$('#ifo_s2').text('密码只能由6-20个字母、数字、或符号组成！')	
			$(this).addClass('bg');
			return con.b=0
		}else{
			$('#ifo_s2').removeClass('sError');
			$('#ifo_s2').addClass('sTrue');
			$('#ifo_s2').text('通过信息验证！')	
			$(this).removeClass('bg')
			return con.b=1
			
		}
	})*/
	
	$('.login_main input').eq(1).blur(function(){
		var $pw = $(this).val()
		re=/^\w{6,20}$/;
		if(!re.test($pw)){
			$('.login_notice1').text('密码只能由6-20个字母、数字、或符号组成！').css({
				background:'url(../img/cha.png) no-repeat left 0','text-indent': '22px',color:'#D41C4F'
			})
		}else{
			$('.login_notice1').text('').css({
				background:'url(../img/dui.png) no-repeat left 0'
			})
			
		}
	})
	
	
	
	
	
	
	$('.login_main input').eq(2).blur(function(){
		if($('.login_main input').eq(2).val()!=$('.login_main input').eq(1).val()){
			$('.login_notice2').text('两次密码不一致').css({
				background:'url(../img/cha.png) no-repeat left 0','text-indent': '22px',color:'#D41C4F'
			})
		}else{
			$('.login_notice2').text('').css({
				background:'url(../img/dui.png) no-repeat left 0'
			})
		}
	})
	
	
	$('#login_submit').click(function(){
	/*	var name=$('.login_main input').eq(0).val()
		var pwd=$(".psd").val()
	$.ajax({
		url:"http://bokanappapi.sinaapp.com/HQNews/user/userregister.php",
		data:{username:name,password:pwd},
		dataType:'json',
		success:function(msg){
			console.log(msg);
			if(msg.code==400){
				alert('用户名已经存在')
			}else if(msg.code==200){
				alert('注册成功');
				window.location='../index.html';
			}
		},
		error:function(err){
			alert('注册失败');
			console.log(err);
		}
	})*/
	alert('注册成功');
	window.location='../index.html';
	})
	
});