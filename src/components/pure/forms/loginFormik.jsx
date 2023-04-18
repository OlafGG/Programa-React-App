import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)

const LoginFormik = () => {
    
    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={ initialCredentials }
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                }}
            >
                { props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur
                    } = props;

                    return (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="example@email.com" />

                            {/**Email Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <div className='error'>
                                        <p>{errors.email}</p>
                                    </div>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="******"
                                type="password"
                            />

                            {
                                errors.password && touched.password && 
                                (
                                    <div className='error'>
                                        <p>{errors.password}</p>
                                    </div>
                                )
                            }

                            <button type="submit">Login</button>
                        </Form>
                    )
                }}

                
            </Formik>
        </div>
    );
}

export default LoginFormik;
