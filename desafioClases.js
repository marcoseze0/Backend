class Contador {
  static cuentaGlobal = 0;

  constructor(nombre) {
    this.nombre = nombre;
    this.contador = 0;
  }

  obtenerResponsable() {
    return this.nombre;
  }
  obtenerCuentaIndividual() {
    return this.contador;
  }

  obtenerCuentaGlobal() {
    return Contador.cuentaGlobal;
  }

  contar() {
    this.contador++;
    Contador.cuentaGlobal++;
  }
}

const Marcos = new Contador("Marcos");
const Lucas = new Contador("Lucas");

console.log(Marcos);

Marcos.contar();
Marcos.contar();
Marcos.contar();
Marcos.contar();
Lucas.contar();
Lucas.contar();
Lucas.contar();
Lucas.contar();
Lucas.contar();
console.log("Marcos Indv.", Marcos.obtenerCuentaIndividual());
console.log("Lucas Indv.", Lucas.obtenerCuentaIndividual());

console.log("Cuenta Global desde Marcos", Marcos.obtenerCuentaGlobal());
console.log("Cuenta Global desde Lucas", Lucas.obtenerCuentaGlobal());

//ReduceJavaScript
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.reduce((a, b) => a + b, 0));
console.log(numeros);
