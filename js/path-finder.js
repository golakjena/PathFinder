var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

var isiPad = navigator.userAgent.match(/iPad/i) != null;

;(function(){

	// fadein banner images
	function bannerHeader(){
		$(".missionStatement, .bannerCont, .ourTeam, .managementBanner, .clientRelations, .legendaryBanner, .talentDevelopment, .sales, .facilityManagement, .revenueManagement, .accounting, .sustainability, .staybridgeBanner, .careerBanner, .legendaryBanner").css({opacity:0});
		$(".missionStatement, .bannerCont, .ourTeam, .managementBanner, .clientRelations, .legendaryBanner, .talentDevelopment, .sales, .facilityManagement, .revenueManagement, .accounting, .sustainability, .staybridgeBanner, .careerBanner, .legendaryBanner").animate({opacity:1}, 600);
	}

	function logoEffect(){
		if($(".logoHotels").html()){
			TweenMax.staggerFrom($(".logoHotels ul li"), 1, {scale:0, opacity:0, delay:0.3, ease:Expo.easeOut}, 0.1);
		}
	}

	function quote(){
		if($(".quote").html()){
			$(".quote h2, .quote img, .quote h3").css({opacity:0});

			$(".quote").waypoint(function(){
				$(".quote h2, .quote img, .quote h3").css({opacity:1});
				TweenMax.staggerFrom([$(".quote h2"),$(".quote img"), $(".quote h3")], 1, {bottom:-50, opacity:0, delay:0.3, ease:Expo.easeOut}, 0.2);
			},{
				offset:"90%",
				triggerOnce:true
			});
		}
	}

	function bannerText(){
		if($(".txtOurteam").html()){
			TweenMax.staggerFrom([$(".txtOurteam h1"),$(".txtOurteam h2"), $(".txtOurteam img")], 1, {top:-100, opacity:0, delay:0.3, ease:Expo.easeOut}, 0.2);
		}
	}

	function hotelBanner(){
		$(".hotelBanner li").eq(0).fadeIn(600);
		$(".popup").eq(0).slideDown(600);
		$(".hotelList li a").each(function(){
			$(this).on("click", function(){
				$(".activeTab").removeClass("activeTab");
				$(this).parent().addClass("activeTab");

				var target = $(this).attr("href");
				$(".hotelBanner li").stop(true, true).fadeOut(600);
				$(target).stop(true, true).fadeIn(600);
				
				var popup = $(this).attr("data-popup");
				$(".popup").stop(true, true).slideUp(600);
				$("#"+popup).stop(true, true).slideDown(600);

				return false;
			});
		});

		$(".btnClose").on("click", function(){
			$(this).closest(".popup").slideUp(300);
		});
	}

	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			var display = $(".topNav").css("display");
			if(display == "none"){
				$(".topNav").stop(true, true).slideDown(300);
			}
			else{
				$(".topNav").stop(true, true).slideUp(300);
			}
		});

		if(device){
			var winHeight = $(window).height();
			$(".topNav").css({height:winHeight-72});

			$(window).on("resize", function(){
				winHeight = $(window).height();
				$(".topNav").css({height:winHeight-72});
			});
		}
		

	}

	// custom scrollbar
    function customScroll(){
        if($('.logoHotels').html()){
            $(".logoHotels").mCustomScrollbar({
                scrollButtons:{
                    enable:false
                },
                advanced:{
                    updateOnContentResize: true
                }
            });
        }
    }

    function hotelLogo(){
    	if($('.ticker1').html()){
			$('.ticker1').easyTicker({
				direction: 'up',
				easing: 'swing',
				speed: 'slow',
				interval: 2000,
				height: 'auto',
				visible: 0,
				mousePause: 0,
				controls: {
					up: '',
					down: '',
					toggle: '',
					playText: 'Play',
					stopText: 'Stop'
				}
			});
		}
    }

    function customPop(){
    	var target;
    	$('.isPopup').each(function(){
    		$(this).on("click", function(){
    			target = $(this).attr("data-source");
    		});
    	});


    	if($('.isPopup').html()){
			$('.isPopup').magnificPopup({
				type: 'inline',
				fixedContentPos: false,
				fixedBgPos: true,
				overflowY: 'auto',
				closeBtnInside: true,
				preloader: false,          
				midClick: true,
				removalDelay: 300,
				mainClass: 'my-mfp-zoom-in',
				callbacks: {
					open:function(){
						$('#'+target).royalSlider({
							autoHeight: true,
							arrowsNav: true,
							fadeinLoadedSlide: false,
							controlNavigationSpacing: 0,
							controlNavigation: 'tabs',
							imageScaleMode: 'none',
							imageAlignCenter:false,
							loop: false,
							loopRewind: false,
							numImagesToPreload: 6,
							keyboardNavEnabled: true,
							usePreloader: false,
							arrowsNavAutoHide:false
						});
					}
				}
            });
        }
    }


	$(function(){
		bannerHeader();
		logoEffect();
		hotelBanner();
		if(!device){
			quote();
		}
		
		bannerText();
		mobileNav();
		//customScroll();
		hotelLogo();
		customPop();
	});

})();