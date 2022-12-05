$(document).ready(function() {
	

  
$("body").niceScroll({
cursorcolor:"#333",
cursorwidth:"12px",
cursorborder:"none"
});


$("#phone1").mask("+7(999) 999-99-99");

// hide #back-top first
//$("#top").hide();




//jQuery(function(f){
//    var element = f('#top');
//    f(window).scroll(function(){
//        element['fade'+ (f(this).scrollTop() > 300 ? 'In': 'Out')](500);           
//    });
//});





//  $("#menu, #top").on("click","a", function (event) {
//        //отменяем стандартную обработку нажатия по ссылке
//        event.preventDefault();
//        //забираем идентификатор бока с атрибута href
//        var id  = $(this).attr('href'),
//        //узнаем высоту от начала страницы до блока на который ссылается якорь
//        top = $(id).offset().top;
//        //анимируем переход на расстояние - top за 1500 мс
//        $('body,html').animate({scrollTop: top}, 1500);
//
//      });




});




