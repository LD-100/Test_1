
function getRandomInt(min,max){
		return Math.floor(Math.random()*(max-min)+min)
}

function getRandom(n){
	return Math.floor(Math.random()*n)
}


//Сложность уровней
function setLevel(n){
	setValue('.number_task_reference')
	setButton()
	setBackgroundAll()
	if(n){
		if(level_counter<9){
		level_counter++
		$('.game-menu_item_level>.game-menu_item_index').text(level_counter+'-9')
		}
	}
	switch(level_counter){
			case 1:
				for(var i =0;i<3;i++){
					c = '#'+i
					$(c).show()
					c = '#'+(i+5)
					$(c).show()
				}
				if(getRandom(100) < 50){
					setAnswer(0,3)
				}else{
					setAnswer(5,8)
				}			
				
			break
			case 2:
				for(var i =0;i<3;i++){
					c = '#'+i
					$(c).show()
					c = '#'+(i+5)
					$(c).show()
				}
				if(getRandom(100) < 50){
					setAnswer(0,3)
				}else{
					setAnswer(5,8)
				}				
				
			break
			case 3:
				for(var i =0;i<3;i++){
					c = '#'+i
					$(c).show()
					c = '#'+(i+5)
					$(c).show()
				}
				if(getRandom(100) < 50){
					setAnswer(0,3)
				}else{
					setAnswer(5,8)
				}
				setAnimation(10)
			break
			case 4:
				for(var i =0;i<4;i++){
					c = '#'+i
					$(c).show()
					c = '#'+(i+5)
					$(c).show()
					c = '#'+(i+10)
					$(c).show()
				}
				$('.number_task_item').css({
					'width':'23%'
				})
				if(getRandom(100) < 33){
					setAnswer(0,4)
				}else{
					if(getRandom(100) < 66){
					setAnswer(5,9)
					}else{
						setAnswer(10,14)
					}
				}
				setAnimation(15)
			break
			case 5:
				for(var i =0;i<4;i++){
					c = '#'+i
					$(c).show()
					c = '#'+(i+5)
					$(c).show()
					c = '#'+(i+10)
					$(c).show()
				}
				$('.number_task_item').css({
					'width':'23%'
				})
				if(getRandom(100) < 33){
					setAnswer(0,4)
				}else{
					if(getRandom(100) < 66){
					setAnswer(5,9)
					}else{
						setAnswer(10,14)
					}
				}
				setAnimation(15)
			break
			case 6:
				for(var i =0;i<4;i++){
					c = '#'+i
					$(c).show()
					c = '#'+(i+5)
					$(c).show()
					c = '#'+(i+10)
					$(c).show()
					c = '#'+(i+15)
					$(c).show()
				}
				$('.number_task_item').css({
					'width':'23%',
					'height':'60px',
					'font-size': '30px'					
				})
				$('.number_task_line').css({
					'height':'60px'
				})
				$('.number_task_item').children('span').css('line-height','60px')
				if(getRandom(100) < 25){
					setAnswer(0,4)
				}else{
					if(getRandom(100) < 50){
						setAnswer(5,9)
					}else{
						if(getRandom(100) < 75){
						setAnswer(10,14)
						}else{
							setAnswer(15,19)
						}
					}
				}
				setAnimation(20)
			break
			case 7:
				for(var i =0;i<4;i++){
					c = '#'+i
					$(c).show()
					c = '#'+(i+5)
					$(c).show()
					c = '#'+(i+10)
					$(c).show()
					c = '#'+(i+15)
					$(c).show()
				}
				$('.number_task_item').css({
					'width':'23%',
					'height':'60px',
					'font-size': '30px'					
				})
				$('.number_task_line').css({
					'height':'60px'
				})
				$('.number_task_item').children('span').css('line-height','60px')
				if(getRandom(100) < 25){
					setAnswer(0,4)
				}else{
					if(getRandom(100) < 50){
						setAnswer(5,9)
					}else{
						if(getRandom(100) < 75){
						setAnswer(10,14)
						}else{
							setAnswer(15,19)
						}
					}
				}
				setAnimation(20)
			break
			case 8:
				for(var i =0;i<25;i++){
					c = '#'+i
					$(c).show()
				}
				$('.number_task_item').css({
					'width':'18%',
					'height':'50px',
					'font-size': '20px'					
				})
				$('.number_task_line').css({
					'height':'50px'
				})
				$('.number_task_item').children('span').css('line-height','50px')
				if(getRandom(100) < 20){
					setAnswer(0,5)
				}else{
					if(getRandom(100) < 40){
						setAnswer(5,10)
					}else{
						if(getRandom(100) < 60){
						setAnswer(10,15)
						}else{
							if(getRandom(100) < 80){
							setAnswer(15,20)
							}else{
								setAnswer(20,25)
							}
						}
					}
				}
				setAnimation(25)			
				break
				case 9:
				for(var i =0;i<25;i++){
					c = '#'+i
					$(c).show()
				}
				$('.number_task_item').css({
					'width':'18%',
					'height':'50px',
					'font-size': '20px'					
				})
				$('.number_task_line').css({
					'height':'50px'
				})
				$('.number_task_item').children('span').css('line-height','50px')
				if(getRandom(100) < 20){
					setAnswer(0,5)
				}else{
					if(getRandom(100) < 40){
						setAnswer(5,10)
					}else{
						if(getRandom(100) < 60){
						setAnswer(10,15)
						}else{
							if(getRandom(100) < 80){
							setAnswer(15,20)
							}else{
								setAnswer(20,25)
							}
						}
					}
				}
				setAnimation(25)			
				break				
		}
	
}


//Установка случайных значений на кнопки
function setButton(){
	$('.number_task_item > .number_task_item_inner').each(function(){
		$(this).attr('data-title',getRandom(1000))
		$(this).text($(this).attr('data-title'))})
}

//Установка значения в конретный элемент
function setValue(n){
	$(n).attr('data-title',getRandom(1000))
	$(n).text($(n).attr('data-title'))
}

//Установка правильного ответа
function setAnswer(min,max){
		a = $('.number_task_reference').attr('data-title')
		b = getRandomInt(min,max)
		c = '#'+b
		$(c).children('span').attr('data-title', a)
		$(c).children('span').text(a)
}

//Проверка правильного ответа
function checkAnswer(a){
	if(a == $('.number_task_reference').attr('data-title')){
		$('.right').fadeToggle()
		$('.right').fadeToggle()
		if(bonus_scoor == 0){
			$('.game-menu_item_scoore > .game-menu_item_index').text(scoor+=100*(bonus_scoor+1))
		}else{
			$('.game-menu_item_scoore > .game-menu_item_index').text(scoor+=100*bonus_scoor)
		}		
		if(bonus_scoor < 5){
			$('.game-menu_item_bonus > .game-menu_item_index').text(bonus_scoor+=1)
		}
		return 1
		}else{
			$('.wrong').fadeToggle()
			$('.wrong').fadeToggle()
			$('.game-menu_item_bonus > .game-menu_item_index').text(bonus_scoor=0)
			$('.game-menu_item_scoore > .game-menu_item_index').text(scoor-=50)
			return 0
		}
}