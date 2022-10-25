function getThreeDigitRandomNumber() {
    return Math.floor(Math.random() * (999 - 100) + 100);
  }
  
  let arr = [];
  for (let index = 0; index < 5; index++) {
    arr[index] = getThreeDigitRandomNumber();
    console.log(`${index + 1} random digit no. ${arr[index]}`);
  }
  
  let max = arr[0];
  let min = arr[0];
  
  for (let index = 0; index < arr.length; index++) {
    if (max < arr[index]) {
      max = arr[index];
    }
    if (min > arr[index]) {
      min = arr[index];
    }
  }
  console.log(`Minimum Number is: ${min} , Maximum Number is: ${max}`);
  
 