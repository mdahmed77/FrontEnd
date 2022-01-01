$(document).ready(function() {
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
        $('.MblMenu').toggleClass('backgroundopen');
    });
    $("#nav-icon2").click(function(){
        $(".MblHdrNav").slideToggle();
    });

    $.each($('.menu-item'), function() {
        if($(this).hasClass('menu-item-has-children')){
        $(this).addClass('no-link');
        }
    });
    
    $(".Navigation ul li.menu-item-has-children").prepend('<div class="caretbox"></div>'), 
    $(".Navigation ul li.menu-item-has-children > .caretbox").click(function() {
    return $(this).parent().toggleClass("expanding"), $(this).siblings(".sub-menu").slideToggle(), !1}), 
    $(".Navigation ul li.menu-item-has-children.no-link > a").click(function() {
    return $(this).parent().toggleClass("expanding"), $(this).siblings(".sub-menu").slideToggle(), !1});

	$('#SignIn').on('click', function(event) {
		event.preventDefault();
		$('.LoginPageForm').css('display', 'flex');
		$('.RegistrationPageForm').css('display', 'none');
		$('#SignIn').css('display', 'none');
		$('#SignUp').css('display', 'block');
		$('.LoginPageDetails p').html('Fill up personal information and start journey with us.');
	});
	$('#SignUp').on('click', function(event) {
		event.preventDefault();
		$('.RegistrationPageForm').css('display', 'flex');
		$('.LoginPageForm').css('display', 'none');
		$('.LoginPageDetails p').html('to keep connected with us please login with your persoal info');
		$('#SignUp').css('display', 'none');
		$('#SignIn').css('display', 'block');
	});
	$(document).on('click', '.LegalisationFormPageAllTabsUl li', function(event) {
		event.preventDefault();
		$('.LegalisationFormPageAllTabsUl li').removeClass('active');
		$(this).addClass('active');
		var	tabIndex = $(this).attr('tab-index');
		$('.LegalisationFormPageForm1').removeClass('active');
		$('.LegalisationFormPageForm2').removeClass('active');
		$('.LegalisationFormPageForm3').removeClass('active');
		$('.LegalisationFormPageForm4').removeClass('active');
		$('#'+tabIndex).addClass('active');
	});
	$( function() {
	    $( "#datepicker" ).datepicker();
	});
    $(function() {
        $('#month').datepicker( {
        changeMonth: true,
        changeYear: false,
        showButtonPanel: true,
        dateFormat: 'MM',
        onClose: function(dateText, inst) { 
            $(this).datepicker('setDate', new Date(inst.selectedMonth, 1));
        }
        });
    });
    $(function() {
        $('#year').datepicker( {
        changeMonth: false,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'yy',
        onClose: function(dateText, inst) { 
            $(this).datepicker('setDate', new Date(inst.selectedYear, 1));
        }
        });
    });
    $('.PoplrVisa').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 401,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
        ]
    });
    $('.CstmFedBckSldr').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.carousel').flickity({
        groupCells: true,
        pageDots: false
    });
});