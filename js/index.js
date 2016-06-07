;$(function(){
	var oli1=$(".btl-2").find("li");
	var oli2=$(".btl-3").find("ul");
	var oli3=$(".btl-2").find("li").find("a");
	var oli4=$(".btl-3");
	oli1.on("mouseover",function(){
			var currentindex=$(this).index();
			oli4.css("display","block");
			oli1.eq(currentindex).css("background","rgb(228,71,21)");
			oli3.eq(currentindex).css("color","white");
	        oli2.eq(currentindex).css("display","block");
	        oli2.on("mouseover",function(){
		    var currentindex=$(this).index();
		    oli4.css("display","block");
		    oli1.eq(currentindex).css("background","rgb(228,71,21)");
			oli3.eq(currentindex).css("color","white");
		    oli2.eq(currentindex).css("display","block");
	        })
		})
	
	oli1.on("mouseout",function(){
		    var currentindex=$(this).index();
		    
		    oli1.eq(currentindex).css("background","white");
			oli3.eq(currentindex).css("color","rgb(102,102,102)");
	        oli2.eq(currentindex).css("display","none");
	        oli2.on("mouseout",function(){
		    var currentindex=$(this).index();
		    oli1.eq(currentindex).css("background","white");
			oli3.eq(currentindex).css("color","rgb(102,102,102)");
		    oli2.eq(currentindex).css("display","none");
		     oli4.css("display","none");
	        })
	})
$("#banner1").fade(526,3000,800);
$("._banner").on("mouseover",function(){
	$(".control").css("display","block");
})
$("._banner").on("mouseout",function(){
	$(".control").css("display","none");
})
if(getCookie(isLogin) == "true"){
		$("#user").html('<span>'+'Hi'+getCookie(myUserName)+'</span>|<span id="quit">退出</span>');
	}else{
		$("#user").html("<span>Hi,欢迎来到卡当网</span><a href='javascript:void(0)' id='_register'>登录</a><a href='javascript:void(0)' id='enroll'>注册</a>");
						
	}
	
	$("#quit").on("click",function(){
		updateCookie(isLogin,"false",5);
		window.location = "index.html";
	});
});
                var offset2=$(".main-bottom").offset().top;
                var offset = $(".bb-ul").offset().top;
				$(window).scroll(function(){
					var scrollTop = $(window).scrollTop();
					if(scrollTop >= parseInt(offset)&&scrollTop<=parseInt(offset2)){
						$(".bb-ul").addClass("fixed");
					}else{
						$(".bb-ul").removeClass("fixed");
					}
				})
				$(".bb-ul li").on("click",function(){
					var _index=$(this).index();
					var scrollH = $(".main>div").eq(_index).offset().top-50;
					$("html,body").animate({
						"scrollTop":scrollH
					},400);
				})
				   
//                 $(window).scroll(function(){
//						var sh = $(window).scrollTop();//获取到现在滚动条的高
//						var $obj = $(".main div.floor");
//						$obj.each(function(){
//							var index = $(this).index();
//							var h = $obj.eq(index).offset().top;
//							
//							if(sh > h){
//								$(".bb-ul li").removeClass("happy");
//								$(".bb-ul li").eq(index).addClass("happy");
//								return;
//							}
//						})
//						
//					})
//吸顶加楼梯效果
                    $(window).scroll(function(){
                    	var sh = $(window).scrollTop();//获取到现在滚动条的高
                    	var h1 = $("#main-1").offset().top-50;
                    	var h2 = $("#main-2").offset().top-50;
                    	var h3 = $("#main-3").offset().top-50;
                    	var h4 = $("#main-4").offset().top-50;
                    	var h5 = $("#main-5").offset().top-50;
                    		if(sh>=h1&&sh<=h2){
                    		$(".bb-ul .happy").css("background","#E44715");
                    		$(".bb-ul .happy").css("color","white");
                    		$(".bb-ul .happy2").css("background","white");
                    		$(".bb-ul .happy2").css("color","black");
                    		$(".bb-ul .happy3").css("background","white");
                    		$(".bb-ul .happy3").css("color","black");
                    		$(".bb-ul .happy4").css("background","white");
                    		$(".bb-ul .happy4").css("color","black");
                    		$(".bb-ul .happy5").css("background","white");
                    		$(".bb-ul .happy5").css("color","black");
                         
                    	}if(sh>=h2&&sh<=h3){
                    		$(".bb-ul .happy2").css("background","#E44715");
                    		$(".bb-ul .happy2").css("color","white");
                    		$(".bb-ul .happy").css("background","white");
                    		$(".bb-ul .happy").css("color","black");
                    		$(".bb-ul .happy3").css("background","white");
                    		$(".bb-ul .happy3").css("color","black");
                    		$(".bb-ul .happy4").css("background","white");
                    		$(".bb-ul .happy4").css("color","black");
                    		$(".bb-ul .happy5").css("background","white");
                    		$(".bb-ul .happy5").css("color","black");
                            
                    	}if(sh>=h3&&sh<=h4){
                    		$(".bb-ul .happy3").css("background","#E44715");
                    		$(".bb-ul .happy3").css("color","white");
                    		$(".bb-ul .happy").css("background","white");
                    		$(".bb-ul .happy").css("color","black");
                    		$(".bb-ul .happy2").css("background","white");
                    		$(".bb-ul .happy2").css("color","black");
                    		$(".bb-ul .happy4").css("background","white");
                    		$(".bb-ul .happy4").css("color","black");
                    		$(".bb-ul .happy5").css("background","white");
                    		$(".bb-ul .happy5").css("color","black");
                           
                    	}if(sh>=h4&&sh<=h5){
                    		$(".bb-ul .happy4").css("background","#E44715");
                    		$(".bb-ul .happy4").css("color","white");
                    		$(".bb-ul .happy3").css("background","white");
                    		$(".bb-ul .happy3").css("color","black");
                    		$(".bb-ul .happy").css("background","white");
                    		$(".bb-ul .happy").css("color","black");
                    		$(".bb-ul .happy2").css("background","white");
                    		$(".bb-ul .happy2").css("color","black");
                    		$(".bb-ul .happy5").css("background","white");
                    		$(".bb-ul .happy5").css("color","black");
                           
                    	} if(sh>=h5){
                    		$(".bb-ul .happy5").css("background","#E44715");
                    		$(".bb-ul .happy5").css("color","white");
                    		$(".bb-ul .happy4").css("background","white");
                    		$(".bb-ul .happy4").css("color","black");
                    		$(".bb-ul .happy").css("background","white");
                    		$(".bb-ul .happy").css("color","black");
                    		$(".bb-ul .happy3").css("background","white");
                    		$(".bb-ul .happy3").css("color","black");
                    		$(".bb-ul .happy2").css("background","white");
                    		$(".bb-ul .happy2").css("color","black");
                    	}
                    	
                    	
                    })
                $(".happy3").on("mouseover",function(){
                	$(".happy3").css("background","#E44715");
                	$(".happy3").css("color","white");
                })
                $(".happy3").on("mouseout",function(){
                	$(".happy3").css("background","white");
                	$(".happy3").css("color","black");
                })
                 $(".happy5").on("mouseover",function(){
                	$(".happy5").css("background","#E44715");
                	$(".happy5").css("color","white");
                })
                $(".happy5").on("mouseout",function(){
                	$(".happy5").css("background","white");
                	$(".happy5").css("color","black");
                })
                 $(".happy4").on("mouseover",function(){
                	$(".happy4").css("background","#E44715");
                	$(".happy4").css("color","white");
                })
                $(".happy4").on("mouseout",function(){
                	$(".happy4").css("background","white");
                	$(".happy4").css("color","black");
                })
                 $(".happy").on("mouseover",function(){
                	$(".happy").css("background","#E44715");
                	$(".happy").css("color","white");
                })
                $(".happy").on("mouseout",function(){
                	$(".happy").css("background","white");
                	$(".happy").css("color","black");
                })
                 $(".happy2").on("mouseover",function(){
                	$(".happy2").css("background","#E44715");
                	$(".happy2").css("color","white");
                })
                $(".happy2").on("mouseout",function(){
                	$(".happy2").css("background","white");
                	$(".happy2").css("color","black");
                })


$("#sl").on("click",function(){
	$(".songli").css("display","block");
})
$(".close").on("click",function(){
	$(".songli").css("display","none");
})
$(".talk").on("click",function(){
	$(".songli").css("display","none");
})

//window.onload=function(){
//	var _sg=document.getElementById("sg");
//	var _so=document.getElementById("so");
//			_sg.onmousedown=function(event){
//				var e=event||window.event;
//				e.preventDefault();
//				var _width=e.offsetX;
//				var _height=e.offsetY;
//				document.onmousemove=function(evt){
//					var ev=evt||window.event;
//					var x=ev.clientX;
//					var y=ev.clientY;
//					_so.style.top=(y-_height)+"px";
//					_so.style.left=(x-_width)+"px";
//				}
//				document.onmouseup=function(){
//					document.onmousemove=null;
//				}
//			}
//		}

$("#sc").click(function(){
	$(".shoucang").css("display","block");
})
$(".x1").click(function(){
	$(".shoucang").css("display","none");
})

$(".ter").on("focus",function(){
	$(".ter").html("");
})
$(".ter").on("blur",function(){
	$(".ter").html("如果您想咨询订单问题  请输入您的【订单号】，【希望解决的问题】及【联系方式】，我们看到了会第一时间回复您~");
})

//$(".txt2").on("focus",function(){
//	$(".txt2").value="";
//})
//$(".txt2").on("blur",function(){
//	$(".txt2").value="请输入：手机号码/QQ号码/邮箱地址";
//})
$("#hua").click(function(){
	$("#mask").css("display","block");
	$(".sk").css("display","block");
})
$(".xx").click(function(){
	$("#mask").css("display","none");
	$(".sk").css("display","none");
})







