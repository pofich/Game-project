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
