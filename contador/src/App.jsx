import { useState} from "React"

function App() {

const [numero, setNumero] = useState(0)

function aumentar(){
setNumero(numero + 1)
}

function diminuir(){
setNumero(numero - 1)
}

return (
<section>
<h1>Contador 2</h1>
<p>{numero}</p>
<button onClick={aumentar}>Mais</button>
<button onClick={diminuir}>Menos</button>

</section>
)}
export default App;