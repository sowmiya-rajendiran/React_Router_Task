import { createBrowserRouter, RouterProvider } from "react-router";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./pages/Navbar";

let routes = [
    {
        path : '/',
        element : < Navbar />,
        children : [
            {
                path : '/',
                element : <Product />
            },
            {
                path : 'Cart',
                element : <Cart />
            }
        ]
    }
    
]
let router = createBrowserRouter(routes , {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
    },
})

function App(){
    return(
        <>
            <RouterProvider
                router = {router}
                future={{
                    v7_startTransition: true,
                }}
            />
        </>
    )

}

export default App;