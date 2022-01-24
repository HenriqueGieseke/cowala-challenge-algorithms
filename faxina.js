const obj = {
  name: 'john',
  lastName: null,
  country: null,
  age: 33,
  address: null,
};

function faxina(obj) {
  const cleanObj = obj;

  Object.keys(cleanObj).forEach(
    (key) => cleanObj[key] === null && delete cleanObj[key]
  );

  console.log(cleanObj);
  return cleanObj;
}

faxina(obj);
