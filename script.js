// Array containing five numbers
const numbers = [10, 20, 30, 40, 50];

// Function to get an element from the array
function getElementAtIndex(arr, index) {
    try {
        if (index < 0 || index >= arr.length) {
            throw new Error("Invalid-index:" + index);
        }

        console.log("Element at index " + index + ":", arr[index]);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Access attempt finished");
    }
}

// Test with a valid index
getElementAtIndex(numbers, 2);

// Test with an invalid index
getElementAtIndex(numbers, 7);
