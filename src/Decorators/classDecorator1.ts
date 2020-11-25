/* O decorator é uma declaração que pode ser anexada numa classe/propiedade/método/parâmetro etc,
o decorator vai trabalhar encima das partes anotadas para que se possa adicionar coisas novas, ele
vai estar vigiando essas marcações para por exemplo adicionar um elemento novo, fazer uma validação,
etc */

// Factory -> É criar uma função que vai retornar a criação do decorator

function Logger(prefix: string) {
  return (target) => {
    console.log(`${prefix} - ${target}`);
  };
}

function log(target) {
  /* o target é o construtor da classe ou a propria classe */
  console.log(target);
}

@Logger('awesome')
class Foo {}
