function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let methods = [exchangeSort, minElements, insertionSort, shellSort, quickSort];

function demo(arr) {
    print("Початковий масив (" + arr.length + " елементів):");
    print(format(arr));

    for (let order of ["asc", "desc"]) {
        print("\nПорядок: " + (order === "asc" ? "за зростанням" : "за спаданням"));
        for (let method of methods) {
            method(arr, order);
        }
    }
}


print("\nНерозріджений масив\n");
let arr = [];
for (let i = 0; i < 120; i++) {
    arr.push(randomInt(1, 100));
}
demo(arr);

print("\n\nРозріджений масив\n");
let sparseArr = new Array(120);
for (let i = 0; i < 120; i++) {
    let r = Math.random();
    if (r < 0.1) { continue; }                                  
    sparseArr[i] = r < 0.2 ? undefined : randomInt(1, 100);   
}
sparseArr[7] = undefined;   
delete sparseArr[20];     
demo(sparseArr);
