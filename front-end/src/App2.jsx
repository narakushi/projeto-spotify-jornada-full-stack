import React from "react";

const App2 = () => {
  return <div>App2</div>;
};

export default App2;

// rafce

// Arrow Function
// const app2 = () => <h1>Ola, mundo!</h1>;
// Nomeação de Componente
// PascalCase

// Nomeação de Variavel, Função...
// camelCase

// Nomeação de classes css
// kebab-case

// Header por exemplo é um componente em PascalCase
// Export default posso importar com qualquer nome e sem chaves
//  export sem default só posso importar entre chaves e com o nome exportado
// Self closing tag : <Header/>

// Nomeação de classes em CSS
// Metodolokgia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
//  header
// header__link
// header__link--small
// item-list__header

// Tag vazia em React se chama fragment

// Componentes recebem "props"
//myArray.map((currentValue, index) => currentValue +1)

// {items === 5 ? (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// ) : (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// )}

// Array(items)
//           .fill()
//           .map((currentValue, index) => (
//             <SingleItem key={`${title}-${index}`} />
//           ))

// Spread operator ...
// cria uma cópia de u array ou objeto

// Quando componentes se re-renderizão?
// Uma das ocasiões é quando uma variável de estado usada por esse componente é atualizada

// Hook - useSate()
