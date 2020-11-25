// Class decorator, ele recebe por padrão só o construtor como parametro
// Exemplo: Decorator para anotar a versão da API
// Objetivo: quando o objeto da api for criado ele deve criar uma versão, essa versão será definida com
// o decorator abaixo
// O Class decorator roda em runtime, ou seja, rodou a aplicação vai na hora

function setAPIVersion(apiVersion: string) {
  return (constructor) => {
    // construtores de classe sempre recebem pelo parametro o construtor
    return class extends constructor {
      version = apiVersion;
    };
  };
}

// decorator permite criar uma propiedade pra dentro da nossa classe
@setAPIVersion('1.0.0')
class API {}

console.log(new API());

/*https://youtu.be/o1gCpXdVyHE?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_*/

/* 11:06 */
