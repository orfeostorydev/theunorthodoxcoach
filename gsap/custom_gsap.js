document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
  
	
	const scrollerSmoother = ScrollSmoother.create({
  content: "#content",
  wrapper: "#wrapper",
  smooth: true,
  effects: false,
  normalizeScroll: true
});
 	// 	jQuery(window).on('scroll', function() {
	// 		const scrollTop = jQuery(window).scrollTop();
	// 		const $target = jQuery('.custom_header');

	// 		if (scrollTop > 50 && !$target.hasClass('active')) {
	// 			$target.addClass('active');
	// 			gsap.to($target, {
	// 				y: 0,
	// 				duration: 0.4,
	// 				ease: "power2.out"
	// 			});
	// 		} else if (scrollTop <= 50 && $target.hasClass('active')) {
	// 			$target.removeClass('active');
	// 			gsap.to($target, {
	// 				y: 50,
	// 				duration: 0.4,
	// 				ease: "power2.in"
	// 			});
	// 		}
	// 	});
/*const winHalfHeight = window.innerHeight / 2;

	const sections = document.querySelectorAll('.list-with-us-section');

	sections.forEach((section, index) => {
		const content = section.querySelector('.list-with-us-content');

		if (content) {
			// Set initial opacity to 0 to prepare for fade-in
			gsap.set(content, { opacity: 0 });

			gsap.timeline({
				scrollTrigger: {
					trigger: section,
              		start: 'top-=350px top',  
					end: 'bottom  top',  
					scrub: 1,  
					snap: {
						snapTo: 1,  
						//    duration: { min: 0.1, max: 0.5 }, // Smooth snap transition
						ease: 'power2.in', 
						directional: true  
					},
				}
			})
				.to(content, {
				opacity: 1,  
				duration: 0.5  
			})
				.to(content, {
				opacity: 0,  
				duration: 0.5  
			});
		}
	});*/
	
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".list-with-us-section");

// Create ScrollTriggers to build snapping points
const triggers = sections.map(section =>
  ScrollTrigger.create({
    trigger: section,
    start: "center center"
  })
);

// Set opacity to 0 immediately for all content blocks
sections.forEach((section) => {
  const content = section.querySelector(".list-with-us-content");
  if (content) {
    gsap.set(content, { opacity: 0 }); // Initial hide

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
// 		 markers: true,
		  scrub: true,
		  onEnter: () => gsap.to(content, { opacity: 1, duration: 1.2, ease: "none" }),
		  onLeave: () => gsap.to(content, { opacity: 0, duration: 0.6, ease: "none" }),
		  onEnterBack: () => gsap.to(content, { opacity: 1, duration: 1.2, ease: "none" }),
		  onLeaveBack: () => gsap.to(content, { opacity: 0, duration: 0.6, ease: "none" }),
		  onRefreshInit: () => gsap.set(content, { opacity: 0 }),
	  }
    });
  }
});

// Snap control across full page
let snap;
const pageTrigger = ScrollTrigger.create({
  start: 0,
  end: "max",
  onRefresh: refreshSnap,
  snap: {
    snapTo: (progress, self) => snap(progress, self.direction),
    ease: "power1.inOut",
    duration: { min: 0.1, max: 0.5 }
  }
});

function refreshSnap() {
  const max = ScrollTrigger.maxScroll(window);
  snap = ScrollTrigger.snapDirectional(triggers.map(trigger => trigger.start / max));
}


 /* 	 const sections = document.querySelectorAll('.list-with-us-section');
const sectionOffsets = [];

sections.forEach((section) => {
  sectionOffsets.push(section.offsetTop / (document.body.scrollHeight - window.innerHeight));
});

sections.forEach((section, index) => {
  const content = section.querySelector('.list-with-us-content');

  if (content) {
    gsap.set(content, { opacity: 0 });

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        snap: {
          snapTo: (progress) => {
            // Snap to the closest offset
            return sectionOffsets.reduce((closest, current) =>
              Math.abs(current - progress) < Math.abs(closest - progress) ? current : closest
            );
          },
          ease: 'power2.inOut',
          duration: { min: 0.1, max: 0.5 },
//           directional: true
        }
      }
    })
    .to(content, { opacity: 1, duration: 0.5 })
    .to(content, { opacity: 0, duration: 0.5 });
  }
});
*/
});