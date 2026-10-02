function print(text) {
    console.log(text);
}

function format(arr) {
    let parts = [];
    for (let i = 0; i < arr.length; i++) {
        parts.push(!(i in arr) ? "<порожньо>" : String(arr[i]));
    }
    return parts.join(", ");
}

function compare(a, b, order) {
    return order === "asc" ? a > b : a < b;
}

function cmp(a, b, order, s) {
    s.count++;
    return compare(a, b, order);
}


function swap(arr, i, j, s) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    s.moves++;
}

function checkOrder(order) {
    if (order !== "asc" && order !== "desc") {
        print("Помилка: order повинен бути 'asc' або 'desc'");
        return false;
    }
    return true;
}

function runSort(name, arr, order, algorithm, movesLabel) {
    if (!checkOrder(order)) { return; }
    let numbers = [];
    let holes = 0;
    let explicitUndef = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!(i in arr)) { holes++; }
        else if (arr[i] === undefined) { explicitUndef++; }
        else { numbers.push(arr[i]); }
    }

    let s = { count: 0, moves: 0 };
    algorithm(numbers, order, s);

    for (let i = 0; i < holes + explicitUndef; i++) { numbers.push(undefined); }

    print("\n" + name + " (" + (order === "asc" ? "за зростанням" : "за спаданням") + ")");
    print("Результат: " + format(numbers));
    print("Порівнянь: " + s.count);
    print(movesLabel + ": " + s.moves);
    if (holes + explicitUndef > 0) {
        print("Undefined/порожніх елементів: " + (holes + explicitUndef) +
              " (порожніх слотів: " + holes + ", явних undefined: " + explicitUndef +
              "). Вони не сортувалися й розміщені в кінці масиву.");
    }
    return numbers;
}

function exchangeSort(arr, order) {
    return runSort("Обмінне сортування", arr, order, function (a, order, s) {
        for (let i = 0; i < a.length - 1; i++) {
            for (let j = 0; j < a.length - 1 - i; j++) {
                if (cmp(a[j], a[j + 1], order, s)) { swap(a, j, j + 1, s); }
            }
        }
    }, "Обмінів");
}

function minElements(arr, order) {
    return runSort("Сортування мінімальних елементів", arr, order, function (a, order, s) {
        for (let i = 0; i < a.length - 1; i++) {
            let index = i;
            for (let j = i + 1; j < a.length; j++) {
                if (cmp(a[index], a[j], order, s)) { index = j; }
            }
            if (index !== i) { swap(a, i, index, s); }
        }
    }, "Обмінів");
}

function insertionSort(arr, order) {
    return runSort("Сортування вставками", arr, order, function (a, order, s) {
        for (let i = 1; i < a.length; i++) {
            let current = a[i];
            let j = i - 1;
            while (j >= 0 && cmp(a[j], current, order, s)) {
                a[j + 1] = a[j];
                s.moves++;
                j--;
            }
            if (j + 1 !== i) { a[j + 1] = current; s.moves++; }
        }
    }, "Переміщень");
}

function shellSort(arr, order) {
    return runSort("Сортування Шелла", arr, order, function (a, order, s) {
        for (let gap = Math.floor(a.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < a.length; i++) {
                let current = a[i];
                let j = i;
                while (j >= gap && cmp(a[j - gap], current, order, s)) {
                    a[j] = a[j - gap];
                    s.moves++;
                    j -= gap;
                }
                if (j !== i) { a[j] = current; s.moves++; }
            }
        }
    }, "Переміщень");
}

function quickSort(arr, order) {
    return runSort("Швидке сортування Хоара", arr, order, function (a, order, s) {
        function quick(left, right) {
            let i = left;
            let j = right;
            let pivot = a[Math.floor((left + right) / 2)];
            while (i <= j) {
                while (cmp(pivot, a[i], order, s)) { i++; }  
                while (cmp(a[j], pivot, order, s)) { j--; } 
                if (i <= j) {
                    if (i !== j) { swap(a, i, j, s); }
                    i++;
                    j--;
                }
            }
            if (left < j) { quick(left, j); }
            if (i < right) { quick(i, right); }
        }
        if (a.length > 1) { quick(0, a.length - 1); }
    }, "Обмінів");
}
