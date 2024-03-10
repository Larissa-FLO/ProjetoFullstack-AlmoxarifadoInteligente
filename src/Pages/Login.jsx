import './Login.css'
import Almoxarifado from './Almoxarifado'

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
            <button className='btn'><a className='linkbtn' href='#container'>Entrar</a></button>
            <button className='btnCadastrar'>Novo? Cadastre-se</button>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Login