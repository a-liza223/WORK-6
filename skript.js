// Создание массива из 10 чисел
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Вычисление суммы элементов
let totalSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Вывод суммы
console.log("Сумма всех элементов массива:", totalSum);
