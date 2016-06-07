// JavaScript Document
$(document).ready(function(){
	 
     var oStrong=document.getElementById("strong0");
	 var n1=oStrong.innerHTML;

	$(".btn1").click(function(){
	 n1--;
			if(n1<1){
			n1=1;
			}
			oStrong.innerHTML=n1;
			
		});

	$(".btn2").click(function(){
	 n1++;
			oStrong.innerHTML=n1;
		});
	
	
   });