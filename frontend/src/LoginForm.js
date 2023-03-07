import React, {Component} from "react";
import {Form, FormGroup, Button, Label, Input, Container, Alert} from "reactstrap";

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', message: '', messagePositive:false};
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        const data = { email, password };
        try {
            const response = await fetch('/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();

            if (response.ok) {
                this.setState({
                    message: responseData.message,
                    messagePositive: true
                });
            } else {
                throw new Error(responseData.message);
            }
        } catch (error) {
            this.setState({
                message: error.message,
                messagePositive: false
            });
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                {this.state.message && this.state.messagePositive && <Alert color="success">{this.state.message}</Alert>}
                {this.state.message && !this.state.messagePositive && <Alert color="danger">{this.state.message}</Alert>}
                <Container fluid className="register-form-container">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup className="form-input">
                            <Label for="emailField">
                                Email
                            </Label>
                            <Input id="emailField" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup className="form-input">
                            <Label for="password">
                                Password
                            </Label>
                            <Input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                        </FormGroup>
                        <Container className="register-btn">
                            <Button type="submit" className="btn-register">Register</Button>
                        </Container>
                    </Form>
                </Container>
            </div>
        );
    }
}