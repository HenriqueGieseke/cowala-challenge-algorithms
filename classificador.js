const array = [
  {
    souEu: true,
    responsavel: false,
    nome: 'Carlos Augusto',
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'Pedro Souza',
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'Thiago Sampaio',
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Luiza Pinheiro',
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'Diana Ferreira',
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Vitor Carvalho',
  },
];

function classificador(array) {
  const filterSelf = array.filter((item) => {
    return item.souEu === true;
  });

  const filterResponsible = array.filter((item) => {
    return item.responsavel === true && item.souEu === false;
  });
  const sortResponsible = filterResponsible.sort((a, b) =>
    a.nome.localeCompare(b.nome)
  );

  const filterNotResponsible = array.filter((item) => {
    return item.responsavel === false && item.souEu === false;
  });
  const sortNotResponsible = filterNotResponsible.sort((a, b) =>
    a.nome.localeCompare(b.nome)
  );

  const finalArray = [...filterSelf, ...sortResponsible, ...sortNotResponsible];

  console.log(finalArray);
  return finalArray;
}

classificador(array);
