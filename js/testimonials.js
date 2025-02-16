document.addEventListener('DOMContentLoaded', function() {
    const testimonialsSwiper = new Swiper('.testimonials_slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        speed: 800,
        grabCursor: true,
        
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        
        pagination: {
            el: '.testimonials_slider .swiper-pagination',
            clickable: true
        },
        
        navigation: {
            nextEl: '.testimonials_slider .swiper-button-next',
            prevEl: '.testimonials_slider .swiper-button-prev'
        },

        breakpoints: {
            768: {
                slidesPerView: 1.5,
                centeredSlides: true
            },
            1024: {
                slidesPerView: 2,
                centeredSlides: false
            }
        },

        on: {
            init: function() {
                document.querySelectorAll('.single_testimonial').forEach(testimonial => {
                    testimonial.style.opacity = '0';
                    testimonial.style.transform = 'translateX(20px)';
                });
            },
            slideChangeTransitionStart: function() {
                document.querySelectorAll('.single_testimonial').forEach(testimonial => {
                    testimonial.style.transition = 'all 0.5s ease';
                    testimonial.style.opacity = '0';
                    testimonial.style.transform = 'translateX(20px)';
                });
            },
            slideChangeTransitionEnd: function() {
                document.querySelectorAll('.single_testimonial').forEach(testimonial => {
                    testimonial.style.transition = 'all 0.5s ease';
                    testimonial.style.opacity = '1';
                    testimonial.style.transform = 'translateX(0)';
                });
            }
        }
    });

    // Observer pour les animations au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.single_testimonial').forEach((testimonial, index) => {
                    setTimeout(() => {
                        testimonial.style.opacity = '1';
                        testimonial.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }
        });
    }, { threshold: 0.2 });

    observer.observe(document.querySelector('.testimonial_area'));
});
