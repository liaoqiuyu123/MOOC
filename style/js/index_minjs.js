/**
 * Created by sjw on 2016/7/14.
 */
window.onload =function(){
	$(".nav_list li").eq(0).find('a').css('background-color','#003366');
	$(".nav_list li").click(function(){
		$(".nav_list li a").css('background-color','transparent');
		$(".nav_list li").eq($(this).index()).find('a').css('background-color','#003366');
	})

	/*---课程图片轮播部分---*/
	var banner_min = 1;
	var times_min = setInterval(poxMin,2000);
	function poxMin(){
		if (banner_min >= $('.course_figure_min ul li').length)
			banner_min = 0;
		$(".course_figure_min img").css('display','none').eq(banner_min).css('display','block');
		$("#round_min li").css('color','#ffffff').eq(banner_min).css('color','#0066cc');
		$(".course_inform_min ul li").css('background-color','#f4f4f4').find('p').css('color','#666666');
		$(".course_inform_min ul li").eq(banner_min).css('background-color','#0066cc').find('p').css('color','#fff');
		$(".course_inform_min ul li em").css('border-style','dashed dashed dashed none').css('border-color','transparent transparent transparent transparent');
		$(".course_inform_min ul li em").eq(banner_min).css('border-style','dashed dashed dashed solid').css('border-color','transparent transparent transparent #fefefe');
		$(".course_inform_min ul li a").css('border-left-style','solid');
		$(".course_inform_min ul li a").eq(banner_min).css('border-left-style','none');
		$(".course_content").css('display','none').eq(banner_min).css('display','block');
		if(banner_min == 0){
			$(".course_inform1").css('border-top','2px solid #0053a5').css('padding-top','0');
		}else{
			$(".course_inform1").css('border-top-style','none').css('padding-top','2px');
		}
		banner_min++;
	}

    $(".course_figure_min ul li").eq(0).css('color','#0066cc');
    $(".course_inform_min ul li").eq(0).css('background-color','#0066cc').find('p').css('color','#fff');
	$(".course_inform_min ul li em").eq(0).css('border-style','dashed dashed dashed solid').css('border-color','transparent transparent transparent #fefefe');
	$(".course_inform_min ul li a").eq(0).css('border-left-style','none');
	$(".course_inform_min ul li").eq(0).find('a').css('border-top','2px solid #0053a5').css('padding-top','0').css('height','112px');
    $(".course_content").css('display','none').eq(0).css('display','block');

    $("#round_min li").hover(function(){
		clearInterval(times_min);
		$(".course_inform_min ul li").css('background-color','#f4f4f4');
		$(".course_inform_min ul li").eq($(this).index()).css('background-color','#0066cc');
          $(".course_figure_min ul li").css('color','#fff');
		    $(".course_figure_min ul li").eq($(this).index()).css('color','#0066cc');
		$(".course_inform_min ul li em").css('border-style','dashed dashed dashed none').css('border-color','transparent transparent transparent transparent');
		$(".course_inform_min ul li a").css('border-left-style','solid');
		$(".course_inform_min ul li").css('background-color','#f4f4f4').find('p').css('color','#666666');
		$(".course_inform_min ul li").eq($(this).index()).css('background-color','#0066cc').find('p').css('color','#fff');
		$(".course_inform_min ul li em").eq($(this).index()).css('border-style','dashed dashed dashed solid').css('border-color','transparent transparent transparent #fefefe');
		$(".course_inform_min ul li a").eq($(this).index()).css('border-left-style','none');
		$(".course_inform_min ul li").eq($(this).index()).find('p').css('color','#fff');
		if($(this).index()==0){
			$(".course_inform1").css('border-top','2px solid #0053a5').css('padding-top','0');
		}else{
			$(".course_inform1").css('border-top-style','none').css('padding-top','2px');
		}
		},
			function () {
				banner_min = $(this).index()+1;
				times_min = setInterval(poxMin,1000);

			}
	);
    $(".course_inform_min ul li").hover(function(){
		clearInterval(times_min);

		$(".course_figure_min img").css('display','none').eq($(this).index()).css('display','block');
		$(".course_content").css('display','none').eq($(this).index()).css('display','block');
		$("#round_min li").css('color','#ffffff').eq($(this).index()).css('color','#0066cc');
		$(".course_inform_min ul li").css('background-color','#f4f4f4').find('p').css('color','#666666');
		$(".course_inform_min ul li").eq($(this).index()).css('background-color','#0066cc').find('p').css('color','#fff');

		$(".course_inform_min ul li em").css('border-style','dashed dashed dashed none').css('border-color','transparent transparent transparent transparent');
		$(".course_inform_min ul li em").eq($(this).index()).css('border-style','dashed dashed dashed solid').css('border-color','transparent transparent transparent #fefefe');
		$(".course_inform_min ul li a").css('border-left-style','solid');
		$(".course_inform_min ul li a").eq($(this).index()).css('border-left-style','none');
		$(".course_inform_min ul li").eq($(this).index()).find('p').css('color','#fff');
		if($(this).index()==0){
					$(".course_inform1").css('border-top','2px solid #0053a5').css('padding-top','0');
		}else{
			$(".course_inform1").css('border-top-style','none').css('padding-top','2px');
		}

        },
			function () {
				banner_min = $(this).index()+1;
				times_min = setInterval(poxMin,1000);
			}
	);

    
    //课程play JS
      $('.pic-span').css('display','none');
    
      $('.picc-top').css('display','none');
      $('.course_list_min li').hover(function(){
      $('.picc-top').css('display','none'); 
      $('.picc-top') .eq($(this).index()).css('display','block');
      $('.pic-span').css('display','none');
      $('.pic-span') .eq($(this).index()).css('display','block');
           
        
    },function(){
           $('.picc-top').css('display','none');
          $('.pic-span').css('display','none');
          
      });
      
    //logo 不被选中JS
        var picc=document.getElementById("picc_min");
picc.onselectstart = picc.ondrag = function(){
    return false;
}}
