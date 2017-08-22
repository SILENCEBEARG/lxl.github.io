// JavaScript Document
;$(function(){
   'ues strict';

   var sidebar=$('#sidebar');
   // var mask=$('.mask');
   var sidebar_trigger=$('#sidebar_trigger'),
    	backButton=$('.back-to-top');

   sidebar_trigger.on('click',function(){
   	  $('.mask').fadeIn();
   	  sidebar.animate({right:"0"},300);   	  
   });
// sidebar_trigger -on触发多件事件分步写：
   /*
   sidebar_trigger.on('click',showbar)
   function showbar(){
   	  $('.mask').fadeIn();
   	  sidebar.animate({right:"0"},300);  
   }
   */

   	$('.mask').on('click',function(){
   	  $('.mask').fadeOut();
   	  sidebar.animate({right:-sidebar.width()},300);
   })
   	backButton.on('click', function(){
   		$('html,body').animate({scrollTop:0},800);			
	})
// .scrollTop()
	$(window).on('scroll',function(){
		if($(window).scrollTop()>$(window).height())
			backButton.fadeIn();
		else
			backButton.fadeOut();
	})
	$(window).trigger("scroll");

   
//姓名切换
   $('.logo').mouseover(function(){
      $(this).css('color','#ccc').html('求职岗位 | 前端攻城狮');
   }).mouseout(function(){
      $(this).html('刘晓玲');
   });
//侧边导航文字切换\
   $('.scroll-bar li').hover(function(){
      $(this).fadeTo(0,1)
   },function(){
      $(this).fadeTo(0,0.6);
   })
   $(".scroll-bar li").hover(function(){
      $(this).find("b").fadeToggle(200);
   })
//头像切换
   $('#home-pt').hover(function(){
      $(this).fadeTo(800,1);
      },function(){
         $(this).stop(true,false).fadeTo(800,0);
   });
// 技能明细切换
   $('.skill_icon').click(function(){
      $('.skill_int').each(function(){
         if($(this).is(':visible')){
            $(this).slideUp(300);
            $(this).prev().removeClass('skill_flag_scale');
         }
      });
      if($(this).siblings('.skill_int').is(':hidden')){
         $(this).siblings('.skill_int').slideDown(600);
         $(this).siblings('.skill_flag').addClass('skill_flag_scale');
      }else{
         $(this).siblings('.skill_int').slideUp(300);
         $(this).siblings('.skill_flag').removeClass('skill_flag_scale');
      }      
   })
// 图片轮播
   $("#exp_list_slide").width($(".exp_list").width());
   $("#exp_list_content").width($(".exp_list").width()*3);
   $("#exp_list_slide_content").mouseenter(function(){
      $("#exp_list_to").stop(true,false).fadeTo(700,1);
   }).mouseleave(function(){
      $("#exp_list_to").stop(true,false).fadeTo(700,0.1);
   });

   $(".time a").eq(0).addClass('clicked'); 
   //小圆点随之亮起
   var index=1;
   function showA(){
      $(".time a").eq(index-1).addClass('clicked').siblings().removeClass('clicked');
   }
   var page=1;   
   $(".time a").click(function(){
      $(this).addClass('clicked').siblings().removeClass('clicked');
      index=$(this).index()+1;
      $("#exp_list_content").stop(true,false).animate({marginLeft:-$(".exp_list").width()*$(this).index()},1000)             
      page=$(this).index()+1; 
   });
   //点击左箭头
   $("#exp_list_toleft").click(function(){
      if(!$("#exp_list_content").is(":animated")){
         if(page==1){
            $("#exp_list_content").animate({marginLeft:"+=50"},200,function(){
               $(this).animate({marginLeft:"-=50"},200);
            });
            return false;
         }  
         $("#exp_list_content").animate({marginLeft:"+="+$(".exp_list").width()});
         page--;
         index-= 1;
         showA();
      }
   });
   $("#exp_list_toright").click(function(){
      if (!$("#exp_list_content").is(':animated')) {         
         if (page==3) {
            $("#exp_list_content").animate({marginLeft:'-=50'},200,function(){
               $(this).animate({marginLeft:'+=50'},200);
            });
            return;
         };
         $("#exp_list_content").animate({marginLeft:"-="+$(".exp_list").width()});         
         page++;      
         index+= 1;
         showA();
      }
   });
      
//时光轴
var x=10;
var y=20;
$('.time a').mouseover(function(e){
   this.aa=this.title;
   this.title="";
   $("body").append("<div class='time_title'>"+this.aa+"</div>");
   $('.time_title').css({
      'top':(e.pageY+y)+'px',
      'left':(e.pageX+x)+'px',
   }).show('fast');   
}).mousemove(function(e){
   $('.time_title').css({
      'top':(e.pageY+y)+'px',
      'left':(e.pageX+x)+'px',
   });
}).mouseout(function(){
   this.title= this.aa;
   $('.time_title').remove();
}).click(function(){
      return false;
   });
//fullpage
   $('#dowebok').fullpage({
      scrollingSpeed:900,
      css3:true,
      resize:true,
      anchors:['page1','page2','page3','page4','page5'],
      verticleCentered:false,
      afterRender:function(){
         $('header').animate({opacity:'1'},1000,function(){
            // $('.main-wrapper').addClass('home_zoom'); 背景图缩放
            $('.inner').animate({marginTop:'120px'},function(){
               $("#home_info1").fadeIn(800,function(){
                  $('#home_info1').next().animate({width:'600'},1200,function(){                     
                     $('#home_info2').fadeIn(450,function(){
                        $(this).next().fadeIn(450,function(){
                           $(this).next().fadeIn(450,function(){
                                 $('.scroll-bar').fadeIn(450);
                                 $("header nav").css("background-color","rgba(255,255,255,0.1)");
                           });
                        });
                     });
                  });               
               });
            });            
         });
          $('.scroll-bar li').eq(0).addClass('selected');
      },
      afterLoad:function(anchorLink,index){
         if(index==1){
            $('.scroll-bar li').eq(0).addClass('selected').siblings().removeClass('selected');
         }
         
         if(index==2){
            $('.scroll-bar li').eq(1).addClass('selected').siblings().removeClass('selected');
            $('.about_info').addClass('active');
            $('.icon-grounp').animate({marginLeft:'30%'},800,function(){             
              $('.about_context').fadeIn(1000); 
            }); 
         }
         if(index==3){
            $('.scroll-bar li').eq(2).addClass('selected').siblings().removeClass('selected');
            $('.skill_info').addClass('active');
            $('.skill_list_content').addClass('skill_scale').fadeIn(1000,function(){
              $('.skill_context').fadeIn(1000); 
            });                   
         }
         if(index==4){
            $('.scroll-bar li').eq(3).addClass('selected').siblings().removeClass('selected');
            $('.about_info').addClass('active');
            
            $('.text-section').fadeIn(800) ;
         }
         if(index==5){
            $('.scroll-bar li').eq(4).addClass('selected').siblings().removeClass('selected');
            $('.contact_info').addClass('active');                       
            $('.contact_context').fadeIn(800); 
         }

      },

      onLeave:function(index,nextIndex,direction){
         if(index==2||index==4){
            $('.about_info').removeClass('active');
            $('.icon-grounp').animate({marginLeft:'0%'},500,function(){             
              $('.about_context').fadeOut(450); 
            });if(nextIndex==3){
               $('.icon-grounp').animate({marginLeft:'50%'},500);
            }
         };
         if(index==3){
            $('.skill_info').removeClass('active');
            $('.skill_list_content').fadeOut(450);
         };

         if(index==5){
            $('.contact_info').removeClass('active');
            $('.contact_context').fadeOut(450); 
         };
      },
   })
})
