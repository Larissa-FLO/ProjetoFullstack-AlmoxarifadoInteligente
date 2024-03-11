import '../Components/DadosPrincipais.css'

function DadosPrincipais () {

    return (
        <>
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
        </>
    )
}

export default DadosPrincipais