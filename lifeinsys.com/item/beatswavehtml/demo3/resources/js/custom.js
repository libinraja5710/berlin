"use strict";var windowElement=jQuery(window);var body=jQuery("body");var current_track=1;var current_slide=0;var slides_length=0;var prev_slide=0;var slideWidth=$("#popup-container").width()*0.8;var popup_images_arr=[];function getDuration(src){return new Promise(function(resolve){var audio=new Audio();$(audio).on("loadedmetadata",function(){resolve(audio.duration);});audio.src=src;});}
function playerItemEnd(){$('.play-mp3').show();$('.pause-mp3').hide();}
function changeSlide(){$("a.popup-image img").eq(0).attr('src',popup_images_arr[current_slide]);$("a.popup-image img").eq(2).attr('src',popup_images_arr[current_slide]);if(current_slide==0&&prev_slide==slides_length-1){$("#slides-container").stop(true,false).animate({'left':'-'+slideWidth*2+'px'},500,function(){$("a.popup-image img").eq(1).attr('src',popup_images_arr[current_slide]);$("#slides-container").css({'left':'-'+slideWidth+'px'})});}else if(prev_slide==0&&current_slide==slides_length-1){$("#slides-container").stop(true,false).animate({'left':'0px'},500,function(){$("a.popup-image img").eq(1).attr('src',popup_images_arr[current_slide]);$("#slides-container").css({'left':'-'+slideWidth+'px'})});}else if(prev_slide<current_slide){$("#slides-container").stop(true,false).animate({'left':'-'+slideWidth*2+'px'},500,function(){$("a.popup-image img").eq(1).attr('src',popup_images_arr[current_slide]);$("#slides-container").css({'left':'-'+slideWidth+'px'})});}else{$("#slides-container").stop(true,false).animate({'left':'0px'},500,function(){$("a.popup-image img").eq(1).attr('src',popup_images_arr[current_slide]);$("#slides-container").css({'left':'-'+slideWidth+'px'})});}
$("#popup-container li").filter(function(index){return index!=current_slide}).removeClass("active");$("#popup-container li").filter(function(index){return index==current_slide}).addClass("active");}
$(document).keydown(function(e){if($('#popup-container').css('display')=="block"){switch(e.which){case 37:$('.popup_left').trigger('click');break;case 39:$('.popup_right').trigger('click');break;case 27:$('#popup-container').trigger('click');break;default:return;}}
else if($('div.nav-menu').hasClass('active')){switch(e.which){case 27:$('.menu_icon').trigger('click');break;default:return;}}
else if($('div.search-bar').hasClass('active')){switch(e.which){case 27:$('.search_icon').trigger('click');break;default:return;}
e.preventDefault();}});function setTeamMemberHeight(){$('.music-banner').height($('.music-banner').width());$('.music-banner-image').height($('.music-banner-image').width());$('.news_bg_image').height($('.news_bg_image').width());}
windowElement.resize(function(){setTeamMemberHeight();});jQuery(function($){"use strict";$('.menu_icon').on('click',function(){$(this).toggleClass('active');$('.search_icon').removeClass('active');$('#header .nav-menu').toggleClass('active');$('#header .search-bar').removeClass('active');});$('.search_icon').on('click',function(){$(this).toggleClass('active');$('.menu_icon').removeClass('active');$('#header .search-bar').toggleClass('active');$('#header .nav-menu').removeClass('active');});if(windowElement.scrollTop()>20){$('.header-continer').addClass('active');}else{$('.header-continer').removeClass('active');}
windowElement.on('scroll',function(){if($(this).scrollTop()>20){$('.header-continer').addClass('active');}else{$('.header-continer').removeClass('active');}});$.fn.fullHeight=function(){var self=this;var windowHeight=window.innerHeight;var fullHeightFunction=function(){return self.css({'height':windowHeight});}
windowElement.on('resize',function(){windowHeight=window.innerHeight;fullHeightFunction();});fullHeightFunction();return self;}
$('.home #header').fullHeight();windowElement.on('scroll',function(){var st1=$(this).scrollTop();$("#header .bg_image").css({"background-position-y":(st1/3)});var st2=$(this).scrollTop();$("#on-tour .section_bg_image").css({"background-position-y":(-st2/20+100)});});var wow=new WOW({animateClass:'animated',offset:100});wow.init();$('.cd-testimonials-wrapper').flexslider({selector:".cd-testimonials > li",animation:"slide",controlNav:true,animationSpeed:400,smoothHeight:true,start:function(){$('.cd-testimonials').children('li').css({'opacity':1,'position':'relative'});}});plyr.setup({controls:['play','progress','current-time','duration','mute','volume']});$(body).on('click','#album-release button[data-plyr="play"]',function(){$('#album-release .plyr--playing button[data-plyr="pause"]').trigger('click');});$('.pause-mp3').hide();$('.play-mp3').on('click',function(){$('.play-mp3').show();$('.pause-mp3').hide();$(this).closest('.play-pause').find('svg').toggle();if($(this).closest('.music_line').index()!=current_track){$("#mp3_1").html("");$("#mp3_1").html('<audio controls class="audio1" onended="playerItemEnd()"><source src="'+$(this).closest('.play-pause').data('src')+'" type="audio/mpeg"></audio>');plyr.setup({controls:['play','progress','current-time','duration','mute','volume']});}
current_track=$(this).closest('.music_line').index();$("#mp3_1").find("button").eq(0).trigger("click");});$('.pause-mp3').on('click',function(){$('.pause-mp3').hide();$('.play-mp3').show();$("#mp3_1").find("button").eq(1).trigger("click");});$("body").on("click","#mp3_1 .plyr__controls button",function(){if($(this).data("plyr")=="play"){$("#playlist").find(".music_line").eq(current_track-1).find(".play-pause .play-mp3").hide();$("#playlist").find(".music_line").eq(current_track-1).find(".play-pause .pause-mp3").show();}else{$('.pause-mp3').hide();$('.play-mp3').show();}});$(document).on('ready',function(){var tracks_arr=[];$(".play-pause").each(function(){var that=$(this);getDuration($(this).data("src")).then(function(length){let duration=parseInt(length);let minutes=Math.floor(duration/60);let seconds=duration-minutes*60;if(seconds<10){seconds="0"+seconds;}
that.closest(".music_line").find(".plyr__time--duration").html(minutes+":"+seconds);});});});$(".anim_border").on("click",function(event){popup_images_arr=[];slides_length=$(".img_link").length;$("#slides-container").html("");$("#popup-container ul").html("");$.each($(".img_link"),function(index,value){popup_images_arr.push($(".img_link img")[index].src);});for(var i=0;i<popup_images_arr.length;i++){if(event.currentTarget==$(".anim_border")[i]){current_slide=i;}}
$("#slides-container").append("<a href=\"javascript:void(0)\" class=\"popup-image\"><img src="+popup_images_arr[current_slide]+"></a>");$("#slides-container").append("<a href=\"javascript:void(0)\" class=\"popup-image\"><img src="+popup_images_arr[current_slide]+"></a>");$("#slides-container").append("<a href=\"javascript:void(0)\" class=\"popup-image\"><img src="+popup_images_arr[current_slide]+"></a>");$("#slides-container").css('width',3*slideWidth+'px');$("a.popup-image img").css('width',slideWidth+'px');$("#slides-container").css({'left':'-'+slideWidth+'px'});windowElement.resize(function(){slideWidth=$("#popup-container").width()*0.8;$("#slides-container").css('width',3*slideWidth+'px');$("a.popup-image img").css('width',slideWidth+'px');$("#slides-container").css({'left':'-'+slideWidth+'px'});if(windowElement.width()<=767){slideWidth=$("#popup-container").width()*0.9;$("#slides-container").css('width',3*slideWidth+'px');$("a.popup-image img").css('width',slideWidth+'px');$("#slides-container").css({'left':'-'+slideWidth+'px'});}});if(windowElement.width()<=767){slideWidth=$("#popup-container").width()*0.9;$("#slides-container").css('width',3*slideWidth+'px');$("a.popup-image img").css('width',slideWidth+'px');$("#slides-container").css({'left':'-'+slideWidth+'px'});}
for(var i=0;i<popup_images_arr.length;i++){if(event.currentTarget!=$(".anim_border")[i]){$("#popup-container ul").append("<li></li>");}else{$("#popup-container ul").append("<li class='active'></li>");}}
$("#popup-container").css("display","block").animate({opacity:1},300);});body.on("click",".popup_left",function(){prev_slide=current_slide;if(current_slide){current_slide--;}else{current_slide=slides_length-1;}
changeSlide();});body.on("click",".popup_right",function(){prev_slide=current_slide;if(current_slide<slides_length-1){current_slide++;}else{current_slide=0;}
changeSlide();});body.on("click","#popup-container li",function(){prev_slide=current_slide;current_slide=$("#popup-container li").index($(this));changeSlide();});$("#popup-container").on("click",function(e){if($(e.target).is($("#popup-container")))
$("#popup-container").animate({opacity:0},300,function(){$(this).css("display","none");})});setTeamMemberHeight();window.msnry=new Masonry('.grid',{columnWidth:'.grid-sizer',percentPosition:true});$('.more').on("click",function(){var html='<div class="grid-item grid-item--width1" >'+
'<a href="11-Blog-Single-Post.html ">\n'+
'                <div class="grid-item-img">\n'+
'                    <img src="resources/images/stas-svechnikov-31192-unsplash.png" alt="Andre Benz"/>\n'+
'                </div>\n'+
'                <div class="grid-item-content">\n'+
'                    <div class="g_t">\n'+
'                        <h3>NEW DJ</h3>\n'+
'                        <p>\n'+
'                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n'+
'                            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n'+
'                            when an unknown printer took a galley of type and scrambled it to make a type specimen\n'+
'                        </p>\n'+
'                    </div>\n'+
'                </div>\n'+
'            </a>'+
'</div>'
+'<div class="grid-item grid-item--width2">'+
'<a href="11-Blog-Single-Post.html ">\n'+
'                <div class="grid-item-img">\n'+
'                    <img src="resources/images/averie-woodard-319832-unsplash-1.png" alt="Karim Boubker"/>\n'+
'                </div>\n'+
'                <div class="grid-item-content">\n'+
'                    <div class="g_t">\n'+
'                        <h3>OUR TOUR</h3>\n'+
'                        <p>\n'+
'                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n'+
'                            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n'+
'                            when an unknown printer took a galley of type and scrambled it to make a type specimen\n'+
'                        </p>\n'+
'                    </div>\n'+
'                </div>\n'+
'            </a>'+
'</div>'
+'<div class="grid-item grid-item--width3">'+
'<a href="11-Blog-Single-Post.html ">\n'+
'                <div class="grid-item-content">\n'+
'                    <div class="g_t">\n'+
'                        <h3>DRUM FESTIVAL</h3>\n'+
'                        <p>\n'+
'                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n'+
'                            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n'+
'                            when an unknown printer took a galley of type and scrambled it to make a type specimen\n'+
'                        </p>\n'+
'                    </div>\n'+
'                </div>\n'+
'                <div class="grid-item-img">\n'+
'                    <img src="resources/images/ryan-moreno-99467-unsplash.png" alt="Samuel Fyfe">\n'+
'                </div>\n'+
'            </a>'+
'</div>'
+'<div class="grid-item grid-item--width4">'+
'<a href="11-Blog-Single-Post.html ">\n'+
'                <div class="grid-item-img">\n'+
'                    <img src="resources/images/matthew-kane-365718-unsplash-2.png" alt="">\n'+
'                </div>\n'+
'                <div class="grid-item-content">\n'+
'                    <div class="g_t">\n'+
'                        <h3>DARK SIDE</h3>\n'+
'                        <p>\n'+
'                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n'+
'                            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n'+
'                            when an unknown printer took a galley of type and scrambled it to make a type specimen\n'+
'                        </p>\n'+
'                    </div>\n'+
'                </div>\n'+
'            </a>'+
'</div>';$("div.grid").append(html);window.msnry=new Masonry('.grid',{columnWidth:'.grid-sizer',percentPosition:true});});$.fn.numberPicker=function(){var dis='disabled';return this.each(function(){var picker=$(this),p=picker.find('button:last-child'),m=picker.find('button:first-child'),input=picker.find('input'),min=parseInt(input.attr('min'),10),max=parseInt(input.attr('max'),10),inputFunc=function(picker){var i=parseInt(input.val(),10);if((i<=min)||(!i)){input.val(min);p.prop(dis,false);m.prop(dis,true);}else if(i>=max){input.val(max);p.prop(dis,true);m.prop(dis,false);}else{p.prop(dis,false);m.prop(dis,false);}},changeFunc=function(picker,qty){var q=parseInt(qty,10),i=parseInt(input.val(),10);if((i<max&&(q>0))||(i>min&&!(q>0))){input.val(i+q);inputFunc(picker);}};m.on('click',function(){changeFunc(picker,-1);});p.on('click',function(){changeFunc(picker,1);});input.on('change',function(){inputFunc(picker);});inputFunc(picker);});};$('.plusminus').numberPicker();$('.delete-product').on('click',function(e){e.preventDefault();$(this).parents('.cart-item').remove();});$('.page-404 #header-404').fullHeight();$(".dropdown-menu li a").on('click',function(){var selText=$(this).text();$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');});var $zoom=$('.zoom').magnify();$('.pay-text').css('display','none');if($(".paypal input").is(':checked')){$(".paypal input").closest('.custom-control').find('.pay-text').css('display','block');$(".paypal input").closest('.custom-control').siblings().find('.pay-text').css('display','none');}else{$(".ubs input").closest('.custom-control').find('.pay-text').css('display','block');$(".ubs input").closest('.custom-control').siblings().find('.pay-text').css('display','none');}
$(".paypal input, .ubs input").on("change",function(){$(this).closest('.custom-control').find('.pay-text').css('display','block');$(this).closest('.custom-control').siblings().find('.pay-text').css('display','none');});var nav=$('.shop-view-cart'),animateTime=300,navLink=$('.catd-button');nav.css({'height':'0'});navLink.on('click',function(){nav.css({overflow:'visible'});if(nav.height()===0){autoHeightAnimate(nav,animateTime);}});function autoHeightAnimate(element,time){var curHeight=element.height(),autoHeight=element.css('height','auto').height()+30;element.height(curHeight);element.stop().animate({height:autoHeight},time);}
body.on("click",".chosen-single",function(){$('.chosen-search input').focus();$('.chosen-search input').trigger('click');});if(!$('.title-image img').length){$('.global-title').css('position','relative');}
if(navigator.userAgent.search("MSIE")>=0){$('body').addClass('msie');}
else if(navigator.userAgent.search("Chrome")>=0){$('body').addClass('chrome');}
else if(navigator.userAgent.search("Firefox")>=0){$('body').addClass('firefox');}
else if(navigator.userAgent.search("Safari")>=0&&navigator.userAgent.search("Chrome")<0){$('body').addClass('safari');}
else if(navigator.userAgent.search("Opera")>=0){$('body').addClass('opera');}
else if(navigator.userAgent.search("NET")>=0){$('body').addClass('net');}
else if(navigator.userAgent.search("Edge")>=0){$('body').addClass('edge');}
$(".overly-1").on("click",function(e){e.stopPropagation();if($(e.target).is($(".overly-1")))
$(".overly-1").animate({opacity:0},300,function(){$(this).css("display","none");});$("#text-and-video").css('position','relative');});$("body.single-events").on("click",function(event){event.stopPropagation();$(".overly-1").css("display","block").animate({opacity:1},300);$("#text-and-video").css('position','initial');});});windowElement.on('load',function(){$('#preloader').fadeOut('slow',function(){$(this).remove();});});