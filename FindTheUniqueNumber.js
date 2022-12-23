// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  // Create an object to store the count of each element
  const counts = {};

  // Iterate through the array and count the number of times each element appears
  for (const num of arr) {
    if (counts[num]) {
      counts[num] += 1;
    } else {
      counts[num] = 1;
    }
  }

  // Iterate through the array again and return the first element that has a count of 1
  for (const num of arr) {
    if (counts[num] === 1) {
      return num;
    }
  }
}
