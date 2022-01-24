const fibonacci = (numMax) => {
  for (
    var fibArray = [0, 1], i = 0, j = 1, k = 0;
    k < numMax;
    i = j, j = x, k++
  ) {
    x = i + j;
    fibArray.push(x);
  }

  const returnArray = fibArray.slice(0, numMax);
  console.log(returnArray);
  return returnArray;
};

fibonacci(6);
