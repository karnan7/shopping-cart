import React from "react";

import {
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardText,
    Button
} from "reactstrap"


const CartItem = ({product, addInCart}) => {
    return(
        <Card className="mt-2 mb-1">
            <CardImg
            top
            height="250px"
            width="100%"
            src={product.smallImage}
            />
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText className="secondary">  Price: {product.productPrice}  Rs. </CardText>
                <Button
                color="success"
                onClick={() => addInCart(product)}
                >Add To Cart</Button>
            </CardBody>
        </Card>
    )
}

export default CartItem