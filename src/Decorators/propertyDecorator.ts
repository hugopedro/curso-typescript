// Trabalha encima de uma propiedade

function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key]

    const getter = () => val;
    const setter = (value: string) => {
      if( value.length < length) {
        console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}.`)
      } else {
        val = value
      }
    };
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Movie {
  // validação - se for menor que 5 - error
  @minLength(3);
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie('Interestrelar');
console.log(movie.title);
