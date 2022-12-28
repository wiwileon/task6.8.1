document.querySelector('#testText').addEventListener('click', 
   function (event) {
      event.preventDefault();
      const userText = prompt('Введите свой текст в поле');
      this.textContent = userText;
})