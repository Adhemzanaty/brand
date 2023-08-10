



$(document).ready(function () {

    $(".loding").fadeOut(2000, function () {

        $("body").css("overflow", "auto")
    })


// wow

 new WOW().init();


  //owl carsoul

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout : 2000,
        smartSpeed:2000
    });
  });

   // navbar

   $(window).scroll(function () {

    let scrollValue = $(window).scrollTop();

    if (scrollValue >= 25) {

        $(".navbar").css({

            backgroundColor: "white",
            transition: "all 0.5s",
            boxShadow: "0px 6px 9px 0px rgba(0, 0, 0, 0.06)"

        })
        $(".navbar a").css({
            color: "black",
            transition: "all 0.5s"

        })
        $(".navbar-toggler i").css({
            color: "black",
            transition: "all 0.5s"

        })



    }
    else {
        $(".navbar").css({

            backgroundColor: "transparent",
            transition: "all 0.5s",
        })
        $(".navbar a").css({
            color: "white",
            transition: "all 0.5s"

        })
        $(".navbar-toggler i").css({
            color: "white",
            transition: "all 0.5s"

        })

    }
})




    // زرار السهم اللي بيودى الهوم 


    $(".btnIcon").click(function () {

        $("body,html").animate({
            scrollTop: "0"

        }, 1000);
    });



    $(window).scroll(function () {

        let scrollValue = $(window).scrollTop();

        let homeHeight = $("#About").offset().top;

        if (scrollValue > homeHeight) {

            $(".btnIcon").fadeIn(1000);
        }
        else {
            $(".btnIcon").fadeOut(1000);
        }

    })


    // links with smotheeeeeeeeeeeee

    $(".nav-link").click(function () {

        let secName = $(this).attr("href");
        console.log(secName)

        let scrollToSec = $(secName).offset().top;

        $("body,html").animate({
            scrollTop: scrollToSec

        }, 1000);

    })




    // option box

    $(".icon-box").click(function () {


        let outerW = $(".colors-box").outerWidth()

        let left = $(".option-box").css("left")

        if (left == "0px") {


            $(".option-box").animate({

                left: -outerW
            }, 1000);
        }
        else {

            $(".option-box").animate({

                left: 0
            }, 1000);
        }



    })

    $(".colors-box ul li").click(function () {

        let liColor = $(this).css("backgroundColor")

        $(".myFavColor").css("color", liColor)
    })

})

















