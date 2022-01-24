const dateString = '2021-11-17T20:40:09.503Z';

function validade(string, days) {
  const daysNumber = Number(days.replace('d', ''));

  const nowDate = new Date();

  const productDate = new Date(string);

  const dateWithValidity = productDate.setDate(
    productDate.getDate() + daysNumber
  );

  const dateDifference = Math.floor(
    (nowDate - dateWithValidity) / (1000 * 60 * 60 * 24)
  );

  if (dateDifference < 0) {
    console.log('Produto na validade');
    return true;
  } else {
    console.log('Produto fora da validade');
    return false;
  }
}

validade(dateString, '120d');
