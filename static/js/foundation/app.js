jQuery(document).ready(function($) {


    $("#resumetoggle").hide();
    $(document).foundation().ready( function() {
        $("#toggler").click(function() {
            $("#formtoggle").slideToggle("slow");
            $('html, body').animate({
                scrollTop: $("#formtoggle").offset().top + $('window').height()
            }, 2000);
        });

        $("#resumetoggler").click(function() {
            if(window.innerWidth >= 800 && window.innerHeight >= 600) {
                $("#resumetoggle").slideToggle("slow");
                $('html, body').animate({
                    scrollTop: $("#resumetoggle").offset().top + $('window').height() - 110
                }, 2000);
            } else { window.open("https://drive.google.com/file/d/0BxQd1KnFtuYrMDZaSHp1T2xTdXc/view?usp=sharing");}
        });

        $(".topa").click(function(e){
            e.preventDefault();
            var section = $(event.target).attr("href");
            console.log(section);
            $('html, body').animate({
                scrollTop: $(section).offset().top + $('window').height() - 110
            }, 1000);
        });

        $(".up").click(function(e){
            e.preventDefault();
            var section = $(event.target).attr("href");
            console.log(section);
            $('html, body').animate({
                scrollTop: $(section).offset().top + $('window').height() - 110
            }, 1000);
        });

    });
    $(document).ready(function(){
      $('.slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots:true,
          speed: 500,
          fade: true,
          cssEase: 'linear',
          arrows:true,
          autoplay: true,
          autoplaySpeed: 5000,
          adaptiveHeight: false,
          pauseOnHover: true,
          draggable: false,
          pauseOnFocus: true,


            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });

    });

});