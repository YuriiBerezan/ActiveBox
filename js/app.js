$(function () {
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH)

    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH)
    //  console.log(scrollPos);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
        header.addClass("fixed");
        } 
        else {
        header.removeClass("fixed");
        }
    }

    $("[data-scroll]").on("click", function (event) {
       
        event.preventDefault();

        let elemntId = $(this).data('scroll');

        let elementOffset = $(elemntId).offset().top;
        console.log(elementOffset);

        $("html , body").animate({
            scrollTop: elementOffset -58
        }, 700);

    });
   
    

});