//ПЕРВЫЙ СПОСОБ РЕШЕНИЯ ↓↓↓
/*
const numbers = [];
let total = 0; */


/*  
while (true) {
        
    input = prompt('Введите число');
    
    if (input === null) {
       
        break;
    };
             
    input = Number(input);

    if (Number.isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    } else {

        numbers.push(input);
    }
    
}

for (const number of numbers) {
    total += number;
}


    console.log(`Общая сумма чисел равна ${total}`);  */


//ВТОРОЙ СПОСОБ РЕШЕНИЯ
const numbers = [];
let total = 0;

const inputValue = document.querySelector('.input-control');
const addValueBtn = document.querySelector('.js-add-value');
const calculateSummBtn = document.querySelector('.js-calculate');
/* console.log(inputValue);
console.log(addValueBtn);
console.log(calculateSummBtn); */

addValueBtn.addEventListener('click', function () {
    const value = Number(inputValue.value);

    numbers.push(value);
    inputValue.value = '';
    /* console.log(numbers); */
    
});

calculateSummBtn.addEventListener('click', function () {
    for (const number of numbers) {
        
        total += number; 
         console.log(total); 
    }
    
    alert(`Общая сумма чисел равна ${total}`);
})