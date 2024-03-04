
// 메인 이미지

$('#mainslidelist').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    arrows : false,
});


// 브랜드 추천 상품
$('.s02_bt li').click(function (e) {
    e.preventDefault();
    let idx = $(this).index();
    $('.s02_bt li').removeClass('on');
    $('.s02_pannel .pan').removeClass('view');
    $(this).addClass('on');
    $('.s02_pannel .pan').eq(idx).addClass('view');
})
