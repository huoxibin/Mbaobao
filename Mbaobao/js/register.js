$(document).ready(function(){ //regis_input1
/*	$('.login_uesername').focus(function(){
		if($('.login_uesername').val("")){
	
			$('.ll_not p').css({
				display:'none'
			})
		}
	})
	
	$('.login_password').focus(function(){
		if($('.login_uesername').val("")){
	
			$('.ll_not p').css({
				display:'none'
			})
		}
	})*/
	
	$('.login_uesername').blur(function(){
		if($(this).val()!="13522895542"){
			
			$('.ll_not p').css({
				display:'block'
			})
		}else{
			$('.ll_not p').css({
				display:'none'
			})
			
		$('.login_password').blur(function(){
		if($(this).val()!="qaz123"){
			$('.ll_not p').text('密码错误').css({
					display:'block'
			})
		}else{
			$('.ll_not p').css({
				display:'none'
			})
		}
	})
		}
		
	})
	$('#regis_btn').click(function(){
		if($('.login_uesername').val()=="13522895542"&&$('.login_password').val()=="qaz123"){
			window.location='../index.html'
		}else{
			
		}
	})
});