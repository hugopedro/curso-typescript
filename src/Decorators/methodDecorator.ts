// Method decorator -> Vai rodar toda vez que o método for chamado, ou seja ele não roda em runTime
// que nem o de classe, e sim só quando chamar

function delay(ms: number) {
  // PropertyDescriptor é um negócio da biblioteca do ts que descreveo método e a propiedade
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value; // original method é o metodo original
    descriptor.value = function (...args) {
      console.log(`Esperando ${ms}...`);
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);
      return descriptor;
    };
  };
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  // esperar um tempo e aí rodar o método (milisegundos)

  @delay(5000)
  // Então o method decorator é muito util pra esse tipo de situação
  // Tambem pode usar em situações que precise de um debounce(requisição nao precisar bater na API toda hora)
  greet() {
    console.log(`Hello ${this.greeting}`);
  }
}

const pessoazinha = new Greeter('Pessoazinha!');
pessoazinha.greet();
