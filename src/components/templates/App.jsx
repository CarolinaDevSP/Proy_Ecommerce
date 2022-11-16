import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"
//mi plantilla para todas las pag
const App = () => {
  return (
    <div>
        <MainHeader />
        <Outlet />
    </div>
  )
}

export default App