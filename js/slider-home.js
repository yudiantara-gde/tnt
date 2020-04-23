(function($) {

	$(document).ready(function() {
		"use strict";

		// SLIDER
		var menu = ['BEST DEAL<span>NEARBY KUTA</span>', 'EXPLORE UBUD<span>FIND BEST OFFER</span>'];
		var interleaveOffset = 0.5;
		var swiperOptions = {
            slidesPerView: 1,
			loop: true,
			speed: 1000,
			parallax: true,
			autoplay: {
		        delay: 3500,
			 	disableOnInteraction: false,
			},
			grabCursor: true,
			watchSlidesProgress: true,
			pagination: {
			  el: '.swiper-custom-pagination',
					clickable: true,
					renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + (menu[index]) + '</span>';
				},
			},
			on: {
			    progress: function() {
			        var swiper = this;
			        for (var i = 0; i < swiper.slides.length; i++) {
                        var slideProgress = swiper.slides[i].progress;
                        var innerOffset = swiper.width * interleaveOffset;
                        var innerTranslate = slideProgress * innerOffset;
                        swiper.slides[i].querySelector(".slide-inner").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
			        }
                },
                
                touchStart: function() {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = "";
                    }
                },

                setTransition: function(speed) {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = speed + "ms";
                        swiper.slides[i].querySelector(".slide-inner").style.transition = speed + "ms";
                    }
                }
		    }
		};

        var swiper = new Swiper(".heroes .swiper-container", swiperOptions);

        //var pageSection = $(".img-heroes");
		//pageSection.each(function(indx){
		//	if ($(this).attr("data-background")){
		//		$(this).css("background-image", "url(" + $(this).data("background") + ")");
		//	}
        //});
        
        //recommend villa
        var rv = new Swiper('.l-recommend-villa .row .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 16, 
            loop: true,
            speed: 1000,
            
            //breakpoint
            breakpoints: {
                768: {
                    slidesPerView: 2
                },
                993: {
                    slidesPerView: 3,
                    navigation: {
                        nextEl: '.rv-next',
                        prevEl: '.rv-prev',
                    },
                }
            }
        });

        //list by type
        var rv = new Swiper('.list-by-type .row .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 16, 
            loop: true,
            speed: 1000,
            
            //breakpoint
            breakpoints: {
                480: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                993: {
                    slidesPerView: 4
                },
                1200: {
                    slidesPerView: 5
                }
            }
        });
    });

})(jQuery);