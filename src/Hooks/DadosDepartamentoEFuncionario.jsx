import { departamentos, funcionarios } from '/DataBase/dados.js';

export function encontrarDepartamento(id) {
    return departamentos.find(dep => dep.idDep === parseInt(id));
}

export function encontrarFuncionario(id) {
    const func = funcionarios.find(func => func.idFunc === parseInt(id));
    if (func) {
        const departamento = encontrarDepartamento(func.idDep);
        return {
            nomeFunc: func.nomeFunc,
            cargoFunc: func.cargoFunc,
            departamento: departamento ? departamento.Descricao : '',
            responsavel: departamento ? departamento.responsavel : '',
        };
    }
    return null;
}
