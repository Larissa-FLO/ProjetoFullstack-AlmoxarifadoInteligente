import {Route, Routes} from 'react-router-dom'
import Almoxarifado from './Pages/Almoxarifado'
import Login from './Pages/Login'

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<Login/>} />
        <Route path='/almoxarifado' element={<Almoxarifado/>} />
        {/* <Route path='/gerenciadorProdutos' element={<GerenciadorProduto/>} /> */}

      </Routes>
    </>
  )
}

export default App
