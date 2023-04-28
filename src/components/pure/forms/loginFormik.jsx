import React from 'react';
import {useHistory} from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
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

    const history = useHistory();



    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={ initialCredentials }
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(values, null, 2));
                await localStorage.setItem('credentials', values);
                history.push('/profile')
                }}
            >
                {({ values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur }) => (
                            <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="example@email.com" />

                            {/**Email Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <div>
                                        <ErrorMessage name='email'></ErrorMessage>
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
                            {isSubmitting ? <p>Login your credentials ...</p> : null}
                        </Form>
                )}
                

                
            </Formik>
        </div>
    );
}

export default LoginFormik;
