jQuery(document).ready(function () {
    $('.btn-toggler').on('click', function () {
        $('.navs').fadeToggle();
    });
    // if ($(window).width() < 975) {
    //     $('.navs').addClass('mobile-menu');
    // }
    // else {
    //     $('.navs').removeClass('mobile-menu');
    // }
});
// $(document).mouseup(function (e) {
//     var container = $(".mobile-menu");

//     // if the target of the click isn't the container nor a descendant of the container
//     if (!container.is(e.target) && container.has(e.target).length === 0) {
//         container.slideToggles();
//     }
// });