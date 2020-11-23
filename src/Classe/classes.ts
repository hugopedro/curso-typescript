class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`);
  }
}

class CharAccount extends UserAccount {
  nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age); /* ali dentro do parenteses do construtor nickname e level pode ser qualquer nome*/
    this.nickname = nickname;
    this.level = level;
  }
}
const will = new UserAccount('Hugo', 30);
console.log(will);

const john = new CharAccount('John', 45, 'johnmaster', 45);
console.log(john.name);
console.log(john);
john.logDetails(); /* Herança permitiu que usasse o método da classe pai */
