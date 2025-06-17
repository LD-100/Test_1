var timer_counter = 63
var scoor = 0
var bonus_scoor = 0
var removeAnima = true
var level_counter = 0
$('.number_task_item').hide()
$('.wrong').hide()
$('.right').hide()


//Игровой таймер
function timer(time){
	if(time > 0){
		if(time ==60){
		}else{
			if(time > 10){
				$('.game-menu_item_time > .game-menu_item_index').text("00:"+time)
			}else{
				$('.game-menu_item_time > .game-menu_item_index').text("00:0"+time)
			}
		}
		time--;
		timer_counter--
		setTimeout(function(){timer(time)}, 1000)
	}else{
		$('.game-menu_item_time > .game-menu_item_index').text("00:0"+time)
		return time
	}	
}

//Проверка ответа
function checkIt(a){
	
	if(timer_counter == 0){
		checkAnswer()
		$('.number_task_item').hide()
		alert('Игра окончена. Итоговый счёт ' + scoor)
	}else{
		setLevel(checkAnswer(a))
	}
}

//Запуск игры
function start(){
	setLevel(true)
	timer(timer_counter)	
}


//Обработка нажатия на игровые кнопки
$('.number_task_item').click(function(){checkIt($(this).children('span').attr('data-title'))})

//Кнопки на старте
$('.start').click(function(){
	$('.start').slideUp(),
	setTimeout(function(){$('.circle').text(3)},1000),
	setTimeout(function(){$('.circle').text(2)},2000),
	setTimeout(function(){$('.circle').text(1)},3000),
	setTimeout(function(){$('.first').fadeToggle()},4000),
	setTimeout(start(),5000)
})


