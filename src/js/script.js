$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1300,
        //adaptiveHeight: true,
        prevArrow : '<button type="button" class="slick-prev"><img src="img/caurosel/chevron_left.png"></button>',
        nextArrow : '<button type="button" class="slick-next"><img src="img/caurosel/chevron_right.png"></button>',
    });


    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
            })
        })
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Model window

    $('[data-modal="consultation"]').on('click',function() {
        $('.overlay, #consultation' ).fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks ').fadeOut('fast');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });
    
    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                required: true,
                minlength: 2
                },
            phone: "required",
            email: {
                required: true,
                email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста введите ваше имя",
                    minlength: jQuery.validator.format("Введите не мение {2} символов!")
                },
                phone: "Пожалуйста введите номер телефона",
                email: {
                    required: "Пожалуйста, введите свой почтовый аддрес",
                    email: "Неверная почта"
                }
            }
        });
    };
    valideForms('#consultation-form');
    valideForms('#order form');
    valideForms('#consultation form');

    $('input[name=phone]').mask("+7(999) 999-99-99",{placeholder:"_"}); //Убрать в Form type namber

    $('form').submit(function(e) {    // отправка форм на почту
        e.preventDefault();

        if (!$(this).valid()) {  
            return;
        }//Условие чтоб не отправлялась пустая форма 

        $.ajax({
            type: "POST",
            url: "../mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut(); 
            $('.overlay, #thanks').fadeIn('slow');
            
            $('form').trigger('reset');
        });
        return false;
    });

    // scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
});


