export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
/* Never = nunca retorna nada, se retornar a aplicação quebra, essa é a diferença do void */

// Module mode
export default 1;
