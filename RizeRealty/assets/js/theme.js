$(document).ready(function() {
    $('.close-btn').on('click', function() {
        $('.mobile-menu').removeClass('menuView');
        $('.overlay').removeClass('solid');
    });
    $('.overlay').on('click', function() {
        $('.mobile-menu').removeClass('menuView');
        $('.overlay').removeClass('solid');
    });
    $('.btn-menu').on('click', function() {
        $('.mobile-menu').addClass('menuView');
        $('.overlay').addClass('solid');
    });

    $('.drop button').each(function() {
        $(this).on('click', function() {
            if($(this).hasClass('active'))
            {
                $(this).removeClass('active');
            } else {
                $('.drop button').removeClass('active');
                $(this).addClass('active');
            }
        });
    });
});
$(document).mouseup(function(e) 
{
    var container = $(".drop");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('.drop button').removeClass('active');
    }
});