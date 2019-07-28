var buttons = document.querySelectorAll('.buttons');
var lcd = document.getElementById('lcd')
var firstNumber = 0;
var secondNumber = 0;
var myOperator;
var memory = 0;

const getButtonClicked = (event) => {
        switch(event.target.id){
            case 'c': lcd.value = '';
                break;
            case 'memory': memory = lcd.value
                break;
            case 'memoryReturn': lcd.value = memory;
                break;
            case 'memoryClear': memory = 0
                break;
            case '+': firstNumber = parseFloat(lcd.value); lcd.value = ''; myOperator = 'addition';
                break;
            case 'x': firstNumber = parseFloat(lcd.value); lcd.value = ''; myOperator = 'multiply';
                break;
            case 'devide': firstNumber = parseFloat(lcd.value); lcd.value = ''; myOperator = 'devide';
                    break;
            case '-': firstNumber = parseFloat(lcd.value); lcd.value = ''; myOperator = 'subtract';
                break;        
            case '=': secondNumber = parseFloat(lcd.value); lcd.value = computeNumbers(firstNumber, myOperator, secondNumber);
                break;
            default: lcd.value += event.target.id;
        }
}

const computeNumbers = (firstNumber, myOperator, secondNumber) => {
    switch(myOperator){
        case 'addition': return (firstNumber + secondNumber);
        case 'multiply': return (firstNumber * secondNumber);
        case 'devide': return (firstNumber / secondNumber);
        case 'subtract': return (firstNumber - secondNumber);        
    }
}

buttons.forEach(button => button.addEventListener('click', getButtonClicked))

