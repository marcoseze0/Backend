class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return console.log(
      `El nombre del usuario es: ${this.nombre} ${this.apellido}`
    );
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombreLibro, libroAutor) {
    this.libros.push({
      nombre: nombreLibro,
      autor: libroAutor,
    });
  }

  getBookNames() {
    this.libros.forEach((libro) => {
      console.log(libro.nombre);
    });
  }
}
//Inicuando el Objeto
const lucas = new Usuario("Lucas", "Perez", [], []);
//Agregando Mascotas
lucas.addMascota("Caballo");
lucas.addMascota("Perro");

//Mostrando Mascotas por consola
console.log(`Mascotas: ${lucas.mascotas}`);

//Mostrando Cantidad de mascotas
console.log(`Cantidad de Mascotas: ${lucas.countMascotas()}`);

//Agregando Libros al array
lucas.addBook("HarryPotter", "J. K. Rowling");
lucas.addBook("El Psicoanalista", "John Katzenbach");
lucas.addBook("El Alquimista", "Paulo Coelho");
//Mostrando Solo el nombre de los Libros
lucas.getBookNames();
