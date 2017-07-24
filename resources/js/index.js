var url = 'https://api.instagram.com/v1/users/37619101/media/recent?access_token=37619101.34e42b0.225c784d9f6948b7929faf8835681018'

$(document).ready(function() {
    $.ajax({
        url: url,
        type: "GET",
        crossDomain: true,
        dataType: "jsonp",
        success: function(data){
            var imageArr = data.data;
            for(var image of imageArr){
                console.log(image.caption.text)
            }
        }
    });


    $('#submitbtn').click(function(e) {
        e.preventDefault()
        var name = $('#name').val()
        var email = $('#email').val()
        var message = $('#message').val()
        $.ajax({
            url: "https://formspree.io/evgeni.tsn@gmail.com", 
            method: "POST",
            data: {
                name: name, 
                email: email, 
                message: message
            },
            dataType: "json"
        });
    })

    $('.js-sticky-nav').waypoint(function(direction) {
        if(direction === 'down') {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '15%'
    })

    $('.js-scroll-to-contact').click(function() {
        $('html, body').animate({
            scrollTop: $('.js-section-contact').offset().top
        }, 1000)
    })

    $('.js-scroll-to-start').click(function() {
        $('html, body').animate({
            scrollTop: $('.js-section-start').offset().top
        }, 1000)
    })

    // Navigation scroll

    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }}
    });

    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated fadeIn')
    }, {
        offset: '75%'
    })

    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animated fadeIn')
    }, {
        offset: '75%'
    })

    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animated fadeIn')
    }, {
        offset: '75%'
    })

    $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animated fadeIn')
    }, {
        offset: '75%'
    })
})
