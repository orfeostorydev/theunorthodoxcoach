document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);
	if(jQuery('#unorthodox-coach-section').length > 0){
	    
        // Light main section 
           const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#unorthodox-coach-section',
            pin: false,
            start: 'top top',
            end: '+=800',
            scrub: 1,
           // markers: true
          }
        });
        
        tl.to('.light-animation img', {
         scale: 1,
         y:-50,
         ease: 'power2.out',
        });

	}
    
	if(jQuery('.roles-shape-animation').length > 0){
	    
        // Light main section 
           const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.roles-shape-animation',
            pin: false,
            start: 'top-=400 top',
            end: 'bottom top',
            scrub: 1,
            //markers: true,
              onUpdate: (self) => {
                var progress= (self.progress*110)+'%';
                $('.roles-shape-animation-gradient').css({'top':progress});
              }

          }
        });
        
      tl.to('.roles-shape-animation', {
      
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      //    ease: 'power2.out',
        });
	}
    
});


jQuery(document).ready(function($) {
	setTimeout(function() {
		jQuery('body').addClass('page-loaded');

	}, 1000); // 1000ms = 1 second
	
	
	
      
   var btn = $('#back-to-top-button');

      // Check if the button exists before attaching handlers
      if (btn.length) {
        $(window).on('scroll', function () {
          if ($(this).scrollTop() > 300) {
            btn.addClass('show');
          } else {
            btn.removeClass('show');
          }
        });
    
        btn.on('click', function (e) {
          e.preventDefault();
          $('html, body').animate({ scrollTop: 0 }, 300);
        });
      } else {
        console.warn('#back-to-top-button not found in DOM.');
      }
          
          
      function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }

    $('.email-copy-action').on('click', function () {
        copyToClipboard('#copyText');
        $(this).addClass('copied');
    });
    
});

jQuery(document).ready(function($) {
    
        $('.roles-describe-section .card').on('click', function(){
             $('.card').removeClass('active');
             $(this).addClass('active');
         
            const section = $('.describe-outer-section');
            const targetOffset = section.offset().top + section.outerHeight();
            $('html, body').animate({
                scrollTop: targetOffset + 250
            }, 300); 
        });
        
        
    $('.card.entrepreneur').on('click', function(){
       $('#managers').addClass('inactive');
       $('#managers').removeClass('active');
       
       $('#entrepreneur').addClass('active');
       $('#entrepreneur').removeClass('inactive');
       
       $('#thinker').addClass('inactive');
       $('#thinker').removeClass('active');
       
       $('#adult').addClass('inactive');
       $('#adult').removeClass('active');
       
    });
    
    $('.card.manager').on('click', function(){
       $('#managers').addClass('active');
       $('#managers').removeClass('inactive');
       
       $('#entrepreneur').addClass('inactive');
       $('#entrepreneur').removeClass('active');
       
       $('#thinker').addClass('inactive');
       $('#thinker').removeClass('active');
       
       $('#adult').addClass('inactive');
       $('#adult').removeClass('active');
    });
    
    $('.card.visionary').on('click', function(){
       $('#managers').addClass('inactive');
       $('#managers').removeClass('active');
       
       $('#entrepreneur').addClass('inactive');
       $('#entrepreneur').removeClass('active');
       
       $('#thinker').addClass('active');
       $('#thinker').removeClass('inactive');
       
       $('#adult').addClass('inactive');
       $('#adult').removeClass('active');
       
    });
    
    $('.card.adult').on('click', function(){ 
       $('#managers').addClass('inactive');
       $('#managers').removeClass('active');
       
       $('#entrepreneur').addClass('inactive');
       $('#entrepreneur').removeClass('active');
       
       $('#thinker').addClass('inactive');
       $('#thinker').removeClass('active');
       
       $('#adult').addClass('active');
       $('#adult').removeClass('inactive');
    });
    
    $('.work-with-section .card').hover(function () {
        $('.card').removeClass('active');
        $(this).addClass('active');
    });
    
    
const mainSwiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
       navigation: 
       {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
        }
    },
    768: {
      slidesPerView: 2, 
    },
    992: {
      slidesPerView: 2.25, 
    }
  }
});

  
    const thumbsSwiper = new Swiper(".thumbs-swiper", {
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      slideToClickedSlide: false, // Disable side-click
      effect: "coverflow",
      watchSlidesProgress: true,
      centerInsufficientSlides: true,
      navigation: {
        nextEl: ".thumbs-next",
        prevEl: ".thumbs-prev",
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 10,
        depth: 80,
        modifier: 3,
        slideShadows: false,
      }
    });
  
    mainSwiper.controller.control = thumbsSwiper;
    thumbsSwiper.controller.control = mainSwiper;
	
// 	jQuery(window).on('load', function () {
//       setTimeout(function () {
//         mainSwiper.slideNext(0);
//       }, 300);
//     });


	jQuery(window).on('load', function () {
        setTimeout(function () {
            jQuery('.about-us .thumbs-next').trigger('click');
        }, 300);
    });

    const mainSwiperfl = new Swiper(".mySwiperfl", {
       loop: true,
      centeredSlides: true,
      spaceBetween: 30,
        breakpoints: {
            0: {
              slidesPerView: 1,
               navigation: 
               {
                nextEl: ".slider-next",
                prevEl: ".slider-prev",
                }
            },
            768: {
              slidesPerView: 2, 
            },
            992: {
              slidesPerView: 2.25, 
            }
          }
    });
      
    const thumbsSwiperfl = new Swiper(".thumbs-swiperfl", {
      loop: true,
      slidesPerView:1.75,
      centeredSlides: true,
      slideToClickedSlide: false, // Disable side-click
      effect: "coverflow",
      watchSlidesProgress: true,
      centerInsufficientSlides: true,
      navigation: {
        nextEl: ".thumbs-next",
        prevEl: ".thumbs-prev",
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 10,
        depth: 80,
        modifier: 3,
        slideShadows: false,
      }
    });
    
    mainSwiperfl.controller.control = thumbsSwiperfl;
    thumbsSwiperfl.controller.control = mainSwiperfl;


	jQuery(window).on('load', function () {
        setTimeout(function () {
            jQuery('.fractional-leadership .thumbs-prev').trigger('click');
        }, 400);
    });
});

$(document).ready(function($) {

    if ($('body').hasClass('squarespace-editable')) {
        return;
    }

    let isScrollLocked = false;
    let isPermanentlyUnlocked = false;
    const $targetDiv = $('.describe-outer-section');
    const $unlockItem = $('.roles-describe-section .card');
    
    let offsetTrigger = 0;

    function updateOffsetTrigger() {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let orientation = (windowWidth > windowHeight) ? 'landscape' : 'portrait';

        if (orientation === 'landscape') {
            if (windowWidth >= 1024) {
                offsetTrigger = 100;
            } else if (windowWidth >= 991 && windowWidth < 1024) {
                offsetTrigger = 150;
            } else if (windowWidth >= 575 && windowWidth < 991) {
                offsetTrigger = -100;
            }
        } else { // portrait
            if (windowWidth >= 1024) {
                offsetTrigger = 100;
            } else if (windowWidth >= 991 && windowWidth < 1024) {
                offsetTrigger = 120;
            } else if (windowWidth >= 575 && windowWidth < 991) {
                offsetTrigger = -50;
            }
        }
    }

    // Call on load
    updateOffsetTrigger();

    let scrollPosition = 0;
    let originalOffsetTop;

    function isDivInPosition() {
        const rect = $targetDiv[0].getBoundingClientRect();
        return rect.top <= offsetTrigger && rect.bottom >= offsetTrigger;
    }

    function lockScroll() {
        isScrollLocked = true;
        scrollPosition = $(window).scrollTop();

        $targetDiv.css({
            'position': 'fixed',
            'top': offsetTrigger + 'px',
            'width': $targetDiv.width() + 'px',
            'z-index': 1000
        });

        $('.page-section[id="entrepreneur"] .content').css({ 'opacity': 0 });
        $('body').addClass('scrollbar-hidden');

        if (!$('.scroll-placeholder').length) {
            $('<div>').addClass('scroll-placeholder').css({
                'height': $targetDiv.outerHeight() + 'px'
            }).insertAfter($targetDiv);
        }
    }

    function unlockScroll(permanent = false) {
        isScrollLocked = false;
        if (permanent) {
            isPermanentlyUnlocked = true;
        }

        $targetDiv.css({
            'position': '',
            'top': '',
            'width': '',
            'z-index': ''
        });

        $('.page-section[id="entrepreneur"] .content').css({ 'opacity': 1 });
        $('body').removeClass('scrollbar-hidden');
        $('.scroll-placeholder').remove();
    }

    setTimeout(() => {
        originalOffsetTop = $targetDiv.offset().top;

        const initialScroll = $(window).scrollTop();
        if (!isPermanentlyUnlocked && initialScroll > originalOffsetTop - offsetTrigger) {
            $('html, body').scrollTop(originalOffsetTop - offsetTrigger - 10);
            setTimeout(() => {
                lockScroll();
            }, 10);
        }
    }, 50);

    $(window).on('scroll', function () {
        if (isPermanentlyUnlocked) return;

        const currentScroll = $(window).scrollTop();

        if (!isScrollLocked && isDivInPosition()) {
            lockScroll();
        } else if (isScrollLocked) {
            if (currentScroll < originalOffsetTop - offsetTrigger) {
                unlockScroll();
            } else if (currentScroll > scrollPosition) {
                $(window).scrollTop(scrollPosition);
            }
        }
    });

    $unlockItem.on('click', function () {
        if (isScrollLocked) {
            unlockScroll(true);

            const hmainSwiper = new Swiper(".mySwiper", {
                loop: true,
                centeredSlides: true,
                spaceBetween: 30,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        navigation: {
                            nextEl: ".slider-next",
                            prevEl: ".slider-prev",
                        }
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 2.25,
                    }
                }
            });

            const hthumbsSwiper = new Swiper(".thumbs-swiper", {
                loop: true,
                slidesPerView: 3,
                centeredSlides: true,
                slideToClickedSlide: false,
                effect: "coverflow",
                watchSlidesProgress: true,
                centerInsufficientSlides: true,
                navigation: {
                    nextEl: ".thumbs-next",
                    prevEl: ".thumbs-prev",
                },
                coverflowEffect: {
                    rotate: 0,
                    stretch: 10,
                    depth: 80,
                    modifier: 3,
                    slideShadows: false,
                }
            });

            hmainSwiper.controller.control = hthumbsSwiper;
            hthumbsSwiper.controller.control = hmainSwiper;

            $(window).on('load', function () {
                setTimeout(function () {
                    hmainSwiper.slideNext(0);
                }, 300);
            });
        }
    });

    $(window).on('wheel', function (e) {
        if (isScrollLocked && e.originalEvent.deltaY > 0) {
            e.preventDefault();
            $(window).scrollTop(scrollPosition);
            return false;
        }
    });

    $(window).on('keydown', function (e) {
        if (isScrollLocked && (e.which === 40 || e.which === 34)) {
            e.preventDefault();
            return false;
        }
    });

    // On resize or orientation change
    $(window).on('resize orientationchange', function () {
        updateOffsetTrigger();
        if (isScrollLocked) {
            $targetDiv.css('width', $targetDiv.parent().width() + 'px');
        }
    });

});


 jQuery(document).ready(function($) {
      $('.sq-popu-show').on('click', function(e) {
        e.preventDefault();

        var target = $(this).data('target');

         $('body').addClass('modal-overflow');

        // Hide all modals
        $('.modal').hide();

        // Show the targeted modal
        $(target).fadeIn();
         $('#how-can-help-secton').addClass('hide');
         $('#real-transformation-section').addClass('hide');
        
      });

      // Close on clicking close button
      $('.close-btn').on('click', function() {
        $(this).closest('.modal').fadeOut();
         $('body').removeClass('modal-overflow');
         
         $('#how-can-help-secton').removeClass('hide');
         $('#real-transformation-section').removeClass('hide');
      });

      // Close on clicking outside modal-content
      $(window).on('click', function(e) {
        if ($(e.target).hasClass('modal')) {
         $(e.target).fadeOut();
         $('body').removeClass('modal-overflow');
         
         $('#how-can-help-secton').removeClass('hide');
         $('#real-transformation-section').removeClass('hide');
        }
      });
      
      $(window).on('scroll', function () {
          var sectionOffset = $('#about-me-section').offset().top;
          var scrollTop = $(window).scrollTop();
        
          if (scrollTop >= sectionOffset) {
            $('body').addClass('active');
          } else {
            $('body').removeClass('active');
          }
        });
          
    // if(jQuery('.sqs-jacquard-outline-beta').length > 0){
        
    // }else{
    //   var currentDomain = window.location.hostname;
    //   var builtInDomain = "elephant-owl-6ayb.squarespace.com";
    //   var mainDomain = "https://www.theunorthodoxcoach.com";
      
    //   if (currentDomain === builtInDomain) {
    //       window.location.href = mainDomain + window.location.pathname + window.location.search;
    //     }
    // }

  
}); 
// (function() {
//     var builtInDomain = "elephant-owl-6ayb.squarespace.com";
//     var primaryDomain = "https://www.theunorthodoxcoach.com";
// console.log(window.location.hostname);
//     // Only redirect if on built-in domain AND not logged in
    
//     if(document.body.classList.contains('squarespace-config')){
//         console.log('Exist');
//     }else{
//           console.log('111111111111');
//     }
//     if (
//         window.location.hostname === builtInDomain &&
//         !document.body.classList.contains('squarespace-config') &&
//         !document.body.classList.contains('squarespace-editable')
//     ) {
//         // Use a short delay to avoid Squarespace blocking the redirect
//         setTimeout(function() {
//             window.location.replace(primaryDomain);
//         }, 100);
//     }
// })();  
 