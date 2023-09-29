let display = document.getElementById('display');
let expression = '';

let buttons = document.querySelectorAll('.keypad button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    let value = button.textContent;
    
    if (value === '=') {
      calculate();
    } else if (value === 'AC') {
      clearDisplay();
    } 
    else if(value === "C"){
      deletevalue();
    }else {
      appendValue(value);
    }
    
  });
});

document.addEventListener('keydown',  function(e){
  let key = e.key;
if(/[0-9.+\-*/]|Enter/.test(key)){
  if(key === 'Enter'){
    calculate();
  }
  
  else{
    appendValue(key);
  }
  
}
if(key === 'Backspace'){
  deletevalue();
}
if(key === 'Delete'){
  clearDisplay();
}
});

function deletevalue() {
   expression = expression.slice(0, -1);
   display.value = expression;
}

function appendValue(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = result;
  } catch (error) {
    display.value = 'Error';
  }
}