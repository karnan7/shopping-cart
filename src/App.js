import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Row, Col } from 'reactstrap';
import BuyPage from './Components/BuyPage';
import Cart from "./Components/Cart"




function App() {
    const [cartItem, setCartItem] = useState([])

    const addInCart = item => {
        const isAlreadyAdded = cartItem.findIndex(function (array){
            return array.id === item.id
        })

        if (isAlreadyAdded !== -1) {
            toast("Already in Cart", {type: "error"})
        }else{setCartItem([...cartItem, item]);}
        
    };

    const buyNow = () => {
        setCartItem([])
        toast("payment processing", {type: "success",autoClose: 1000})
        setTimeout(()=>(
            toast("Order Completed", {
                type: "success",
                hideProgressBar: true,
                autoClose: 2000,
                theme: "colored",
            })
        ), 2000)
    }

    const removeItem = (item) =>{
       setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
    }
       

    return(
        <Container fluid>
           <ToastContainer newestOnTop/>
            <Row>
                <Col md="8">
                <BuyPage addInCart={addInCart}/>
                </Col>
                <Col md="4">
                    <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
                </Col>
            </Row>
        </Container>
    )
}

export default App;
