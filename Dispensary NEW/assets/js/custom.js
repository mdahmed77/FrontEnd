var placeholder = (function () {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
            var navHeight = $('.navbar').outerHeight();
            $('.navbar').before('<div class="placeholder"></div>');
            $('.placeholder').outerHeight(navHeight);
        }
    };
})();
if ($(window).width() > 991) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("sticky");
            placeholder();
            $('.placeholder').show();
        } else {
            $('.navbar').removeClass("sticky");
            $('.placeholder').hide();
        }
    });
}

function onNav() {
    $('.navbar-toggler.on').on('click', function () {
        $('.mobile-menu').removeClass('insert');
        $('.overlay').removeClass('show-overlay');
        $('.navbar-toggler i').addClass('fa-bars').removeClass('fa-times');
        $('.navbar-toggler.on').addClass('off').removeClass('on');
        $('html').css('overflow-y', 'visible');
        offNav();
    });
    $('.show-overlay').on('click', function () {
        $('.mobile-menu').removeClass('insert');
        $('.overlay').removeClass('show-overlay');
        $('.navbar-toggler i').addClass('fa-bars').removeClass('fa-times');
        $('.navbar-toggler.on').addClass('off').removeClass('on');
        $('html').css('overflow-y', 'visible');
        offNav();
    });
}

function offNav() {
    $('.navbar-toggler.off').on('click', function () {
        $('.mobile-menu').addClass('insert');
        $('.overlay').addClass('show-overlay');
        if ($('.mobile-menu').hasClass('insert')) {
            $('.navbar-toggler.off').addClass('on').removeClass('off');
            $('.navbar-toggler i').removeClass('fa-bars').addClass('fa-times');
            $('html').css('overflow-y', 'hidden');
            onNav();
        }
    });
}

$(document).ready(function () {


    offNav();

    $("#searchRange").ionRangeSlider({
        skin: "round",
        min: 0,
        max: 100,
        from: 55,
        grid: false,
        force_edges: true,
        hide_min_max: true,
        hide_from_to: false
    });
    var range;
    $(".search-container").mouseup(function () {
        range = $('.irs .irs .irs-single').text();
        $('.rangeVal').text(range);
    });

    $("#filterRange").ionRangeSlider({
        skin: "round",
        min: 0,
        max: 50,
        from: 25,
        grid: false,
        force_edges: true,
        hide_min_max: false,
        hide_from_to: false,
        postfix: " Miles"
    });
    $('[data-toggle="popover"]').popover({
        trigger: "hover"
    });


    $('.videos-slider').owlCarousel({
        margin: 15,
        dots: false,
        loop: true,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        dots: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            760: {
                stagePadding: 60,
                items: 1
            }
        }
    });

    $(function () {
        $("#summaryRates").rateYo({
            rating: 4.3,
            readOnly: true,
            normalFill: "#ededed",
            ratedFill: "#fec107",
            starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
        });
    });

    $(function () {
        $(".commonRating").rateYo({
            starWidth: "20px",
            rating: 4.3,
            readOnly: true,
            normalFill: "#ededed",
            ratedFill: "#fec107",
            starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
        });
    });

    defaultRate('reviewRates', '0');

    function defaultRate(divId, value) {
        $("#" + divId).rateYo({
            rating: value,
            starWidth: "36px",
            normalFill: "#ededed",
            ratedFill: "#fec107",
            fullStar: true,
            spacing: "2px",
            starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
        });
    }

    $('#reviewRates').on('click', function () {
        var output, rateWidth, defaultWidth;
        defaultWidth = $('#reviewRates .jq-ry-normal-group').width();
        rateWidth = $('#reviewRates .jq-ry-rated-group').width();
        output = (rateWidth / defaultWidth) * 100;
        var rating = output * 5 / 100;
        $('.ratedStars').text(rating.toFixed(1));
    });

    // Review Picture Upload Start
    $('.review-form .upload-photo .photo-holder, .review-form .upload-photo span').on('click', function () {
        $('.review-form .upload-photo input[type="file"]').click();
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#rphoto').attr('src', e.target.result);
                $('#rphoto').removeClass('invisible');
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $('.review-form .upload-photo input[type="file"]').change(function () {
        readURL(this);
    });
    // Review Picture Upload End

    // Profile Picture Change Start
    $('.account-panel .profile-photo .image-holder, .account-panel .profile-photo span').on('click', function () {
        $('.account-panel .profile-photo input[type="file"]').click();
    });

    function readProfileURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#pphoto').attr('src', e.target.result);
                $('#pphoto').removeClass('invisible');
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $('.account-panel .profile-photo input[type="file"]').change(function () {
        readProfileURL(this);
    });
    // Profile Picture Change End


    // Profile Picture Remove Start
    $(".account-panel .remove-image").on('click', function () {
        $('#pphoto').attr('src', '');
        $('#pphoto').addClass('invisible');
    });
    // Profile Picture Remove End

    $('.progress .progress-bar').each(function () {
        var dataProgress;
        dataProgress = $(this).attr('data-progress');
        $(this).css('width', dataProgress + '%');
    });

    $(".login-details .form-group .edit").on('click', function () {
        $(this).addClass('d-none');
        $(this).parent().removeClass('read-only');
    });
    $("#updateLoginDetails").on('click', function () {
        $(".login-details .form-group .edit").removeClass('d-none');
        $(".login-details .form-group").addClass('read-only');
    });


    // Dispensary Slots Delete Method Start
    $(".disp-slot .slot-actions .del").each(function () {
        $(this).on('click', function () {
            $(this).parentsUntil('.row').remove();
        });
    });
    // Dispensary Slots Delete Method END

    // Add Dispansary File Uploader Start
    $(".add-dispensary-form .input-group .upload-file").each(function () {
        $(this).click(function () {
            $(this).next().click();
        });
    });
    $('.add-dispensary-form .input-group input[type="file"]').each(function () {
        $(this).change(function () {
            var filePath = $(this).val();
            var fileName = filePath.replace(/^.*[\\\/]/, '')
            $(this).parent().prev().val(fileName);
        });
    });
    // Add Dispansary File Uploader End

    var mq = window.matchMedia("(max-width: 1199px)");
    if (mq.matches) {
        sPannel();
        $(".controlers > div").each(function () {
            $(this).click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                sPannel();
            });
        });
    }
    $(window).resize(function () {
        if (mq.matches) {
            sPannel();
            $(".controlers > div").each(function () {
                $(this).click(function () {
                    $(this).addClass('active').siblings().removeClass('active');
                    sPannel();
                });
            });
        } else {
            $('.search-results').removeClass('d-none');
            $('.filter-holder').removeClass('d-none');
        }
    });
});

function sPannel() {
    if ($('.show-map').hasClass('active')) {
        $('.search-results').addClass('d-none');
        $('.filter-holder').addClass('d-none');
    }
    if ($('.show-results').hasClass('active')) {
        $('.search-results').removeClass('d-none');
        $('.filter-holder').addClass('d-none');
    }
    if ($('.show-filters').hasClass('active')) {
        $('.search-results').addClass('d-none');
        $('.filter-holder').removeClass('d-none');
    }
}