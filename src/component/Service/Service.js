import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {img,courseName,mentor,price,ratting,reviewer} = props.course;
    return (
        <div>
            <Col>
                <Card className="container">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>
                        <h6>{mentor}</h6>
                        <h6>Ratting: {ratting}</h6>
                        <h6>Review: {reviewer}</h6>
                        <h6>Price: ${price}</h6>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;