$(document).ready(function() {
    var slideInterval = setInterval(nextSlide, 5000); // Set initial interval
  
    function nextSlide() {
      var currentSlide = $('.banner-slide.active');
      var nextSlide = currentSlide.next('.banner-slide').length ? currentSlide.next('.banner-slide') : $('.banner-slide:first-child');
      currentSlide.animate({opacity: 0}, 800).removeClass('active');
      nextSlide.animate({opacity: 1}, 800).addClass('active');
    }
  
    function prevSlide() {
      var currentSlide = $('.banner-slide.active');
      var prevSlide = currentSlide.prev('.banner-slide').length ? currentSlide.prev('.banner-slide') : $('.banner-slide:last-child');
      currentSlide.animate({opacity: 0}, 800).removeClass('active');
      prevSlide.animate({opacity: 1}, 800).addClass('active');
    }
  
    // Click event to move to the next slide
    $('.banner-slide').on('click', function() {
      clearInterval(slideInterval); // Stop the automatic slide change
      nextSlide(); // Move to the next slide
      slideInterval = setInterval(nextSlide, 5000); // Start the interval again
    });
  
    // Click event to move to the previous slide
    $('.banner-slide').on('contextmenu', function(event) {
      event.preventDefault(); // Prevent right-click context menu
      clearInterval(slideInterval); // Stop the automatic slide change
      prevSlide(); // Move to the previous slide
      slideInterval = setInterval(nextSlide, 5000); // Start the interval again
    });
  });
  