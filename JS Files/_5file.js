let sum = 0;
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        sum += j;
    }
}


// Time Complexity: O(n^2), Space Complexity: O(1)


// Answer Explanation :
// The code snippet contains nested loops where the inner loop depends on the value of the outer loop. 
// The outer loop iterates n times, and for each iteration, the inner loop iterates n - i times. 
// This results in a total of n * (n - 1) / 2 iterations, which is approximately O(n^2) in terms of time complexity. 
// The space complexity is O(1) because the variable sum requires constant space.

 




let i = 0;
while (i < n) {
    i++;
    if (i % 2 === 0) {
        i *= 2;
    }
}



// Correct Answer :
// Time Complexity: O(log n), Space Complexity: O(1)


// Answer Explanation :
// In each iteration of the while loop, the value of i is incremented by 1.
// However, when i is even, it is multiplied by 2. 
// This doubling effect causes it to grow exponentially. 
// The number of iterations required to reach or exceed n is logarithmic to the input size. 
// Therefore, the time complexity is O(log n). 
// The space complexity is O(1) because there is no additional space used that grows with the input size.


let x = 5;
if (x > 3) {
    console.log("x is greater than 3");
    break;
}


// Correct Answer :
// The break statement is used incorrectly.


// Answer Explanation :
// The break statement is typically used within loops (like for, while, do-while) to exit the loop prematurely. 
// In this code snippet, the if statement is not inside a loop, so using the break statement here is not valid. 
// It would result in a syntax error.


let count = 0;
for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        count++;
    }
}

// Correct Answer :
// Time Complexity: O(n), Space Complexity: O(1)


// Answer Explanation :
// The code snippet contains a loop that iterates n times, where n is the input size. The condition i % 2 == 0 is checked for each iteration, which is a constant-time operation. Therefore, the time complexity is O(n). The space complexity is O(1) because there is no additional space used that grows with the input size.

function processArrays(arr, matrix) {
    let n = arr.length;
    let m = matrix.length;

    // Operation 1: Iterate over the 1D array
    for (let i = 0; i < n; i++) {
        // Perform some operation on arr[i]
    }

    // Operation 2: Iterate over the 2D matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // Perform some operation on matrix[i][j]
        }
    }
}

// Correct Answer :
// Time complexity: O(n + m^2), Space complexity: O(1)


// Answer Explanation :
// The given code snippet defines a function processArrays that takes two arrays, arr and matrix, as input. The function performs two operations:

 

// The function iterates over the 1D array arr with n elements. The time complexity for this operation is O(n).

 

// For the second operation, the function iterates over the 2D matrix with m rows and  m columns (since it is a square matrix). The time complexity for this operation is O(m * m).

 

// Since both operations have a time complexity of O(n) or O(m * m), the overall time complexity of the processArrays function is O(n + m^2).

 

// The space complexity of this program is O(1) because it uses a fixed amount of space regardless of the input sizes n and m.

 





function createMatrix(n) {
    let matrix = new Array(n);
    
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n);
        
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i + j;
        }
    }
    
    return matrix;
}


// Correct Answer :
// Time complexity: O(n^2), Space complexity: O(n^2)


// Answer Explanation :
// Time complexity:

// The outer loop runs n times, and the inner loop also runs n times. Therefore, the total number of iterations is n * n = n^2.

// The assignment operation inside the nested loops takes constant time.

// As a result, the time complexity of the createMatrix method is O(n^2).

 

// Space complexity:

// The space complexity is O(n^2) because the method creates a 2D matrix matrix with dimensions n x n. The space used by the matrix is directly proportional to the square of the input size n.

// The space complexity grows quadratically with the input size.

 function findMaxElement(matrix) {
    let maxElement = Number.MIN_VALUE;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            maxElement = Math.max(maxElement, matrix[i][j]);
        }
    }
    
    return maxElement;
}

// Correct Answer :
//  Time complexity: O(n * m), Space complexity: O(1)


// Answer Explanation :
 

// Time complexity:

// The outer loop runs n times, where n is the number of rows in the matrix.

// The inner loop runs m times, where m is the number of columns in each row of the matrix.

// The assignment operation and Math.max comparison inside the nested loops take constant time.

// Therefore, the total number of iterations is n * m.

// As a result, the time complexity of the findMaxElement method is O(n * m).

// Space complexity:

// The space complexity is O(1) because the method only uses a single variable maxElement to track the maximum element. The space used is constant and independent of the input size.

// The space complexity remains constant regardless of the size of the matrix.

 

// leetcode 11
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let ans = 0;
    while( left < right ){
        const minHeight = Math.min(  height[left], height[right]   );
        ans = Math.max( ans, minHeight * ( right - left )   );
        if( height[left] < height[right]   ){
            left++;
        }
        else{
            right--;
        }
    }
    return ans;
};