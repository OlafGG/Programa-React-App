import React from 'react';
import { User } from '../../../models/user.class';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER

    }

    const registerSchema = Yup.object().shape(
        {
            userName: Yup.string()
                .min(6, 'User name yoo short')
                .max(12, 'User name too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
                role: Yup.string()
                    .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
                    .required('Roles is required'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password is too short'),
                // ! Optional, is just to have a password validation with regex
                //! .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/)
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'Password must match!'
                    )
                }).required('You must confirm the password')
            
        }
    )

    const submit = (values) => {
        alert('Create a user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}

            >
                {({ values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur }) => (
                            <Form>
                                <label htmlFor="userName">Username</label>
                                <Field id="username" name="username" placeholder="Your Username" />
                                {
                                    errors.userName && touched.userName && 
                                    (
                                        <div>
                                            <ErrorMessage name='username' component={'div'}></ErrorMessage>
                                        </div>
                                    )
                                }



                                <label htmlFor="email">Email</label>
                                <Field id="email" name="email" placeholder="example@email.com" />
                                {
                                    errors.email && touched.email && 
                                    (
                                        <div>
                                            <ErrorMessage name='email' component={'div'}></ErrorMessage>
                                        </div>
                                    )
                                }

                                <label htmlFor="password">Password</label>
                                <Field id="password" name="password" placeholder="Password" type="password" />

                                {
                                errors.password && touched.password && 
                                    (
                                        <div>
                                            <ErrorMessage name='password' component={'div'}></ErrorMessage>
                                        </div>
                                    )
                                }

                                <label htmlFor="confirm">Confirm Password</label>
                                <Field id="confirmd" name="confirm" placeholder="Confirm your password" type="password" />

                                {
                                errors.confirm && touched.confirm && 
                                    (
                                        <div>
                                            <ErrorMessage name='confirm' component={'div'}></ErrorMessage>
                                        </div>
                                    )
                                }

                            <button type="submit">Register Account</button>
                            {isSubmitting ? (<p>Sending your credentials ...</p>) : null}
                            </Form>    
                        )
                }
            </Formik>
        </div>
    );
}

export default RegisterFormik;
