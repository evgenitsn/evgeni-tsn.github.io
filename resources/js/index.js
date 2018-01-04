var url = 'https://api.instagram.com/v1/users/37619101/media/recent?access_token=37619101.34e42b0.225c784d9f6948b7929faf8835681018'

setTimeout(() => $('#black-overlay').remove(), 2000)

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(function () {
        console.log('Service worker registered!');
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  
$(document).ready(function() {
    // $.ajax({
    //     url: url,
    //     type: "GET",
    //     crossDomain: true,
    //     dataType: "jsonp",
    //     success: function(data){
    //         var imageArr = data.data;
    //         for(var image of imageArr){
    //             console.log(image.caption.text)
    //         }
    //     }
    // });


    $('#submitbtn').on('click', function(e) {
        
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
        }).done(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1000)
            $('#name').val('')
            $('#email').val('')
            $('#message').val('')
        })
        console.log('Sent')
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
            scrollTop: $('.js-section-contact').offset().top - 50
        }, 1000)
    })

    $('.js-scroll-to-start').click(function() {
        $('html, body').animate({
            scrollTop: $('.js-section-start').offset().top - 50
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
                scrollTop: target.offset().top - 50
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

    $(".js-logo").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
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

    // Mobile Nav

    var nav = $('.js-main-nav')
    $('.js-main-nav li a, .js-nav-icon').click(function() {
        var icon = $('.js-nav-icon i')
        if($(window).width() < 768){
            nav.slideToggle(200)
            if(icon.hasClass('fa-bars')){
                icon.addClass('fa-times')
                icon.removeClass('fa-bars')
            } else {
                icon.addClass('fa-bars')
                icon.removeClass('fa-times')
            }
        }
    })

    $(window).resize(function() {
        if($(window).width() >= 768){
            nav.show()
        } else {
            nav.hide()
        }
    })
})
