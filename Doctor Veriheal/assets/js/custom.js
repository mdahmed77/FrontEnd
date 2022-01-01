jQuery(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();   


    // Sidebar Active class toggle scripts
    $('.left-navs > ul > li').on('click', function () {
        $('.left-navs > ul > li').not(this).removeClass('opened-nav').addClass('closed-nav');
        $(this).addClass('opened-nav').removeClass('closed-nav');
    });
    $('.left-navs ul li > ul > li').on('click', function () {
        $('.left-navs ul li > ul > li').not(this).removeClass('active');
        $(this).addClass('active');
    });

    $('input[type="text"]').each(function () {
        $(this).on('keyup', function () {
            if ($(this).val() != "") {
                $(this).addClass('filled');
            } else {
                $(this).removeClass('filled');
            }
        });
    });



    // Accordian
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this).prev(".card-link").find(".far").addClass("fa-minus").removeClass("fa-plus");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-link").find(".far").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-link").find(".far").removeClass("fa-minus").addClass("fa-plus");
    });


    $('.btn-toggle').on('click', function () {
        $('.overlay').addClass('appear');
        $('.vh-sidebar').addClass('slide-in');
    });
    $('.overlay, .btn-close').on('click', function () {
        $('.overlay').removeClass('appear');
        $('.vh-sidebar').removeClass('slide-in')
    });
    
});

    $('.pi-photo-trigger').on('click', function(){
        $('#pi-photo-uploader').click();
    });

    // Profile Picture Uploader Start
    var pipUploader = function (event) {
        var image = $('.pi-photo-holder img');
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    // Profile Picture Uploader Start End

    // Profile Picture Remover Start
    $(".remove-pi-photo").on('click', function () {
        $("#pi-photo-uploader").val("");
        $('#pi-photo').attr('src', '');
    });
    // Profile Picture Remover End



// Notification DropDown

$('.notify').on('click', function () {
    $('.drop-menu').toggleClass('show-menu');
});

$(document).mouseup(function(e){
    var container = $(".drop-menu, .notify");

    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
        $(".drop-menu").removeClass('show-menu');
    }
});