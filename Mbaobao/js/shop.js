$(document).ready(function(){
	$('.list_footer_l input').focus(function(){
		$(this).css({
			'box-shadow':'0 0 5px rgba(220,0,0,.3)',
			border:'1px solid #fff'
		})
		$(this).val("")
	})
	$('.list_footer_l input').blur(function(){
		$(this).css({
			'box-shadow':'none',
			border:'1px solid #dcdcdc'
		})
	})
	function getMyCookie(src,name1,Name2,price,total){
		$('.shop_cart tbody').html("<tr>"+
							"<td><img src='"+src+"'></td>"+
							"<td><p>"+name1+"</p><p>"+Name2+"</p></td>"+
							"<td>"+price+"</td>"+
							"<td class='most'><a href='###' title='购买数量-1' class='remove'></a><input type='text' class='shop_text' value='1' /><a href='###' title='购买数量+1' class='add'></a></td>"+
							"<td class='count_cart'>"+total+"</td>"+
							"<td class='shop_del'><a herf='javascript:void(0);'>删除</a></td></tr>")
	//---shop 加的css样式
	$('.shop_cart tbody .shop_text').css({'width':'32px','font-size':'10px','text-align':'center'})
	$('.shop_cart tbody td p').css({
		'text-align':'left','font-weight':700
	})
	$('.shop_cart tbody td .remove').css({
		'display':'inline-block','width':'11px',height:'11px',background:'url(../img/jian.png)','position':'relative',left:'-5px',top:'1px'
	})
	$('.shop_cart tbody td .add').css({
		'display':'inline-block','width':'11px',height:'11px',background:'url(../img/jia.png)','position':'relative',left:'5px',top:'1px'
	})
	$('.shop_cart tbody  .count_cart').css({
		'font-size':'14px','font-weight':700,color:'#ed1c22','font-family':'arial'
	})
	
	
	
	$('.goods_num').text(1)
	$('.freight').text(10+".00")
	$('.price_total').text("￥"+199+".00")
	$('.goods_shoudPay').text("￥"+(199+10)+".00")
	var n=1;
	$('.shop_cart tbody td .add').click(function(){
		n++;
		if(n>=5){
			n=5;
			
			if($('.most .adp').length==0){
			$("<p style='color:#ed1c22' class='adp'>一次最多购买5件</p>").appendTo($('.most'))}
		}
		$('.shop_cart tbody .shop_text').val(n)
		$('.count_cart').text("￥"+199*n+".00")
		$('.goods_num').text(n)
		$('.price_total').text("￥"+199*n+".00")
		$('.goods_shoudPay').text("￥"+(199*n+10)+".00")
	})
	$('.shop_cart tbody td .remove').click(function(){
		n--;
		if(n<=1){n=1;}
		$('.most .adp').remove()
		$('.shop_cart tbody .shop_text').val(n)
		$('.count_cart').text("￥"+199*n+".00")
		$('.goods_num').text(n)
		$('.price_total').text("￥"+199*n+".00")
		$('.goods_shoudPay').text("￥"+(199*n+10)+".00")
	})
	//tfooter下得计算 以上 点击事件
	//点击出现付款按钮
	$("<div class='pay_button'><a href='http://www.mbaobao.com/truck/SubmitOrder.aspx'></a></div>").appendTo($('.shop_cart'))
	$('.pay_button').css({
		width:'930px',
		height:'60px',
		position:'relative'
	})
	$('.pay_button a').css({
		display:'block',
		width:'209px',
		height:'40px',
		background:"url(../img/topay.png) no-repeat ",
		position:'absolute',
		right:0,
		top:15
	})
	//点击删除
	$('.shop_del a').click(function(){
		$.cookie("src",null,{path:'/'})
		//$('.shop_cart tbody tr' ).eq($(this).parent().parent().index()).remove();
		//$(this).parent().parent().remove()
		if($('.shop_cart tbody tr').length==1){
		var shop="	<tr>"+
						"<td colspan='6'>"+
							"<div style='font: 16px tahoma;padding: 5px 0 10px;color: #666;width: 930px;'>"+
                                   " 您还没有挑选商品，赶快行动吧！<a href='../index.html' >马上去挑选商品>></a> "+
								"</div>"+
							"</td>"+
						"</tr>"
		$(shop).appendTo($('.shop_cart tbody'))
		}
		$('.goods_num').text('0')
		$('.freight').text(0+".00")
		$('.price_total').text("￥"+0+".00")
		$('.goods_shoudPay').text("￥"+0+".00")
		$(this).parent().parent().remove()
		$('.pay_button').remove()
	})
	}
		
	
//麦豆
$('.maidou input').blur(function(){
	$('.maidou input').val(" "+0)
})

//获取cookie
if($.cookie("src")){
	//$.cookie("src") $.cookie("goods_name1") $.cookie("goods_name2") $.cookie("goods_price") $.cookie("goods_count")
	getMyCookie($.cookie("src"),$.cookie("goods_name1"),$.cookie("goods_name2"),$.cookie("goods_price"),$.cookie("goods_count"))
	
	

}

	
	
	
	
});//