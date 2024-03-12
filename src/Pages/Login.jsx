import '../Styles/Login.css'
import { Link } from 'react-router-dom'

function Login() {
  

  return (
    <>
    <div className='container'>
        <div className='boxImagem'>
            <img src="./src/Images/ImagemLogin.png" alt="" className='imagemLogin' />
        </div>
        <div className='boxLogin'>
            <div className='caixaLogin'>
                <div>
                <img src="./src/Icons/user.svg" alt="" /> 
                <input type="text" />
                </div>

                <div>
                <img src="./src/Icons/password.svg" alt="" /> 
                <input type="password" className='inputSenha'/>
                </div>
            </div>

            <div className='botoes'>
            <Link to={'/almoxarifado'} className='btn'>Entrar</Link>
            <button className='btnCadastrar'>Novo? Cadastre-se</button>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Login