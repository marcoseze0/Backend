let peliculasFav = [
  {
    nombre: "Dark",
    estreno: "2016",
    protagonistas: "Markus Paton,Lirik Romeus, Romeo travieso",
  },
  {
    nombre: "Mr. Robot",
    estreno: "2019",
    protagonistas: "Markus Paton,Lirik Romeus, Romeo travieso",
  },
  {
    nombre: "Castlevania",
    estreno: "2015",
    protagonistas: "Markus Paton,Lirik Romeus, Romeo travieso",
  },
];

const mostrarLista = (lista) => {
  if (lista !== "") {
    console.log(peliculasFav);
  } else {
    console.log("Lista Vacia");
  }
};
//mostrarLista();

anonymus = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};

//anonymus(1, 2, 3);
//Funciones Clousure
function crearMultiplicador(multiplicador) {
  return (numero) => {
    console.log(numero * multiplicador);
  };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);
duplicar(5);
triplicar(5);
