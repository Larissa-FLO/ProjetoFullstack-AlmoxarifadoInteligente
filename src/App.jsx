import {Route, Routes} from 'react-router-dom'
import Almoxarifado from './Pages/Almoxarifado'
import Login from './Pages/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Almoxarifado/>} />
      </Routes>

      {/* <Routes>
        <Route path='/almoxarifado' element={<Almoxarifado/>} />
      </Routes> */}
    </>
  )
}

export default App
