$(document).ready(function () {

    $(".loding").fadeOut(1000, function () {

        $("body").css("overflow", "auto")
    })



    $(".myImg").click(function(){


        
   let imgSrc =  $(this).attr("src");

   $(".store-img img").attr("src" , imgSrc);



    })










});