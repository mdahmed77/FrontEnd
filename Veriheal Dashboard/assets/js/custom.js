jQuery(document).ready(function () {
    
    // WIZARD START HERE

    $('.vh-step .steps-header .next-link').each(function(){
        $(this).on('click',function(){
            $(this).parent().parent().hide();
            $(this).parent().parent().next().show();
        });
    });
    $('.vh-step .steps-header .back-link').each(function(){
        $(this).on('click',function(){
            $(this).parent().parent().hide();
            $(this).parent().parent().prev().show();
        });
    });
    
    $('.vh-step .wizard-controls .btn-next').each(function(){
        $(this).on('click',function(){
            if ($(this).parent().parent().parent().parent().hasClass('vh-step')){
                $(this).parent().parent().parent().parent().hide();
                $(this).parent().parent().parent().parent().next().show();
            } else {
                $(this).parent().parent().parent().parent().parent().hide();
                $(this).parent().parent().parent().parent().parent().next().show();
            }
        });
    });
    
    $('.vh-step .wizard-controls .btn-back').each(function(){
        $(this).on('click',function(){
            if ($(this).parent().parent().parent().parent().hasClass('vh-step')){
                $(this).parent().parent().parent().parent().hide();
                $(this).parent().parent().parent().parent().prev().show();
            } else {
                $(this).parent().parent().parent().parent().parent().hide();
                $(this).parent().parent().parent().parent().parent().prev().show();
            }
        });
    });


    // WIZARD END HERE

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



    // DASHBOARD Appointments Slider

    $('.appointments-slider').owlCarousel({
        margin: 0,
        dots: false,
        loop: false,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        dots: false,
        responsive: {
            0: {
                items: 1,
                stagePadding:0
            },
            760: {
                stagePadding:60,
                items: 1
            }
        }
    });

    //MY APPOINTMENTS Appointments Slider

    $('.ap-slider').owlCarousel({
        margin: 0,
        dots: false,
        loop: false,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1440: {
                items: 3
            }
        }
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


    // Appointment Progress

    var bar = new ProgressBar.Circle('#aprogress', {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 8,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#ed916a',
            width: 8
        },
        to: {
            color: '#ed916a',
            width: 8
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + '%');
            }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '20px';
    var val = $("#aprogress").attr('data-value');
    var amount = parseFloat(val) / 100;
    bar.animate(amount);
});


// Profile Picture Uploader Start
var profileUploader = function (event) {
    var image = document.getElementById('profile-img');
    image.src = URL.createObjectURL(event.target.files[0]);
    $(".remove-profile").show();
};
// Profile Picture Uploader Start End

// Profile Picture Remover Start
$(".remove-profile").on('click', function () {
    $("#profile-upload").val("");
    $('#profile-img').attr('src', '');
    $(this).hide();
});
// Profile Picture Remover End

// ID CARD Picture Uploader Start
var idCardUploader = function (event) {
    var image = document.getElementById('idCard-img');
    image.src = URL.createObjectURL(event.target.files[0]);
    $(".remove-idCard").show();
};
// ID CARD Picture Uploader End


// ID CARD Picture Remover Start
$(".remove-idCard").on('click', function () {
    $("#id-upload").val("");
    $('#idCard-img').attr('src', '');
    $(this).hide();
});
// ID CARD Picture Remover End




//Change Profile Picture Start
var changeUploader = function (event) {
    var image = document.getElementById('current-profile-img');
    image.src = URL.createObjectURL(event.target.files[0]);
};
//Change Profile Picture End



// Date Picker LANGUAGE REST Script
$.fn.datepicker.language['en'] = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'mm/dd/yyyy',
    timeFormat: 'hh:ii aa',
    firstDay: 0
};

// Initialize datepicker with it
$('#select-date').datepicker({
    language: 'en',
    minDate: new Date()
});

// Initialize datepicker with it
$('#current-month-dates').datepicker({
    language: 'en',
    minDate: new Date()
});

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
