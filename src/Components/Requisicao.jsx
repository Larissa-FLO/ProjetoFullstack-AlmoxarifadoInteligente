import '../Styles/Requisicao.css'

function Requisicao () {

    return (
        <>
        <div className='itensRequisicao'>

            <div className='tituloRequisicao'>
            <span>Itens da Requisição</span>
            </div>

            <div className='boxProdutos'>
                <div className='boxRequisicao'>
                    <div className='produtoRequisicao'>
                            <div>
                                <span>Cod. Produto: </span>
                                <input type="number" className='codProduto'/>
                            </div>
                            <div>
                                <span>Descrição: </span>
                                <input type="text" className='descricaoProduto'/>
                            </div>
                            <div className='estoque'>
                                <span>Estoque: </span>
                                <input type="number" className='estoqueProduto'/>   
                            </div>  
                            <img src="./src/Icons/green-square.svg" alt="" />
                            <div>
                                <span>Quantidade: </span>
                                <input type="number" className='quantidade'/>
                            </div>
                            <div>
                                <button className='btnAdicionar'>Adicionar</button>
                            </div>
                    </div>
                    <div className='tabela'>
                        <table>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Qtd</th>
                            <th>Un</th>
                            <th>Preço</th>
                            <th>Total</th>
                        </table>
                    </div>
                </div>

                <div className='valorFinal'>
                    <input type="number" />
                    <div className='buttons'>
                        <button className='btnCancelar'>Cancelar</button>
                        <button className='btnGravar'>Gravar</button>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}

export default Requisicao