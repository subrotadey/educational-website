import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Body = (props) => {
    const {img,courseName,mentor,price} = props.course;
    return (
        <div>
            <Col>
                <Card className="container">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>
                        <h6>{mentor}</h6>
                        <h6>Price: ${price}</h6>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Body;