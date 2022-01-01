$(document).ready(function() {
    $('#theme').on('change', function() {
        if ($(this).is(':checked')) {
            $('.board-wrapper').addClass('dark');
            $('.dark-text').removeClass('dark-text').addClass('light-text');
            $('.panel').removeClass('panel-light').addClass('panel-dark');
            $('.feed-post').removeClass('feed-light').addClass('feed-dark');
            $('.modal').addClass('dark-modal');
        } else {
            $('.board-wrapper').removeClass('dark');
            $('.light-text').removeClass('light-text').addClass('dark-text');
            $('.panel').removeClass('panel-dark').addClass('panel-light');
            $('.feed-post').addClass('feed-light').removeClass('feed-dark');
            $('.modal').removeClass('dark-modal');
        }
    });

    $('.toggleSidebar').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.toggleSidebar i').removeClass('fa-times').addClass('fa-bars');
            $('.sidebar').removeClass('slideOut');
            $('.ultron').removeClass('push');
        } else {
            $(this).addClass('active');
            $('.toggleSidebar i').addClass('fa-times').removeClass('fa-bars');
            $('.sidebar').addClass('slideOut');
            $('.ultron').addClass('push');
        }
    });
    $('.drop').each(function() {
        $(this).on('click', function() {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $(this).find('.drop-links').slideUp(200);
            } else {
                $('.drop').removeClass('open')
                $('.drop').find('.drop-links').slideUp(200);
                $(this).addClass('open');
                $(this).find('.drop-links').slideDown(200);
                // $('.toggleSidebar').removeClass('active');
                // $('.toggleSidebar i').removeClass('fa-times').addClass('fa-bars');
                // $('.sidebar').removeClass('slideOut');
                // $('.brand').text('Dragon');
            }
        });
    });
    $('[data-bs-toggle]').on('click', function() {
        if ($('body').hasClass('modal-open')) {
            $('html').css('overflow-y', 'hidden')
        }
    });
    $('.modal').on('hidden.bs.modal', function() {
        $('html').css('overflow-y', 'auto');
    });
    $('.linked').click(function() {
        var linkedURL = $(this).attr('data-href');
        window.location.href = linkedURL;
    })
});