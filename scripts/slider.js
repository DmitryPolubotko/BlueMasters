function Slider(sSelector){
	var s = this;

	s.slider = $(sSelector);
	//alert("ok");

	s.pictures		=	s.slider.find(".slide"); 				// все дивы с фото в гвлерее
	s.next			=	s.slider.find(".slider__arrow_next");	// стрелка -->
	s.previous		=	s.slider.find(".slider__arrow_prev");	// стрелка <--
	s.current		=	1;										// номер текущего кружочка контроля
	s.max 			=	s.pictures.length;						// количество фото в галерее
	s.controls		=	s.slider.find(".controls__btn");		// кружочки контроля
	s.imageMain		=	s.slider.find(".slider__image");		// отображаемое фото в окне слайдера

	s.controlBtns = function(){
		var
			control = $(this); //тот контроллер что нажат в данный момент
			s.current = (s.controls.index(control)+1); //сохраняем в свойство current номер контроллера, знать какой контроллер по номеру нажат и какие номера по бокам (+1 для того что бы счет начиналсЯ с 1_го а не с 0_лЯ)
			s.imageMain.attr("src", "images/slider/" + s.current + ".jpg");
			//alert(s.current);
			s.hightLight(control);
	}
	s.hightLight = function(currentControl){
		s.controls.removeClass("controls__btn_current"); //
		currentControl.addClass("controls__btn_current");
	}
	s.showImage = function(argument) {
		s.current += argument;
		if(s.current > s.max){
			s.current = 1;
		}
		else if(s.current < 1){
			s.current = s.max
		}
		//console.log(s.current);
		s.imageMain.attr("src", "images/slider/" + s.current + ".jpg");
		s.hightLight(s.slider.find(".controls__btn:nth-child("+ s.current +")"));
		//console.log(".controls__btn:eq(" + s.current + ")");
	}
	s.showNext = function(){
		s.showImage(+1);
	}
	s.showPrew = function(){
		s.showImage(-1);
	}
	s.showPrevNextKey = function(event){
		if(event.which == 39){
			s.showImage(+1);
		}
		else if(event.which == 37){
			s.showImage(-1);
		}
	}


s.next.click(s.showNext);
s.previous.click(s.showPrew);
s.controls.click(s.controlBtns);
$("body").keyup(s.showPrevNextKey);
}