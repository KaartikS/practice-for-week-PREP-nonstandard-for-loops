function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let oddArray = [];
    let counter = 0
    for (let i = 1; i < arr.length; i += 2) {
        oddArray[counter] = arr[i];
        counter++;
    }
    return oddArray;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    let oddArrayReverse = [];
    let counter = 0;
    for (let i = 1; i <= arr.length - 1; i += 2) {
        oddArrayReverse[counter] = arr[i];
        counter++;
    }
    return oddArrayReverse.reverse();
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let powerOfTwoArray = [];
    let counter = 0;
    for (let i = 1; i < arr.length; i *= 2) {
        powerOfTwoArray[counter] = arr[i];
        counter++;
    }
    return powerOfTwoArray;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let nthPowerArray = [];
    let counter = 0;
    for (let i = 1; i < arr.length; i *= n) {
        nthPowerArray[counter] = arr[i];
        counter++;
    }
    return nthPowerArray;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let firstHalfArray = [];
    let counter = 0;

    if ((arr.length) % 2 == 0) {
        for (let i = 0; i < (arr.length / 2); i++) {
            firstHalfArray[counter] = arr[i];
            counter++;
        }
    }
    else {
        for (let i = 0; i <= Math.ceil(arr.length / 2) - 1; i++) {
            firstHalfArray[counter] = arr[i];
            counter++;
        }
    }

    return firstHalfArray;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    let secondHalfArray = [];
    let counter = 0;
    if ((arr.length) % 2 == 0) {
        for (let i = arr.length - 1; i >= Math.floor(arr.length / 2); i--) {
            secondHalfArray[counter] = arr[i];
            counter++;
        }
    }
    else {
        for (let i = arr.length - 1; i > arr.length / 2; i--) {
            secondHalfArray[counter] = arr[i];
            counter++;
        }
    }
    return secondHalfArray;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
