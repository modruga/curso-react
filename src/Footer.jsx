// um footer simples, com o ano atual. o footer é um componente funcional, 
// que retorna um elemento <footer> com um parágrafo <p> contendo o ano atual.
// o ano atual é obtido com o método getFullYear() do objeto Date().
function Footer(){

    return (
        <footer>
            <p>© {new Date().getFullYear()} All rights reserved</p>
        </footer>
    );

}

export default Footer;