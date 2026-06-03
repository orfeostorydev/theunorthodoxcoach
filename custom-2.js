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
});

jQuery(document).ready(function($) {
        $('.card').on('click', function(){
             $('.card').removeClass('active');
             $(this).addClass('active');
         
        const section = $('.describe-outer-section');
        const targetOffset = section.offset().top + section.outerHeight();
        $('html, body').animate({
            scrollTop: targetOffset + 300
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
    slidesPerView: 2.25,
    centeredSlides: true,
    spaceBetween: 30
  });
  
  const thumbsSwiper = new Swiper(".thumbs-swiper", {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,
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
      modifier: 2.5,
      slideShadows: false,
    }
  });
  
    mainSwiper.controller.control = thumbsSwiper;
    thumbsSwiper.controller.control = mainSwiper;
	
	jQuery(window).on('load', function () {
      setTimeout(function () {
        mainSwiper.slideNext(0);
      }, 300);
    });



   
	
	
// 	jQuery(window).on('load', function () {
//         setTimeout(function () {
//             jQuery('.thumbs-next').trigger('click');
//         }, 300);
//     });

    // thumbsSwiper.on('realIndexChange', () => {
    //   const realIndex = thumbsSwiper.realIndex;
    //   mainSwiper.slideToLoop(realIndex, 300); // sync main swiper
    // });
    

// 	$(window).on('scroll', function() {
// 		var $target = $('#unorthodox-coach-section');

// 		if ($(window).scrollTop() > 50) {
// 			$target.addClass('light-active');
// 		} else {
// 			$target.removeClass('light-active');
// 		}
// 	});

});
$(document).ready(function($) {
 
    if ($('body').hasClass('squarespace-editable')) {
        return;
    }

    let isScrollLocked = false;
    let isPermanentlyUnlocked = false;
    const $targetDiv = $('.describe-outer-section');
    const $unlockItem = $('.roles-describe-section .card');
    const offsetTrigger = 250;
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

    // Wait for layout to be fully ready before measuring and locking
    setTimeout(() => {
        originalOffsetTop = $targetDiv.offset().top;

        const initialScroll = $(window).scrollTop();
        if (!isPermanentlyUnlocked && initialScroll > originalOffsetTop - offsetTrigger) {
            $('html, body').scrollTop(originalOffsetTop - offsetTrigger - 10);
            setTimeout(() => {
                lockScroll();
            }, 10);
        }
    }, 50); // Delay ensures layout is settled before measuring

    // Handle scroll
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

    $(window).on('resize', function () {
        if (isScrollLocked) {
            $targetDiv.css('width', $targetDiv.parent().width() + 'px');
        }
    });
 
});
