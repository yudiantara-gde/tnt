
(function($) {

	//superfish menu
		$('#nav-desktop').superfish();
	
	//slick nav - mobile menu
		$('.nav-mobile').slicknav({});
		$('.slicknav_btn').click(function() {

			if($(this).hasClass('slicknav_open')) {
				
				$('#header').addClass('navMobile');
			}else {

				$('#header').removeClass('navMobile');
			}
		});

	//AOS scroll animation
		AOS.init({
			duration: 1200
		});
	
	//selectric js
		$('.selectric').selectric({
			disableOnMobile: false, 
			nativeOnMobile: false
		});

		$('.selectric-icon').selectric({
			disableOnMobile: false, 
			nativeOnMobile: false,
			optionsItemBuilder: function(itemData, element, index) {
			  return element.val().length ? '<i class="icon ' + itemData.text +  '"></i>' + itemData.text : itemData.text;
			}
		});

    //date time picker
        $( '#check-in' ).pickadate({
            formatSubmit: 'yyyy/mm/dd',
            container: '.box.has-icon.check-in'
        });

        $( '#check-out' ).pickadate({
            formatSubmit: 'yyyy/mm/dd',
            container: '.box.has-icon.check-out'
        });

        $( '#date' ).pickadate({
            formatSubmit: 'yyyy/mm/dd',
            container: '.box.date'
        });
    
    //click togle content
        $(".toggle-btn").click(function() {
            //e.preventDefault();
			$(this).toggleClass('active');

            $(this).siblings().each(function() {
				$(this).removeClass('active');
            })
		});

	
	//scroll for header position
		$(window).on('scroll', function(){

			var scrollPos 	= '';

			//if(window.orientation > -1) {

				//scrollPos 	= $('body').scrollTop();
			//}else {
				
				scrollPos 	= $('html, body').scrollTop();
			//}

			var contenPos	= 41; //$('.chk-pos').offset().top;

			//remove fixed class
            $('#header').removeClass('fixed');
            $('#wrapper').removeClass('fixed');

			if(scrollPos >= contenPos) {

				$('#header').addClass('fixed');
                $('#wrapper').addClass('fixed');
			}else {

				$('#header').removeClass('fixed');
                $('#wrapper').removeClass('fixed');
			}
		});
})(jQuery);