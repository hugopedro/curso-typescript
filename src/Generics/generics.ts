// S => State
// T => Type
// K => Key
// V => Value
// El => Element

function useState<S extends number | string = string>() {
  /* = string quer dizer que o default é string */
  // dentro do <> passa o tipo que irei trabalhar
  // let state: number | string;
  let state: S;
  function getState() {
    return state;
  }
  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState();
/* Então dentro do < > poe o tipo que ele deve aceitar, daí se tentar fazer algo com outro tipo
ele bloqueia, que é o objetivo de usar o generics
apagando o < > ele pega o tipo default que é string, definido na linha 7 */

newState.setState('foo');
console.log(newState.getState());

/*newState.setState(123);
console.log(newState.getState());*/

newState.setState('bla');
console.log(newState.getState());
