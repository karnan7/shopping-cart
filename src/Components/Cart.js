import React from "react";
import{
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Row,
    Col,
} from "reactstrap"

const Cart = ({cartItem, removeItem, buyNow}) => {
    let amount = 0;

    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    });

    return(
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                            <img
                            height={80}
                            src={item.tinyImage}
                            alt="laptop"
                            />
                            </Col>
                            <Col className="text-center">
                             <p className="text-success">{item.productName}</p>
                             <span>Price :- {item.productPrice}</span>
                             <Button 
                             color="danger" onClick={() => removeItem(item)}
                             >Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>

            {/* if everything is empty */}
            {
                cartItem.length >0 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>Grand Total</CardHeader>
                        <CardBody>
                            Total Amount =  {amount}
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" onClick={buyNow}>
                                Go to Payment
                            </Button>
                        </CardFooter>
                    </Card>
                ) : (
                    <h1 className="text-warning">Cart is empty </h1>
                )
            }
        </Container> 
    )
}

export default Cart;