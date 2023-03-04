// В функцию передается целое число. Необходимо сделать так,
// чтобы функция возвращала сумму всех цифр в переданном числе.

// function sumDigits(num) {...}

// console.log(sumDigit(123)) // 6
// console.log(sumDigits(904)) 13

const sumDigit = (num) => {
    num = String(num);
    newArr = [];
    for (i=0; i<=num.length; i++) {     
    newArr.push(num[i]);
        } 
}
console.log(sumDigit(1234));