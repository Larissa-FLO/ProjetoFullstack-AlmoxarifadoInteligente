import './Almoxarifado.css'
import Header from '../Components/Header'
import DadosPrincipais from '../Components/DadosPrincipais'
import Requisicao from '../Components/Requisicao'

function Almoxarifado() {



    return(
        <>
            <div id='container'>
                
                <Header/>

                <div className='box'>
                    <div className='requisicao'>
                        <h3>Novo Pedido de Requisição de Saída</h3>

                        <DadosPrincipais/>

                        <Requisicao/>

                    </div>

                </div>

                <div className='footer'>

                </div>

            </div>
        </>
    )

}

export default Almoxarifado