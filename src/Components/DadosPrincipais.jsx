import '../Styles/DadosPrincipais.css'
import NumberInput from '../Hooks/InputNumber'
import CorInput from '../Hooks/CorInput'
import { encontrarDepartamento, encontrarFuncionario } from '../Hooks/DadosDepartamentoEFuncionario'
import { useState } from 'react';

function DadosPrincipais () {

    const [idDep, setIdDep] = useState();
    const [idFunc, setIdFunc] = useState();

    const [departamento, setDepartamento] = useState(null);
    const [funcionario, setFuncionario] = useState(null);

    const handleIdDepartamentoBlur = (event) => {
        const dep = encontrarDepartamento(event.target.value);
        setDepartamento(dep);
    };

    const handleIdFuncionarioBlur = (event) => {
        const func = encontrarFuncionario(event.target.value);
        setFuncionario(func);
    };



    return (
        <>
        <div className='dadosPrincipais'>
          <CorInput/>  
                            <div className='numeroRequisicao'>
                                <span>Dados Principais | </span>
                                <span>Requisição Nº:  </span>
                                <input type='number' data-isnumber='true' className='nRequisicao' />
                            </div>

                            <div className='camposDados'>
                                <div className='departamento'>
                                    <div>
                                        <span>ID: </span>
                                        <input type="number" data-isnumber='true' value={idDep} onChange={(Event) => setIdDep(Event.target.value)} onBlur={handleIdDepartamentoBlur}
                                        className='idDep' id='idDepartamento'/>
                                    </div>
                                    <div>
                                        <span>Departamento: </span>
                                        <input type="text" readOnly value={departamento ? departamento.Descricao : ''} data-obrigatorios='true' className='nomeDep'/>
                                    </div>
                                    <div>
                                        <span>Data: </span>
                                        <input type="date" data-obrigatorios='true' className='dataReq'/>
                                    </div>
                                </div>

                                <div className='funcionario'>
                                    <div>
                                        <span>ID: </span>
                                        <input type="number" value={idFunc} onChange={(Event) => setIdFunc(Event.target.value)} onBlur={handleIdFuncionarioBlur}
                                        className='idFunc' id='idFuncionario'/>
                                    </div>
                                    <div>
                                        <span>Funcionário: </span>
                                        <input type="text" readOnly value={funcionario ? funcionario.nomeFunc : ''} data-obrigatorios='true' className='nomeFunc'/>
                                    </div>
                                    <div>
                                        <span>Cargo: </span>
                                        <input type="text" value={funcionario ? funcionario.cargoFunc : ''} data-obrigatorios='true' className='cargo'/>
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