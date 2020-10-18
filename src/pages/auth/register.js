import {useEffect, useState} from 'react';
import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, Input, Button, FormFeedback, Label, InputGroup, InputGroupAddon } from 'reactstrap';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Head from 'next/head';
import Link from 'next/link';
import styles from './login.module.scss';
import utilStyles from '../../styles/utils.module.scss';

import AuthLayout from "../../layouts/AuthLayout";
//i18n
import { useTranslation } from 'react-i18next';

//redux store
//import { loginUser, apiError } from '../../redux/actions';

//Import Images






export default function LogIn(props) {


    const [user, setUser] = useState(false);
    const [signUpError, setSignUpError] = useState(false);
    
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required'),
            email: Yup.string().email('Enter proper email').required('Required'),
            password: Yup.string()
                .required('Required')
        }),
        onSubmit: values => {
            props.registerUser(values);
        },
    });
  
    return (

        <React.Fragment>

            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5} >
                            <div className="text-center mb-4">
                                <Link href="/" passHref className="auth-logo d-block">
                                    <img src="/images/practxLogo-dark.png" alt="Practx logo dark" height="100" className="logo logo-dark"/>
                                </Link>

                                <h4 className="mt-3">Sign up</h4>

                                <p className="text-muted mb-4"> Get your Practx account now </p>
                                
                            </div>


                            <Card>
                            <CardBody className="p-4">
                                        {
                                            signUpError && <Alert color="danger">{props.error}</Alert>
                                        }
                                        {
                                            user && <Alert variant="success">Thank You for registering with us!</Alert>
                                        }
                                <div className="p-3">
                                        
                                    <Form onSubmit={formik.handleSubmit}>
    
                                        <FormGroup>
                                            <Label> Email </Label>
                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                                <InputGroupAddon addonType="prepend">
                                                    <span className="input-group-text border-light text-muted">
                                                        <i className="ri-user-2-line"></i>
                                                    </span>
                                                </InputGroupAddon>
                                                <Input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    className="form-control bg-soft-light border-light"
                                                    placeholder="Enter email"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                    invalid={formik.touched.email && formik.errors.email ? true : false}
                                                />
                                                {formik.touched.email && formik.errors.email ? (
                                                    <FormFeedback type="invalid">{formik.errors.email}</FormFeedback>
                                                ) : null}
                                            </InputGroup>
                                        </FormGroup>

                                        <FormGroup>
                                            <Label> Username </Label>
                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                                <InputGroupAddon addonType="prepend">
                                                    <span className="input-group-text border-light text-muted">
                                                        <i className="ri-user-2-line"></i>
                                                    </span>
                                                </InputGroupAddon>
                                                <Input
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    className="form-control bg-soft-light border-light"
                                                    placeholder="Enter Username"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.username}
                                                    invalid={formik.touched.username && formik.errors.username ? true : false}
                                                />
                                                {formik.touched.username && formik.errors.username ? (
                                                    <FormFeedback type="invalid">{formik.errors.username}</FormFeedback>
                                                ) : null}
                                            </InputGroup>
                                        </FormGroup>

                                        <FormGroup className="mb-4">
                                            <Label> Password </Label>
                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                                <InputGroupAddon addonType="prepend">
                                                    <span className="input-group-text border-light text-muted">
                                                        <i className="ri-lock-2-line"></i>
                                                    </span>
                                                </InputGroupAddon>
                                                <Input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    className="form-control bg-soft-light border-light"
                                                    placeholder="Enter Password"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.password}
                                                    invalid={formik.touched.password && formik.errors.password ? true : false}
                                                />
                                                {formik.touched.password && formik.errors.password ? (
                                                    <FormFeedback type="invalid">{formik.errors.password}</FormFeedback>
                                                ) : null}
                                                
                                            </InputGroup>
                                        </FormGroup>

                                        <div>
                                            <Button color="primary" block className=" waves-effect waves-light" type="submit">Sign up</Button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <p className="text-muted mb-0"> By registering you agree to the Practx <Link href="#" className="text-primary"> Terms of Use </Link></p>
                                        </div>

                                    </Form>
                                </div>
                            </CardBody>
                        </Card>

                        <div className="mt-5 text-center">
                            <p> Already have an account ? <Link href="/" className="font-weight-medium text-primary"> Signin </Link> </p>
                            <p>©  2020 Practx.  Crafted with <i className="mdi mdi-heart text-danger"></i> by ReverSoftwares</p>
                        </div>

                            

                        </Col>
                    </Row>
                </Container>
            </div>

        </React.Fragment>

    )
}
