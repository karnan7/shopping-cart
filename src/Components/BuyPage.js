import React, {useState, useEffect} from "react";
import Axios from "axios";
import {faker} from "@faker-js/faker"
import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";

// const apiKey = "INSERT_API_KEY";

const url = "http://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
const localurl = "https://api.npoint.io/d38ff4d3101a9462b50c"

const BuyPage = ({addInCart}) => {
    const [product, setProduct] = useState([])

    // const fetchPhotos = async () => {
    //     const response = await Axios.get(url, {
    //         header: {
    //             Authorization: apiKey
    //         }
    //     })

    const fetchPhotos = async () => {
        const {data} = await Axios.get(localurl)
        const {photos}= data

        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: faker.commerce.product(),
            productPrice : faker.finance.amount(),
            id: faker.datatype.uuid()

        }))

        setProduct(allProduct)
    }


    useEffect(() => {
        fetchPhotos()
    }, []);

    return(
        <Container fluid>
            <h1 className='text-success text-center'>
                BuyPage
            </h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CartItem product={product} addInCart={addInCart}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )

};

export default BuyPage;