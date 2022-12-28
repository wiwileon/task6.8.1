const consoleLog = document.querySelector('#consoleLog');
const Alert = document.querySelector('#alert');
const Prompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
   alert('Служит для вывода информации в консоль')
})

Alert.addEventListener('click', () => {
   alert('Выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмёт ОК/Закрыть')
})

Prompt.addEventListener('click', () => {
   let years = prompt('Придумайте прилагательное и введите его в поле');
   alert('Этот новый год будет самый ' + years + ' ! С наступающим Новым 2023 годом!')
})