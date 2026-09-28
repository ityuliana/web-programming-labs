let arr = [7, 3, 9, 1, 5, 2, 8];

console.log("Початковий масив:");
console.log(arr);

exchangeSort(arr, "asc");
minElements(arr, "asc");
insertionSort(arr, "asc");
shellSort(arr, "asc");
quickSort(arr, "asc");

exchangeSort(arr, "desc");
minElements(arr, "desc");
insertionSort(arr, "desc");
shellSort(arr, "desc");
quickSort(arr, "desc");

let testArr = [];

testArr[0] = 7;
testArr[1] = 3;
testArr[3] = 9;
testArr[4] = undefined;
testArr[6] = 1;

console.log("\nТЕСТ МАСИВУ З UNDEFINED");
console.log(testArr);

minElements(testArr, "asc");