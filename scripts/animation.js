//Анимации

//Мигание
function changeOpa(a){
	$(a).animate({
		opacity:'0'
	}, 'slow')
	$(a).animate({
		opacity:'1'
	}, 'slow')
}

function mirc(a){
	if(removeAnima){
		setTimeout(function(){changeOpa(a),mirc(a)}, 10)
	}
}

//масштабирование
function aside(a){
	if(removeAnima){
		setTimeout(function(){side(a),aside(a)}, 10)
	}
}

function side(n){
	h = $(n).css('height')
	w = $(n).css('width')
	$(n).animate({
		height: '-=10px',
		width: '-=10px',
		lineHeight: '-=10px',
		'font-size': '-=10px'
	},'fast');
	$(n).animate({
		height: '+=10px',
		width: '+=10px',
		lineHeight: '+=10px',
		'font-size': '+=10px'
	},'fast')
}

//Покачивания
function shakeIt(a){
	if(removeAnima){
		setTimeout(function(){wiggle(a),shakeIt(a)}, 0)
	}else{$(n).animate({
		'rotate':'0deg'		
	},'fast')
		
	}
}

function wiggle(n){
	$(n).children('span').animate({
		'rotate':'10deg'		
	},'fast')	
	$(n).children('span').animate({
		'rotate':'-10deg'		
	},'fast')
}

//Запуск анимаций
function setAnimation(n){
		removeAnima = true
		for(var i = n;i>0;i--){
			b = i
			c = '#'+b
			if(getRandomInt(0,11)>5){
				mirc(c)
				continue;
			}
			if(getRandomInt(0,11)<5){
				shakeIt(c)
				continue;
			}
			/*if(getRandomInt(0,11)<11){
				aside(c)
				continue;
			}*/
		}
}

//Изменения фона
//Изменние фона главного окна
function setBackgroundMain(){
	f = getRandomInt(0,11)
	switch(f){
		case 0: 
			$('.all_game').css('background-color','#4db8ec')
		break
		case 1:
			$('.all_game').css('background-color','#8e3dcb')
		break
		case 2:
			$('.all_game').css('background-color','#94c94d')
		break
		case 3:
			$('.all_game').css('background-color','#fc73b0')
		break
		case 4:
			$('.all_game').css('background-color','	#f28e37')
		break
		case 5:
			$('.all_game').css('background-color','	#FFFF33')
		break
		case 6:
			$('.all_game').css('background-color','	#CC0000')
		break
		case 7:
			$('.all_game').css('background-color','	#FF33CC')
		break
		case 8:
			$('.all_game').css('background-color','	#6633FF')
		break
		case 9:
			$('.all_game').css('background-color','	#00FFCC')
		break
		case 10:
			$('.all_game').css('background-color','	#00FF99')
		break
	}
}

//Изменние фона кнопок
function setBackgroundItems(n){
	switch(getRandomInt(0,11)){
		case 0: 
			$(n).css('background-color','#4db8ec')
		break
		case 1:
			$(n).css('background-color','#8e3dcb')
		break
		case 2:
			$(n).css('background-color','#94c94d')
		break
		case 3:
			$(n).css('background-color','#fc73b0')
		break
		case 4:
			$(n).css('background-color','#f28e37')
		break
		case 5:
			$(n).css('background-color','	#FFFF33')
		break
		case 6:
			$(n).css('background-color','	#CC0000')
		break
		case 7:
			$(n).css('background-color','	#FF33CC')
		break
		case 8:
			$(n).css('background-color','	#6633FF')
		break
		case 9:
			$(n).css('background-color','	#00FFCC')
		break
		case 10:
			$(n).css('background-color','	#00FF99')
		break
	}
}

//Запуск изменений фона
function setBackgroundAll(){
	setBackgroundMain()
	for(var i = 24;i>0;i--){
			c = '#'+i
			setBackgroundItems(c)
	}
}