$(document).ready(function () {
    $('.toggler').on('click', function () {
        if ($('.toggler i').hasClass('fa-ellipsis-v')) {
            $('.toggler i').removeClass('fa-ellipsis-v');
            $('.toggler i').addClass('fa-bars');
        } else {
            $('.toggler i').removeClass('fa-bars');
            $('.toggler i').addClass('fa-ellipsis-v');
        }
        if ($('.sidebar').hasClass('iconed')) {
            $('.sidebar').removeClass('iconed');
        } else {
            $('.sidebar').addClass('iconed');
        }
    });

    $('.h-dock').on('click', function () {
        if ($('.user-drop').hasClass('open')) {
            $('.user-drop').removeClass('open');
        } else {
            $('.user-drop').addClass('open');
        }
    });

    $('.drop-item').mouseover(function () {
        $(this).find('.far').removeClass('fa-chevron-right').addClass('fa-chevron-left');
    });
    $('.drop-item').mouseleave(function () {
        $(this).find('.far').addClass('fa-chevron-right').removeClass('fa-chevron-left');
    });

    $('#countinue-a').on('click', function(){
        $('.step-a').addClass('vanish done');
        var $this = $('.step-b');
        window.setTimeout(function(){
            $this.removeClass('vanish');
        }, 500);
    });
    $('.backToA').on('click', function(){
        $('.step-b').addClass('vanish');
        var $this = $('.step-a');
        window.setTimeout(function(){
            $this.removeClass('vanish');
        }, 500);
    });
    $('#countinue-b').on('click', function(){
        $('.step-b').addClass('vanish done');
        var $fullWidth = $('.register-box .form-holder');
        window.setTimeout(function(){
            $fullWidth.addClass('w100');
        }, 750);
        var $bg = $('.side-bg');
        window.setTimeout(function(){
            $bg.addClass('faint');
        }, 750);
        var $nopadding = $('.register-box .brand-img');
        window.setTimeout(function(){
            $nopadding.addClass('pl0');
        }, 500);
        var $this = $('.step-c');
        window.setTimeout(function(){
            $this.removeClass('vanish');
        }, 1750);
    });
    $('.backToB').on('click', function(){
        $('.step-c').addClass('vanish');
        var $fullWidth = $('.register-box .form-holder');
        window.setTimeout(function(){
            $fullWidth.removeClass('w100');
        }, 750);
        var $bg = $('.side-bg');
        window.setTimeout(function(){
            $bg.removeClass('faint');
        }, 750);
        var $nopadding = $('.register-box .brand-img');
        window.setTimeout(function(){
            $nopadding.removeClass('pl0');
        }, 500);
        var $this = $('.step-b');
        window.setTimeout(function(){
            $this.removeClass('vanish');
        }, 1750);
    });
    $('.btn-eye').on('click', function(){
        if($('.btn-eye i').hasClass('fa-eye')){
            $('.btn-eye i').removeClass('fa-eye').addClass('fa-eye-slash');
            document.getElementById('newPass').type = 'password';
        } else {
            $('.btn-eye i').removeClass('fa-eye-slash').addClass('fa-eye');
            document.getElementById('newPass').type = 'text';
        }
    });

    $('.choose-platform').on('click', function(){
        $('.choose-list').addClass('pop');
    });
    $('.backToForm').on('click', function(){
        $('.choose-list').removeClass('pop');
    });

    $('.skipStep').on('click', function(){
        $('.step-c').addClass('vanish done');
        var $this = $('.congrats');
        window.setTimeout(function(){
            $this.removeClass('vanish');
        }, 500);
    });
    
    $('.requestPass').on('click', function(){
        var $this = $('.passRequestForm');
        window.setTimeout(function(){
            $this.removeClass('vanish');
        }, 500);
        $('.lForm').addClass('vanish');
        $('.login > p').addClass('d-none');
    });
    $('.backToL').on('click', function(){
        $('.passRequestForm').addClass('vanish');
        var $this = $('.lForm');
        window.setTimeout(function(){
            $this.removeClass('vanish');
        }, 500);
        $('.login > p').removeClass('d-none');
    });

    $('.form-group.invalid label .fa-question-circle').on('click', function(){
        $(this).parent().parent().find('.error').addClass('show-error');
    });

});