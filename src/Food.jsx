// uma função que retorna uma lista não ordenada com 3 itens de comida.
// isso é só um exemplo do tutorial.
function Food(){

    // definição de duas constantes para exemplo de
    // como embutir JavaScript em meio a fragmentos JSX.
    const food1 = "Orange";
    const food2 = "Apple";

// novamente retorno múltiplos elementos de mesmo nível sem a necessidade de um elemento pai.
return(  
    <ul>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>Banana</li>
    </ul>
);

}

// o componente Food é exportado para ser utilizado no App.jsx.
export default Food;