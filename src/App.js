import { Home } from "./Home"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "react-use-cart";
import Card from "./Card";




function App(){
    return (
        <CartProvider>
            <Home/>
            <Card/>
        </CartProvider>
    )
}
export default App