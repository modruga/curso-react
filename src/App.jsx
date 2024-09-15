// nesse momento, os únicos componentes que desenvolvi foram o Header, Footer e Food.
// abaixo, vou importar esses componentes e adicionar ao App.jsx.
import Header from './Header'
import Footer from './Footer'
import Food from './Food'

// início do componente App
function App() {

  return(

    // importante!! componentes retornam um único elemento JSX.
    // então, se eu quiser retornar mais de um elemento, eu preciso envolvê-los
    // em um elemento pai. (nesse caso, estou envolvendo em um fragment <> </>).
    <>
      <Header/>
      <Food/>
      <Footer/>
    </>
  );

}

// o App é exportado para ser utilizado no main.jsx.
export default App

// para rodar o projeto, preciso rodar o seguinte comando no terminal, estando
// na pasta website: nmr run dev.

// no caso de um novo projeto, preciso rodar o seguinte comando no terminal:
// começar inserindo o react-dom: npm install react-dom
// nmr create vite@latest
// seguido então do nome do projeto.