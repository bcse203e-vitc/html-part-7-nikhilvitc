function bubbleSort(arr, order = 'ascending') {
  let len = arr.length;
  let swapped;

  for (let i = 0; i < len - 1; i++) {
    swapped = false;
    for (let j = 0; j < len - 1 - i; j++) {
      if (order === 'ascending' ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }


    if (!swapped) {
      break;
    }
  }

  return arr;
}
