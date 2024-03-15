import React from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
const AdminSingUP = () => {
    return (
        <div><Formik
            initialValues={{
                name: "",
                email: '',
                password: '',
                contact: '',
                address:'',
                image:''
            }}
            onSubmit={async (values, action) => {
                console.log(values);
                let SingupFrom = new FormData()
                SingupFrom.append('name', values.name)
                SingupFrom.append('email', values.email)
                SingupFrom.append('password', values.password)
                SingupFrom.append('contact', values.contact)
                SingupFrom.append('address', values.address)
                SingupFrom.append('image', values.image)
                axios.post('http://localhost:3000/station/signup' , SingupFrom ,  {
                    "Content-Type": "multipart/form-data"
                })
                .then((res)=>{
                    console.log(res);
                    alert('Sing Up SuccessFully')
                })
                .catch((error)=>{
                    console.log(error);
                })
                action.resetForm()
            }}
        >
           {props => (
                    <form onSubmit={props.handleSubmit} className='flex justify-center'>
                    <div className="mt-5 border-2 border-blue-600 p-8 rounded-md w-[35%]">
                    
                    <h1 className='font-bold text-center text-xl mb-4'>Admin Singup</h1>

                    <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email : </label>
                    <Field class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                    />

                    <label htmlFor="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password: </label>
                    <Field class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='password' id="lastName" name="password" placeholder="password" />

                    <div className="flex">
                        <div className="m-1">
                            <label htmlFor="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name: </label>
                            <Field class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="lastName" name="name" placeholder="Name" />
                        </div>
                        <div className="m-1">
                            <label htmlFor="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact: </label>
                            <Field class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='number' id="lastName" name="contact" placeholder="Contact" />
                        </div>
                    </div>

                    <label htmlFor="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address: </label>
                    <Field as='textarea'  class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='number' id="lastName" name="address" placeholder="Address" />

                    <label htmlFor="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imag: </label>
                    <input type='file' onChange={(e) => props.setFieldValue('imag' , e.target.files[0])} />
                   
                    <div className="text-center">
                        <button class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Submit</button>
                    </div>
                </div>
                </form>
                )}
        </Formik>
        </div>
    )
}

export default AdminSingUP