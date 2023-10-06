const button = document.getElementById('slider-button');
const element = document.getElementById('slider');
const classNames = ['slide-1', 'slide-2', 'slide-3'];
let currentClassIndex = 1; 

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
});


// var parentElement = document.getElementsByClassName('accordion-item');
// var childElement = document.getElementsByClassName('accordion-collapse');

// if (childElement.classList.contains('collapse')) {
//   parentElement.classList.add('newClass');
// }




var block2 = document.getElementsByClassName('nnn');
var block1 = document.getElementsByClassName('accordion-collapse');

// Створюємо спостерігача, який відстежуватиме зміни в класах блоку
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    // Перевіряємо, чи доданий клас1 до блоку1
    if (mutation.target === block1 && mutation.addedNodes.length > 0 && mutation.addedNodes[0].classList.contains('show')) {
      // Додаємо клас2 до блоку2
      block2.classList.add('class2');
    }
    // Перевіряємо, чи видалений клас1 з блоку1
    if (mutation.target === block1 && mutation.removedNodes.length > 0 && mutation.removedNodes[0].classList.contains('show')) {
      // Видаляємо клас2 з блоку2
      block2.classList.remove('class2');
    }
  });
});
