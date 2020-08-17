import React from 'react'

import {
Container,
ListGroup,
ListGroupItem,
Button,
CardHeader,
CardBody,
Card,
CardFooter,
Col,
Row
} from 'reactstrap'

const CardItem =({cartitem,removeItem,buyNow})=>{

    let amount =0;
    cartitem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.prductPrice) 
    })
    return(
        <Container fluid>
        <h1 className="text-success">your cart</h1>
        <ListGroup>
        {cartitem.map(item => (
            <ListGroupItem key={item.id}>
            <Row>
                <Col>
                <img height={80}
                src={item.tinyImage}/>
                </Col>

                <Col className="text-center">

                <div className="text-primary">
                {item.productName}
                </div>
                <span>
                price = {item.prductPrice}</span>  
            <Button color="danger" onClick={()=> removeItem(item)}>REMOVE</Button>
                </Col>
            </Row>
            
            </ListGroupItem>

           
        ))}

        </ListGroup>

        {/* if everything is empty */}
            {
                cartitem.lenght >=1 ?(
                    <Card className="text-center">
                    <CardHeader>
                        GRAND TOTAL 
                    </CardHeader>

                    <CardBody>
                        YOUR AMOUNT for {cartitem.lenght} product is {amount}
                    </CardBody>

                    <CardFooter >
                        <Button color ="success" onClick={buyNow}>PAY HERE </Button>
                    </CardFooter>

                    </Card>
                ) :(
                    <h1 className="text-warning"> Cart is empty</h1>
                )
            }
        </Container>

    )

}


export default CardItem;