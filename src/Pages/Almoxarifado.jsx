import './Almoxarifado.css'

function Almoxarifado() {

    return(
        <>
            <div id='container'>
                <div className='header'>
                    <div className='menu'>
                        <button><a href="" className='link'>Produtos</a></button>
                        <button><a href="" className='link'>Benchmarking</a></button>
                        <button><a href="" className='linkReq'>Requisição</a></button>
                        <button><a href="" className='link'>Configurações</a></button>
                    </div>

                    <div className='logo'>

                    </div>
                </div>

                <div className='box'>
                    <div className='requisicao'>
                        <h3>Novo Pedido de Requisição de Saída</h3>

                        <div className='dadosPrincipais'>
                            <div className='numeroRequisicao'>
                                <span>Dados Principais | </span>
                                <span>Requisição Nº:  </span>
                                <input type="number" className='nRequisicao' />
                            </div>

                            <div className='camposDados'>
                                <div className='departamento'>
                                    <div>
                                        <span>ID: </span>
                                        <input type="number" className='idDep'/>
                                    </div>
                                    <div>
                                        <span>Departamento: </span>
                                        <input type="text" className='nomeDep'/>
                                    </div>
                                    <div>
                                        <span>Data: </span>
                                        <input type="date" className='dataReq'/>
                                    </div>
                                </div>

                                <div className='funcionario'>
                                    <div>
                                        <span>ID: </span>
                                        <input type="number" className='idFunc'/>
                                    </div>
                                    <div>
                                        <span>Funcionário: </span>
                                        <input type="text" className='nomeFunc'/>
                                    </div>
                                    <div>
                                        <span>Cargo: </span>
                                        <input type="text" className='cargo'/>
                                    </div>
                                </div>

                                <div className='motivos'>
                                    <div className='selectMotivo'>
                                        <span>Categoria Motivo: </span>
                                        <div>
                                        <select name="" id="categoriaMotivo"></select>
                                        <img src="./src/Icons/add.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className='selectMotivo'>
                                        <span>Motivo: </span>
                                        <div>
                                        <select name="" id="motivosFiltrados"></select>
                                        <img src="./src/Icons/add.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className='selectMotivo'>
                                        <span>Nível de Prioridade: </span>
                                        <div className='radios'>
                                            <div className='grupoPrioridade'>
                                                <input className='chkPrioridade' type="radio" name="prioridade" id="urgente" />
                                                <span>Urgente</span>
                                            </div>
                                            <div className='grupoPrioridade'>
                                                <input className='chkPrioridade' type="radio" name="prioridade" id="medio" />
                                                <span>Médio</span>
                                            </div>
                                            <div className='grupoPrioridade'>
                                                <input className='chkPrioridade' type="radio" name="prioridade" id="baixo" />
                                                <span>Baixo</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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

                    </div>

                </div>

                <div className='footer'>

                </div>

            </div>
        </>
    )

}

export default Almoxarifado