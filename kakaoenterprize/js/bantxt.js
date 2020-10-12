$(document).ready(function() {
	ani();
    $(window).scroll(function(){
	
        // var scTop = $(window).scrollTop();           
        // if(scTop>=10) {
        //     $("#gnb").css("backgroud","white");
        // } else {
        //     $("#gnb").removeClass("on");
        // }
	
	//window, document, history, location, navigator, this, 그 밖의 사용자 정의 객체는 ""가 붙지 않음
	//$("선택자").메서드(인수);
	//$(객체).메서드(인수);
	//$("선택자").메서드(function() { 실행문장; });
	//$(객체).메서드(function() {실행문장;});
	//$("선택자").메서드(인수).메서드().메서드();
	//$(객체).메서드(인수).메서드().메서드();
	
	
	//var 변수명 = 초기값;  ----- 변수 정의
	//function 함수명(매개변수1, 매개변수2) { 실행문장; } --- 함수정의
	//var 함수명 = function() { 실행문장; }  ----- 함수 정의
	//함수명();  ------함수 호출
	
	//var wd = parseInt($(window).width());  //전역변수
		function ani() { //ani 함수 정의
			
	
			$(".anibox1").animate({"margin-left":"400px"},2000,function(){
				$(".anibox1").css("opacity","0");
				if($(".anibox1").not(":animated")) { $(".anibox2").animate({"margin-left":"400px"},2000, function(){
					$(".anibox2").css("opacity",0);
					if($(".anibox2").not(":animated")) { $(".anibox3").animate({"margin-left":"400px"},2000, function(){
						$(".anibox3").css("opacity",0);
						if($(".anibox3").not(":animated")) { $(".anibox4").animate({"margin-left":"400px"}, 2000, function(){
							$(".anibox4").css("opacity",0);
							if($(".anibox4").not(":animated")) { $(".anibox5").animate({"margin-left":"400px"},2000, function(){
								$(".anibox5").css("opacity",0);
									}); }
							}); }
						}); }
					}); }
				}); 
			//			$(".video_tit").css("opacity","1").animate({"margin-left":"0px"},1);
//			$(".anibox1").not(":animated").animate({"margin-left":"400px"}, 3000, function(){
//				$(".anibox1 li").eq(0).appendTo($(".anibox"));
//				$(".anibox1").css("opacity","0");
//					$(".anibox2").not(":animated").animate({"margin-left":"400px"}, 3000, function(){
//						$(".anibox2 li").eq(0).appendTo($(".anibox"));
//						$(".anibox2").css("opacity","0");
//							$(".anibox3").not(":animated").animate({"margin-left":"400px"}, 3000, function(){
//							$(".anibox3 li").eq(0).appendTo($(".anibox"));
//							$(".anibox3").css("opacity","0");
//								$(".anibox4").not(":animated").animate({"margin-left":"400px"}, 3000, function(){
//								$(".anibox4 li").eq(0).appendTo($(".anibox"));
//								$(".anibox4").css("opacity","0");
//									$(".anibox5").not(":animated").animate({"margin-left":"400px"}, 3000, function(){
//									$(".anibox5 li").eq(0).appendTo($(".anibox"));
//									$(".anibox5").css("opacity","0");
//									
//									});
//				
//								});
//							});
//					});
//					
//				});
//		
			
			
			}
			
				
			
			
			//$("선택자").not(":animated").animate({"css속성","css 값"}, 밀리초 단위 시간, function(){애니메이션이 끝나고 해야할 일;} );
			//$("선택자").not(":animated").animate({"css속성","css 값"}, 밀리초 단위 시간); 으로 써도됨, 뒤에 할 일이 없다면
	
		
	//setInterval(function() {해야할일;}, 밀리초단위의 주기시간);  -- 지정한 시간마다 주기적으로 실행
	//var 인터발변수 = 인터발선언문 ~~~~;  --- 필요시 인터발 해제하기 위해  인터발 변수가 필요함
	let intv = setInterval(function(){
		ani(); 	// 함수 호출
		}, 3000);  //3000은 ms로 3초를 뜻함.

});
});