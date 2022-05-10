let name = "pepe";
let edad = 25;
let precio = "$99.9";
let seriesFav = ["Dark", "Mr. Robot.", "Castlevania"];

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

const mostrarPeliculasFav = () => {
  peliculasFav.forEach((element) => {
    console.log(element);
  });
};

mostrarPeliculasFav();
console.log(name);
console.log(edad);
console.log(precio);
console.log(seriesFav);
console.log(peliculasFav);
edad++;
console.log(edad);
peliculasFav.push({
  nombre: "Piratas",
  estreno: 2017,
  protagonistas: "MarkSujengerg",
});
console.log(peliculasFav.length);

seriesFav.push("Roberta");
console.log(seriesFav);

console.log(...peliculasFav);
