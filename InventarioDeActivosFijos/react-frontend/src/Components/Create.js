import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Create extends Component {
    render() {
        return (
            <div className="form-wrapper">
                <Form >
                    <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="Count">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="Stock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="boolean" />
                    </Form.Group>
                    <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" />

                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">
                    Create Activo
                    </Button>
                </Form>
            </div>
        )
    }
}
