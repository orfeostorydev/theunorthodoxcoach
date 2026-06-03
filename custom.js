document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);
	if(jQuery('#unorthodox-coach-section').length > 0){
	    
        // Light main section 
              const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#unorthodox-coach-section',
            start: 'top top',
            end: '+=200', // shorter scroll distance
            scrub:true,   // less delay = faster response
          }
        });
        
        tl.to('.light-animation img', {
          scale: 1,
          x: 120,
          y: 65,
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
                scrollTop: targetOffset
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
    // console.log($('body').attr('class'));
    if ($('body').hasClass('squarespace-editable')) {
        // console.log('EDITABLE');
        return;
    }

    if (!$('.describe-outer-section').length) return;

    let isPermanentlyUnlocked = false;
    let isScrollLocked = false;
    let pinTrigger = null;
    const $targetDiv = $('.describe-outer-section');
    const $unlockItem = $('.roles-describe-section .card');

  /*  function getOffsetTrigger() {
        const w = window.innerWidth;
        if (w >= 1024) return 250;
        if (w >= 575) return 100;
        return 0;
    }
*/
    function getOffsetTrigger() {
        const w = window.innerWidth;
    
        if (w >= 1366) return 250;
        if (w >= 989) return 200;
        if (w >= 640) return 150;
    
        return 150;
    }
    // Force page to top on every load — prevents browser scroll-restoration
    // from dropping the user mid-page where the pin would immediately lock them.
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    let pinnedScrollY = 0;

    // GSAP pin sets position:fixed once and never updates top on scroll ticks,
    // eliminating the visualViewport-driven reflow that caused mobile shake.
    function createPin() {
        if (
            $('body').hasClass('sqs-edit-mode') ||
            $('body').hasClass('squarespace-editable') ||
            window.frameElement
        ) {
            console.log('EDITABLE');
            return;
        }
        if (pinTrigger || isPermanentlyUnlocked){
            return;   
        }

        // Pre-promote to GPU compositing layer before pin activates.
        // will-change primes the layer without applying a transform value that would
        // interfere with GSAP's pin spacer height calculation.
        // backface-visibility:hidden forces GPU rendering in Safari/iOS.
        // transition:none kills any theme transitions that fire on position/transform changes.
        $targetDiv[0].style.willChange = 'transform';
        $targetDiv[0].style.webkitBackfaceVisibility = 'hidden';
        $targetDiv[0].style.backfaceVisibility = 'hidden';
        $targetDiv[0].style.transition = 'none';

        const offset = getOffsetTrigger();
        pinTrigger = ScrollTrigger.create({
            trigger: $targetDiv[0],
            start: 'top top+=' + offset,
            end: '+=9999',
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            onEnter: function() {
                if (!isPermanentlyUnlocked) {
                    isScrollLocked = true;
                    pinnedScrollY = window.scrollY;
                    // Suppress iOS rubber-band overscroll so content below can't peek through.
                    document.body.style.overscrollBehavior = 'none';
                    document.documentElement.style.overscrollBehavior = 'none';
                    $targetDiv[0].style.zIndex = '1000';
                    $('.page-section[id="entrepreneur"] .content').css('opacity', 0);
                }
            },
            onLeaveBack: function() {
                isScrollLocked = false;
                document.body.style.overscrollBehavior = '';
                document.documentElement.style.overscrollBehavior = '';
                $targetDiv[0].style.zIndex = '';
                $('.page-section[id="entrepreneur"] .content').css('opacity', 1);
            },
        });
    }

    function unlockPermanently() {
        isPermanentlyUnlocked = true;
        isScrollLocked = false;
        if (pinTrigger) {
            pinTrigger.kill(true);
            pinTrigger = null;
            ScrollTrigger.refresh();
        }
        document.body.style.overscrollBehavior = '';
        document.documentElement.style.overscrollBehavior = '';
        $targetDiv[0].style.zIndex = '';
        $targetDiv[0].style.willChange = '';
        $targetDiv[0].style.webkitBackfaceVisibility = '';
        $targetDiv[0].style.backfaceVisibility = '';
        $targetDiv[0].style.transition = '';
        $('.page-section[id="entrepreneur"] .content').css('opacity', 1);
        $('.bright-inverse').addClass('is-revealed');
    }

    // Touch scroll blocking — native listener required for passive:false to work
    let touchStartY = 0;
    $(document).on('touchstart', function(e) {
        touchStartY = e.originalEvent.touches[0].clientY;
    });
    document.addEventListener('touchmove', function(e) {
        if (!isScrollLocked) return;
        const deltaY = touchStartY - e.touches[0].clientY;
        if (deltaY > 0) {
            e.preventDefault();
            window.scrollTo(0, pinnedScrollY);
        }
    }, { passive: false });

    // Catch momentum/inertia scroll on iOS — touchmove doesn't fire after finger lifts,
    // so the browser's native scroll events can drift past pinnedScrollY unchecked.
    window.addEventListener('scroll', function() {
        if (isScrollLocked && window.scrollY > pinnedScrollY) {
            window.scrollTo(0, pinnedScrollY);
        }
    }, { passive: true });

    // Wheel scroll blocking — native listener required so preventDefault isn't ignored
    window.addEventListener('wheel', function(e) {
        if (isScrollLocked && e.deltaY > 0) {
            e.preventDefault();
            window.scrollTo(0, pinnedScrollY);
        }
    }, { passive: false });

    // Keyboard scroll blocking
    $(window).on('keydown', function(e) {
        if (isScrollLocked && (e.which === 40 || e.which === 34)) {
            e.preventDefault();
            return false;
        }
    });

    // Init: create pin, then handle case where page loads already scrolled past the section
    setTimeout(function() {
        createPin();
        if (!isPermanentlyUnlocked) {
            const offset = getOffsetTrigger();
            const rect = $targetDiv[0].getBoundingClientRect();
            if (rect.top <= offset) {
                $('html, body').scrollTop($targetDiv.offset().top - offset - 10);
                setTimeout(function() {
                    isScrollLocked = true;
                    pinnedScrollY = window.scrollY;
                    $('.page-section[id="entrepreneur"] .content').css('opacity', 0);
                    ScrollTrigger.refresh();
                }, 50);
            }
        }
    }, 100);

    // Card click: permanently unlock scroll
    $unlockItem.on('click', function() {
        // if (!isScrollLocked){
        //     console.log('NOT LOCKED');
        //     return;
        // }
        unlockPermanently();

        const hmainSwiper = new Swiper(".mySwiper", {
            loop: true,
            centeredSlides: true,
            spaceBetween: 30,
            breakpoints: {
                0: { slidesPerView: 1, navigation: { nextEl: ".slider-next", prevEl: ".slider-prev" } },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2.25 }
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
            navigation: { nextEl: ".thumbs-next", prevEl: ".thumbs-prev" },
            coverflowEffect: { rotate: 0, stretch: 10, depth: 80, modifier: 3, slideShadows: false }
        });

        hmainSwiper.controller.control = hthumbsSwiper;
        hthumbsSwiper.controller.control = hmainSwiper;

        $(window).on('load', function() {
            setTimeout(function() { hmainSwiper.slideNext(0); }, 300);
        });
    });

    // Refresh GSAP on resize/orientation change
    $(window).on('resize orientationchange', function() {
        ScrollTrigger.refresh();
    });

});


 jQuery(document).ready(function($) {
     $('.page-section[id="entrepreneur"] .content').css({ 'opacity': 0 });
     
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

      $('#footer-lead-section').appendTo('#lead_magnet_wrapper');

        
      
        
              $('.form-close').on('click', function(e) {
                  $('#lead_magnet_wrapper').hide();
                  $('body').css('overflow', '');
              });
              
             
            $('.footer-card-container .card-footer button,.book-exploratory-button,.popup-session-btn, .footer-session-section .want-ses-btn, #services-lead-magnet .sqs-block-button-element--medium, #excutive-function-coaching-bookcall .sqs-block-button-element--medium, #tudc-secvice-magnet .sqs-block-button-element--medium').on('click', function(e) {
                e.preventDefault();
                  $('#lead_magnet_wrapper').show();
                  $('body').css('overflow', 'hidden');
              });
              
   /*   const interval = setInterval(() => {
           
            
                //  Only stop if the section is removed from DOM entirely
                if ($section.length === 0) {
                    clearInterval(interval);
                }
        
        }, 300);
        */
                   
                   
                   const target = document.querySelector('#lead_magnet_wrapper');

                    if (!target) return;
                
                    const observer = new MutationObserver(function (mutationsList) {
                        mutationsList.forEach(function (mutation) {
                                const $section    = $('#lead_magnet_wrapper');

                                 const $closeBtn   = $section.find('.lead-magnet-icon');
                                const $formClose  = $section.find('.form-close');
                            
                                 const formWrapperHeight = $section.find('.form-wrapper').height() || 0;
                             
                             
                                const isMobile    = window.innerWidth < 767;
                                const offsetBtn   = isMobile ? 75  : 100;
                                const offsetClose = isMobile ? 85  : 120;
                            
                                const bottomValueBtn   = formWrapperHeight + offsetBtn;
                                const bottomValueClose = formWrapperHeight + offsetClose;
                            
                                $closeBtn.css('bottom',  bottomValueBtn);
                                $formClose.css('bottom', bottomValueClose);
                        });
                    });
                
                    observer.observe(target, {
                        childList: true,     // detect added/removed child elements
                        attributes: true,    // detect attribute changes
                        subtree: true,       // detect changes in all descendants
                        characterData: true // detect text changes
                    });      
            $('.form-close').on('click', function(e) {
                // location.reload();
            });
              
              
              
              
         
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
 