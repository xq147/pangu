var pics=new Array("banner01.jpg","banner02.jpg");
var index=0;
var time;

$(function(){	 
	autoRun();
	$("#banner").mouseover(function(){
		$("#banner .bannerLeft,#banner .bannerRight").show();		
		// clearInterval(time);//清除自动执行
	}).mouseout(function(){  	
		$("#banner .bannerLeft,#banner .bannerRight").hide();	
	});	
	
	$("#banner .bannerLeft").click(function(){	
		if(index<=0){
			index=pics.length+1;			
		}
		index--;		
		$(this).parent().css("background-image","url(images/"+ pics[index] +")");		
		$("#banner .banner-ul li").eq(index).addClass("banner-li");
		$("#banner .banner-ul li").eq(index).siblings().removeClass("banner-li");// 移除自己同级元素的样式	
	});
	
	$("#banner .bannerRight").click(changeImg);
	$("#banner ul li").click(function(){
		index=parseInt($(this).index());
		
		// alert($(this).index());
		// alert($(this).parent().parent().css("background-image","url(../images/"+ pics[index] +")")	);
		$(this).parent().parent().css("background-image","url(images/"+ pics[index] +")");		
		$("#banner .banner-ul li").eq(index).addClass("banner-li");
		$("#banner .banner-ul li").eq(index).siblings().removeClass("banner-li");
								   
	});

});

function changeImg(){
	if(index>=(pics.length-1)){
		index=-1;		
	}
	index++;		
	$("#banner").css("background-image","url(images/"+ pics[index] +")");	
	$("#banner ul li").eq(index).addClass("banner-li");
	$("#banner ul li").eq(index).siblings().removeClass("banner-li");
}
function autoRun(){
	time=setInterval("changeImg()",1000);
}