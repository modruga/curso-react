// um header simples, com um título h1 e uma navegação com 4 links.
// esses links não levam a nada no momento.
function Header(){

    // observação: o href="#" é utilizado para que o link não redirecione para lugar nenhum.
    // note que apesar de retornar uma lista não ordenada inteira, o JSX permite que eu retorne sem
    // envolver a lista em um elemento pai. isso é possível porque o JSX aceita múltiplos elementos
    // sem a necessidade de um elemento pai, desde que todos os elementos estejam em um único nível.  
return(
    <header>
        <h1>Projeto React!</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
);

}

// o componente Header é exportado para ser utilizado no App.jsx.
export default Header;