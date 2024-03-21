$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true, // Make the scrolling effect infinite
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
});

// Update h1 and p elements on slide change
$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var h1Text = ''; // Update with your desired text for h1
    var pText = ''; // Update with your desired text for p

    // Example: Update h1 and p based on the current slide number
    switch (nextSlide) {
        case 0:
            h1Text = 'Slide 1 Title';
            pText = 'Slide 1 Description';
            break;
        case 1:
            h1Text = 'Slide 2 Title';
            pText = 'Slide 2 Description';
            break;
        case 2:
            h1Text = 'Slide 3 Title';
            pText = 'Slide 3 Description';
            break;
        // Add cases for additional slides if needed
    }

    // Update h1 and p elements
    $('h1').text(h1Text);
    $('p').text(pText);
});
