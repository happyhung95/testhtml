/*--------------------- Copyright (c) 2018 -----------------------
[Master Javascript]

Project: Logistic - Responsive HTML Template
Version: 1.0.0
Assigned to: TemplateBundle
-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var logistic = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- Logistic Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.Search();
			this.Service_slider();
            this.Menu();
            this.Togglemenu();
            this.Slider();
			this.Counter();
			this.testimonial();
			this.client_slider();
			this.Gallery();

        },
        /*-------------- Logistic Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
        // Search
        Search: function() {
            $(".bs_top_search i").on('click', function() {
                $(".bs_search_overlay").addClass('search_open');
            });
            $(".srch_close i").on('click', function() {
                $(".bs_search_overlay").removeClass('search_open');
            });

        },
		Service_slider: function() {
            if ($('.tc_service_slider').length > 0) {
                $('.slider-for1').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.slider-nav1'
                });
                $('.slider-nav1').slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for1',
                    dots: false,
                    autoplay: false,
                    arrows: false,
                    focusOnSelect: true
                });

                $('a[data-slide]').on('click', function(e) {
                    e.preventDefault();
                    var slideno = $(this).data('slide');
                    $('#color_car .slider-nav1').slick('slickGoTo', slideno - 1);
                });
            }

        },
        // Menu		
        Menu: function() {
            $('.sub-menu').parent().hover(function() {
                var menu = $(this).find("ul");
                var menupos = $(menu).offset();

                if (menupos.left + menu.width() > $(window).width()) {
                    var newpos = -$(menu).width();
                    menu.css({
                        left: newpos
                    });
                }
            });
        },
        // Toggle Menu
        Togglemenu: function() {
            $(".tp_menu_btn").on('click', function() {
                $(".tp_menu").addClass('open_menu');
            });
            $(".menu_cross").on('click', function() {
                $(".tp_menu").removeClass('open_menu');
            });
            $('.tp_menu ul li.dropdown').children('a').append(function() {
                return '<div class="dropdown-expander"><i class="fa fa-angle-down" aria-hidden="true"></i></div>';
            });
            $(".tp_menu ul > li:has(ul) > a").on('click', function(e) {
                var w = window.innerWidth;
                if (w <= 991) {
                    e.preventDefault();
                    $(this).parent('.tp_menu ul li').children('ul.sub-menu').slideToggle();
                }
            });
        },

        // Main Slider
        Slider: function() {
            if ($('.tc_banner_slider').length > 0) {
                $(".tc_banner_slider").slick({
                    autoplay: true,
                    autoplaySpeed: 6000,
                    speed: 600,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    pauseOnHover: false,
                    dots: false,
                    arrows: false,
                    fade:true,
                    draggable: true,
                    responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false
                        }
                    }, ]
                });
            }
        },
		//Counter
        Counter: function() {
            if ($('.tp_count_box').length > 0) {
                $('.tp_count_box').appear(function() {
                    $('.tp_counter_num').countTo();
                });
            }

        },
	// Testimonial Slider
        testimonial: function() {
            $('.tp_test_slider .owl-carousel').owlCarousel({
                loop: false,
                margin: 30,
                nav: false,
                dots: true,
				autoplaySpeed: 1500,
                autoplay: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1000: {
                        items: 3
                    }
                }
            })

        },
		// Clients Slider
        client_slider: function() {
            $('.tp_client_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                dots: false,
				autoplaySpeed: 1500,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    800: {
                        items: 4
                    },
                    1000: {
                        items: 4
                    }
                }
            })

        },
		// Gallery
		 Gallery: function() {
            if ($(".gallery_full_width").length > 0) {
                $(".popup-gallery").magnificPopup({
                    type: 'image',
                    removalDelay: 500,
                    mainClass: 'mfp-with-zoom',
                    gallery: {
                        enabled: true,
                    }


                });
            }
		
		 }
		
		

    };
    $(document).ready(function() {

        logistic.init();

    });
    // Preloader Js
    jQuery(window).on('load', function() {
        setTimeout(function() {
            $('body').addClass('loaded');

        }, 500);
		
		// Isotop Gallery
		if ($('.grid').length) {
		
		var $container = $('.grid');
        $container.isotope({
            layoutMode: 'fitRows',
			gutter: 10,
            itemSelector: '.element-item',
            percentPosition: true,
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
                isFitWidth: false,
				
            },
			fitRows: {
  gutter: 30
}
        });

        $('.tp_gal_filter a').click(function() {
            $('.tp_gal_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
		}
		
		
		
    });
	// Preloader Js
    jQuery(window).on('load', function() {
        setTimeout(function() {
            $('body').addClass('loaded');

        }, 500);
    });

    // Window Scroll
    $(window).scroll(function() {
        var wh = window.innerWidth;
        //Go to top
        if ($(this).scrollTop() > 100) {
            $('.gotop').addClass('goto');
        } else {
            $('.gotop').removeClass('goto');
        }

    });
    $(".gotop").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false
    });




})(jQuery);