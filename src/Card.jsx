import ImagemCachorroFoda from "./assets/cachorrofoda.jpg"

function Card(){

return(

// importante: o className é utilizado para adicionar classes CSS aos elementos JSX.
// o className é utilizado porque a palavra class é reservada no JS.
// a introdução do className é uma das diferenças entre HTML e JSX.
// o className é utilizado para adicionar classes CSS aos elementos JSX. (ver em index.css)
// a declaração do className no img é para adicionar uma classe CSS ao elemento img.
// também serve como parâmetro para aplicação de conceitos de herança de classes CSS.
// os elementos de "card-image" podem usar os elementos de "card" como referência.

<div className="card">
<img className="card-image" src={ImagemCachorroFoda} alt = "cachorros podem usar chapeus"></img>
<h2 className="card-h2">cachorros podem usar chapéus</h2>
<p className="card-paragraph">imagem foda do cachorro de chapéu</p>
</div>

)


}

export default Card