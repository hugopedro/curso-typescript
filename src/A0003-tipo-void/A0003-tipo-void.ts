function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
} /* Array de strings */

const pessoa = {
  nome: 'Hugo',
  sobrenome: 'Pedro',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Hugo', 'Pedro');
pessoa.exibirNome();

export { pessoa };
