const toggleButton = document.getElementById('toggleButton');
const blocks = document.getElementsByClassName('block');
const block = document.getElementsByClassName('test');

let index = 0;

toggleButton.addEventListener('click', () => {
  if (index < blocks.length) {
    blocks[index].classList.add('active');
    index++;
  } 
  
  else {
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].classList.remove('active');
    }
    index = 0;
  }
});













const button = document.getElementById('my-button');
const element = document.getElementById('my-elements');
const classNames = ['class1', 'class2', 'class3'];
let currentClassIndex = 1; 


// const elements = document.getElementsByClassName('myelement');
// // Цикл для пронумерування елементів
// for (let i = 0; i < elements.length; i++) {
//   const element = elements[i];
  
//   // Додаємо номер в клас
//   element.classList.add(`class-${i+1}`);

// const elemented = document.getElementsByClassName('class-1');
// elemented.classList.add('class2');

// }



button.addEventListener('click', () => {
  element.classList.add(classNames[currentClassIndex]);
    // Видаляємо всі інші класи
    for (let i = 0; i < classNames.length; i++) {
      if (i !== currentClassIndex) {
        element.classList.remove(classNames[i]);
      }
    }
    currentClassIndex++;
    if (currentClassIndex === classNames.length) {
            currentClassIndex = 0;
          }
})
;

// // Отримати всі елементи на сторінці
// const elements = document.getElementsByTagName('*');

// // Пройтися по всіх елементах
// for(let i = 0; i < elements.length; i++) {
//   // Перевірити, чи має поточний елемент з-index = 1
//   if(window.getComputedStyle(elements[i]).getPropertyValue('z-index') === '0') {
//     // Додати клас до знайденого елемента
//     elements[i].classList.add('last-slide');
//   }
// }

// // // Отримуємо елемент, до якого будемо додавати / видаляти класи
// // const element = document.getElementById('my-element');

// // // Оголошуємо масив із назвами класів, які хочемо додати
// // const classNames = ['class1', 'class2', 'class3'];

// // // Оголошуємо поточний індекс
// // let currentClassIndex = 0;

// // // Функція, яка додає / видаляє класи
// // function cycleClasses() {
// //   // Додаємо поточний клас
// //   element.classList.add(classNames[currentClassIndex]);
  
// //   // Видаляємо всі інші класи
// //   for (let i = 0; i < classNames.length; i++) {
// //     if (i !== currentClassIndex) {
// //       element.classList.remove(classNames[i]);
// //     }
// //   }
  
// //   // Збільшуємо індекс\n  currentClassIndex++;
  
// //   // Якщо досягли кінця масиву, повертаємо його на початок
// //   if (currentClassIndex === classNames.length) {
// //     currentClassIndex = 0;
// //   }
// // }

// function Sim(sldrId) {

// 	let id = document.getElementById(sldrId);
// 	if(id) {
// 		this.sldrRoot = id
// 	}
// 	else {
// 		this.sldrRoot = document.querySelector('.sim-slider')
// 	};

// 	// Carousel objects
// 	this.sldrList = this.sldrRoot.querySelector('.sim-slider-list');
// 	this.sldrElements = this.sldrList.querySelectorAll('.sim-slider-element');
// 	this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element');
// 	this.leftArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-left');
// 	this.rightArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-right');
// 	this.indicatorDots = this.sldrRoot.querySelector('div.sim-slider-dots');

// 	// Initialization
// 	this.options = Sim.defaults;
// 	Sim.initialize(this)
// };

// Sim.defaults = {

// 	// Default options for the carousel
// 	loop: true,     // Бесконечное зацикливание слайдера
// 	auto: false,     // Автоматическое пролистывание
// 	interval: 0, // Интервал между пролистыванием элементов (мс)
// 	arrows: true,   // Пролистывание стрелками
// 	dots: true      // Индикаторные точки
// };

// Sim.prototype.elemPrev = function(num) {
// 	num = num || 1;

// 	let prevElement = this.currentElement;
// 	this.currentElement -= num;
// 	if(this.currentElement < 0) this.currentElement = this.elemCount-1;

// 	if(!this.options.loop) {
// 		if(this.currentElement == 0) {
// 			this.leftArrow.style.display = 'none'
// 		};
// 		this.rightArrow.style.display = 'block'
// 	};
	
// 	this.sldrElements[this.currentElement].style.opacity = '1';
// 	this.sldrElements[prevElement].style.opacity = '0';

// 	if(this.options.dots) {
// 		this.dotOn(prevElement); this.dotOff(this.currentElement)
// 	}
// };

// Sim.prototype.elemNext = function(num) {
// 	num = num || 1;
	
// 	let prevElement = this.currentElement;
// 	this.currentElement += num;
// 	if(this.currentElement >= this.elemCount) this.currentElement = 0;

// 	if(!this.options.loop) {
// 		if(this.currentElement == this.elemCount-1) {
// 			this.rightArrow.style.display = 'none'
// 		};
// 		this.leftArrow.style.display = 'block'
// 	};

// 	this.sldrElements[this.currentElement].style.opacity = '1';
// 	this.sldrElements[prevElement].style.opacity = '0';

// 	if(this.options.dots) {
// 		this.dotOn(prevElement); this.dotOff(this.currentElement)
// 	}
// };

// Sim.prototype.dotOn = function(num) {
// 	this.indicatorDotsAll[num].style.cssText = 'background-color:#BBB; cursor:pointer;'
// };

// Sim.prototype.dotOff = function(num) {
// 	this.indicatorDotsAll[num].style.cssText = 'background-color:#556; cursor:default;'
// };

// Sim.initialize = function(that) {

// 	// Constants
// 	that.elemCount = that.sldrElements.length; // Количество элементов

// 	// Variables
// 	that.currentElement = 0;
// 	let bgTime = getTime();

// 	// Functions
// 	function getTime() {
// 		return new Date().getTime();
// 	};
// 	function setAutoScroll() {
// 		that.autoScroll = setInterval(function() {
// 			let fnTime = getTime();
// 			if(fnTime - bgTime + 10 > that.options.interval) {
// 				bgTime = fnTime; that.elemNext()
// 			}
// 		}, that.options.interval)
// 	};

// 	// Start initialization
// 	if(that.elemCount <= 1) {   // Отключить навигацию
// 		that.options.auto = false; that.options.arrows = false; that.options.dots = false;
// 		that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
// 	};
// 	if(that.elemCount >= 1) {   // показать первый элемент
// 		that.sldrElemFirst.style.opacity = '1';
// 	};

// 	if(!that.options.loop) {
// 		that.leftArrow.style.display = 'none';  // отключить левую стрелку
// 		that.options.auto = false; // отключить автопркрутку
// 	}
// 	else if(that.options.auto) {   // инициализация автопрокруки
// 		setAutoScroll();
// 		// Остановка прокрутки при наведении мыши на элемент
// 		that.sldrList.addEventListener('mouseenter', function() {clearInterval(that.autoScroll)}, false);
// 		that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
// 	};

// 	if(that.options.arrows) {  // инициализация стрелок
// 		that.leftArrow.addEventListener('click', function() {
// 			let fnTime = getTime();
// 			if(fnTime - bgTime > 1000) {
// 				bgTime = fnTime; that.elemPrev()
// 			}
// 		}, false);
// 		that.rightArrow.addEventListener('click', function() {
// 			let fnTime = getTime();
// 			if(fnTime - bgTime > 1000) {
// 				bgTime = fnTime; that.elemNext()
// 			}
// 		}, false)
// 	}
// 	else {
// 		that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
// 	};

// 	if(that.options.dots) {  // инициализация индикаторных точек
// 		let sum = '', diffNum;
// 		for(let i=0; i<that.elemCount; i++) {
// 			sum += '<span class="sim-dot"></span>'
// 		};
// 		that.indicatorDots.innerHTML = sum;
// 		that.indicatorDotsAll = that.sldrRoot.querySelectorAll('span.sim-dot');
// 		// Назначаем точкам обработчик события 'click'
// 		for(let n=0; n<that.elemCount; n++) {
// 			that.indicatorDotsAll[n].addEventListener('click', function() {
// 				diffNum = Math.abs(n - that.currentElement);
// 				if(n < that.currentElement) {
// 					bgTime = getTime(); that.elemPrev(diffNum)
// 				}
// 				else if(n > that.currentElement) {
// 					bgTime = getTime(); that.elemNext(diffNum)
// 				}
// 				// Если n == that.currentElement ничего не делаем
// 			}, false)
// 		};
// 		that.dotOff(0);  // точка[0] выключена, остальные включены
// 		for(let i=1; i<that.elemCount; i++) {
// 			that.dotOn(i)
// 		}
// 	}
// };

// new Sim();







// function classToggle() {
//   var el = document.querySelector('.icon-cards__content');
//   el.classList.toggle('step-animation');
// }

// document.querySelector('#toggle-animation').addEventListener('click', classToggle);