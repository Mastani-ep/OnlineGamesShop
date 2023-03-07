import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
        //this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/products')
            .then(response => response.json())
            .then(data => this.setState({products: data}));
    }

    render() {
        const {products, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const productsList = products.map(product => {
            return <tr key={product.id}>
                <td style={{whiteSpace: 'nowrap'}}>{product.name}</td>
                <td>{product.price}</td>
                <td>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                    </div>
                    <h3>Products</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">Email</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {productsList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default ProductsList;