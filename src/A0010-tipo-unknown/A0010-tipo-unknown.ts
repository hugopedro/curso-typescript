let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

/* O unknown é um any só que mais seguro*/

if (typeof x === 'number') console.log(x + y);

// Module mode
export default 1;
