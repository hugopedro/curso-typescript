type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// Readonly
const todo: Readonly<Todo> = {
  title: 'Assistir TV de novo',
  description: 'Relembrar os detalhes',
  completed: false,
};

console.log(todo);
// Partial
// todo.completed = true; editar direto assim é uma má prática, por isso colocou-se o readonly
// e agora será criada uma função pra mudar o valor, que é a forma correta

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
  /* Partial deixa os atributos opcionais, mas é só no fieldsToUpdate, o que é bom*/
}

const todo2: Todo = updateTodo(todo, { completed: true });

console.log(todo2);

// Pick -> Pega dentro de um objeto do tipo declarado as propiedades

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo3: TodoPreview = {
  title: 'Fechar PES2021',
  completed: false,
};

// Omit -> baseado no tipo que se tem ele omite as propiedades

type TodoPreview2 = Omit<Todo, 'description'>;

const todo4: TodoPreview2 = {
  title: 'Fechar PES2021',
  completed: false,
};

console.log(todo4);
