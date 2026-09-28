//копіювання масиву
function copy(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    return result;
}

//порівняння елементів
function compare(a, b, order) {
    if (order === "asc") {
        return a > b;
    }
    return a < b;
}

//обмін двох елементів
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//перевірка порядку
function checkOrder(order) {
    if (order !== "asc" && order !== "desc") {
        console.log("Помилка: order повинен бути 'asc' або 'desc'");
        return false;
    }
    return true;
}

function exchangeSort(arr, order) {

    if (!checkOrder(order)) { return; }

    let numbers = [];
    let undefinedC = 0;
    let count = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!(i in arr) || arr[i] === undefined) {
            undefinedC++;
        } else {
            numbers.push(arr[i]);
        }
    }
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {
            count++;
            if (compare(numbers[j], numbers[j + 1], order)) {
                swap(numbers, j, j + 1);
                swaps++;
            }
        }
    }
    for (let i = 0; i < undefinedC; i++) {
        numbers.push(undefined);
    }

    console.log("\nОбмінне сортування");
    console.log(`Результат: ${numbers}`);
    console.log(`Порівнянь: ${count}`);
    console.log(`Обмінів: ${swaps}`);

    if (undefinedC > 0) {
        console.log(`Undefined/порожніх елементів: ${undefinedC}`);
    }
    return numbers;
}

function minElements(arr, order) {

    if (!checkOrder(order)) { return; }

    let numbers = [];
    let undefinedC = 0;
    let count = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!(i in arr) || arr[i] === undefined) {
            undefinedC++;
        } else {
            numbers.push(arr[i]);
        }
    }

    for (let i = 0; i < numbers.length - 1; i++) {
        let index = i;
        for (let j = i + 1; j < numbers.length; j++) {
            count++;
            if (compare(numbers[j], numbers[index], order)) {
                index = j;
            }
        }

        if (index !== i) {
            swap(numbers, i, index);
            swaps++;
        }
    }
    for (let i = 0; i < undefinedC; i++) {
        numbers.push(undefined);
    }

    console.log("\nСортування мінімальних елементів");
    console.log(`Результат: ${numbers}`);
    console.log(`Порівнянь: ${count}`);
    console.log(`Обмінів: ${swaps}`);

    if (undefinedC > 0) {
        console.log(`Undefined/порожніх елементів: ${undefinedC}`);
    }

    return numbers;
}

function insertionSort(arr, order) {

    if (!checkOrder(order)) { return; }

    let numbers = [];
    let undefinedC = 0;
    let count = 0;
    let movements = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!(i in arr) || arr[i] === undefined) {
            undefinedC++;
        } else {
            numbers.push(arr[i]);
        }
    }

    for (let i = 1; i < numbers.length; i++) {

        let current = numbers[i];
        let j = i - 1;

        while (j >= 0) {

            count++;

            if (compare(numbers[j], current, order)) {
                numbers[j + 1] = numbers[j];
                movements++;
                j--;
            } else {
                break;
            }
        }

        numbers[j + 1] = current;
        movements++;
    }

    for (let i = 0; i < undefinedC; i++) {
        numbers.push(undefined);
    }

    console.log("\nСортування вставками");
    console.log(`Результат: ${numbers}`);
    console.log(`Порівнянь: ${count}`);
    console.log(`Переміщень: ${movements}`);

    if (undefinedC > 0) {
        console.log(`Undefined/порожніх елементів: ${undefinedC}`);
    }
    return numbers;
}

function shellSort(arr, order) {
    if (!checkOrder(order)) { return;}
    let numbers = [];
    let undefinedC = 0;
    let count = 0;
    let movements = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!(i in arr) || arr[i] === undefined) {
            undefinedC++;
        } else {
            numbers.push(arr[i]);
        }
    }
    let gap = Math.floor(numbers.length / 2);
    while (gap > 0) {
        for (let i = gap; i < numbers.length; i++) {
            let current = numbers[i];
            let j = i;
            while (j >= gap) {
                count++;
                if (compare(numbers[j - gap], current, order)) {
                    numbers[j] = numbers[j - gap];
                    movements++;
                    j -= gap;
                } else {
                    break;
                }
            }

            numbers[j] = current;
            movements++;
        }
        gap = Math.floor(gap / 2);
    }

    for (let i = 0; i < undefinedC; i++) {
        numbers.push(undefined);
    }
    console.log("\nСортування Шелла");
    console.log(`Результат: ${numbers}`);
    console.log(`Порівнянь: ${count}`);
    console.log(`Переміщень: ${movements}`);

    if (undefinedC > 0) {
        console.log(`Undefined/порожніх елементів: ${undefinedC}`);
    }
    return numbers;
}

function quickSort(arr, order) {
    if (!checkOrder(order)) { return; }
    let numbers = [];
    let undefinedC = 0;
    let count = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!(i in arr) || arr[i] === undefined) {
            undefinedC++;
        } else {
            numbers.push(arr[i]);
        }
    }


    function quick(left, right) {

        let i = left;
        let j = right;
        let pivot = numbers[Math.floor((left + right) / 2)];

        while (i <= j) {
            if (order === "asc") {
                while (numbers[i] < pivot) {
                    count++;
                    i++;
                }
                count++;
                while (numbers[j] > pivot) {
                    count++;
                    j--;
                }
                count++;
            } else {
                while (numbers[i] > pivot) {
                    count++;
                    i++;
                }
                count++;
                while (numbers[j] < pivot) {
                    count++;
                    j--;
                }
                count++;
            }
            if (i <= j) {
                if (i !== j) {
                    swap(numbers, i, j);
                    swaps++;
                }

                i++;
                j--;
            }
        }
        if (left < j) { quick(left, j); }
        if (i < right) { quick(i, right); }
    }


    if (numbers.length > 1) {
        quick(0, numbers.length - 1);
    }

    for (let i = 0; i < undefinedC; i++) {
        numbers.push(undefined);
    }

    console.log("\nШвидке сортування Хоара");
    console.log(`Результат: ${numbers}`);
    console.log(`Порівнянь: ${count}`);
    console.log(`Обмінів: ${swaps}`);

    if (undefinedC > 0) {
        console.log(`Undefined/порожніх елементів: ${undefinedC}`);
    }
    return numbers;
}