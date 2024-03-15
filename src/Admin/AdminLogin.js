import React from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
const AdminLogin = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={async (values, action) => {
                    console.log(values);
                    axios.post('http://localhost:3000/station/login' ,values)
                        .then((res) => {
                            console.log(res);
                            localStorage.setItem('token', res.data.token)
                            alert('Login SuccessFully')
                        })
                        .catch((error)=>{
                            console.log(error);
                        })
                    action.resetForm()
                }}
            >
                <Form className='flex justify-center'>
                    <div className="mt-5 border-2 border-blue-600 p-8 rounded-md">

                        <h1 className='font-bold text-center text-xl mb-4'>Admin Login</h1>

                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email : </label>
                        <Field className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                        />

                        <br />

                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password: </label>
                        <Field className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='password' id="lastName" name="password" placeholder="password" />
                        <br />
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default AdminLogin