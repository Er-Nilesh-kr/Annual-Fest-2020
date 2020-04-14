// Projects Carousel
	if ($('.projects-carousel').length) {
		$('.projects-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="flaticon-back"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1500:{
					items:4
				},
				1200:{
					items:5
				},
				1600:{
					items:6
				}
			}
		});    		
	}
	
	
	// Projects Carousel Two
	if ($('.projects-carousel-two').length) {
		$('.projects-carousel-two').owlCarousel({
			loop:true,
			margin:45,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="flaticon-back"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1500:{
					items:1
				}
			}
		});    		
	}
	
// Projects Carousel Three
	if ($('.projects-carousel-three').length) {
		$('.projects-carousel-three').owlCarousel({
			loop:true,
			animateOut: 'slideOutUp',
    		animateIn: 'slideDown',
			margin:45,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="fas fa-angle-up"></span>', '<span class="fas fa-angle-down"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1500:{
					items:1
				}
			}
		});    		
	}