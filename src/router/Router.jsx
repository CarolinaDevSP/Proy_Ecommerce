import { createBrowserRouter } from "react-router-dom"
import App from "../components/templates/App"
import Error404 from "../components/pages/Error404"
import Products from "../components/pages/Products"
import Home from "../components/pages/Home"

const router = createBrowserRouter([//va a recibir un array de todas las rutas que quiero que tenga mi appp 
    { //  las rutas van a ser un objeto :
        path: "/",
        element: <App />, //en el componenete quiero que se renderice app
        errorElement: <Error404 />,
        children: [
            { 
            index: true,
            element: <Home />, 
            },
            { 
            path: "/productos",
            element: <Products />, 
            }
        ]
    }
   
])

export default router