$(document).ready(function(){
  $(".call_box_cont").fancybox({
		maxWidth	: 320,
		maxHeight	: 128,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
    $('.send_button').click(function(){
        SubMail($( this ).parent());
    });
    $("a[rel=document_group]").fancybox({
                    autoScale: true,
                    fitToView: false,
                    helpers: {
                        title: {
                            type: 'inside'
                        },
                        buttons: {},
                        thumbs: {
                            width: 70,
                            height: 70
                        }
                    }
                });
    $('.flexslider').flexslider({
        animation: "slide",
        prevText: "",
        nextText: "",
        slideshowSpeed: 3000,
        directionNav: true,        
        slideshow: true
    }); 
    new WOW().init();  
    
        

	$("#VedaMainMenu").on("click","a[href^='#']", function (event) {
		//отмен€ем стандартную обработку нажати€ по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылаетс€ €корь
			top = $(id).offset().top;
		
		//анимируем переход на рассто€ние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
    
    if($('.Article_heda_cont')){
        HeadMargn=$('.Article_heda_cont').outerHeight()+40;
        $('.Article_heda_cont').css('marginTop',"-"+HeadMargn+'px');
    }
});
function SubMail(SubForm){
  SubForm.submit();
}
function ReviewsInit(){
    AllReview=$('#reviews_cont').children('.client_review');
    RevH=0;
    RevH2=0;
    i=0;
    ReviewsShow=0;
    AllReview.each(function(){
        RevH+=parseInt($(this).outerHeight(true));
        i++;
        if(i==2){
            RevH2=RevH;
        }
    });
    $('#reviews_cont').height(RevH2);
}
function RevSetH(NewH){
    $('#reviews_cont').animate({
        height: NewH+"px"
    }, 600);
}
function RevButtonClick(RevBtn,NewHTML,ClassToAdd,ClassToRemove){
        RevBtn.fadeOut(0);
        RevBtn.html(NewHTML);
        RevBtn.removeClass(ClassToRemove);
        RevBtn.addClass(ClassToAdd);
        RevBtn.fadeIn(300);    
}
function RevShowHide(){
    RevBtnEl=$('.review_button');
    if(ReviewsShow==1){
        ReviewsShow=0;
        RevSetH(RevH2);
        RevButtonClick(RevBtnEl,'¬се отзывы','review_show','review_hide');
    }
    else{
        ReviewsShow=1;
        RevSetH(RevH);
        RevButtonClick(RevBtnEl,'—крыть','review_hide','review_show'); 
    }
}
