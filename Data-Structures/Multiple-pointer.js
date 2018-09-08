//sumzero funtion that takes sorted array of integers and find the first pair where sum is 0

function sumZero(array) {

    let left = 0
    let right = array.length - 1
    while (left < right) {
        let sum = array[left] + array[right]
        if (sum === 0) {
            return [array[left], array[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}