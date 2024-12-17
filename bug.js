```javascript
// Incorrectly setting a value in a Firebase Realtime Database transaction.
firebase.database().ref('path/to/data').transaction(function(currentData) {
  if (currentData === null) {
    return {
      value: 1 // Correct
    };
  } else {
    return {
      value: currentData.value + 1 // Incorrect: should be currentData + 1
    };
  }
});
```