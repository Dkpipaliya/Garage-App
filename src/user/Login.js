import axios from 'axios';
import { Formik, Field, Form } from 'formik';
const Login = () => {
    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={async (values, action) => {
                    console.log(values);
                    axios.post('http://localhost:3000/users/login' , values)
                    .then((res)=>{
                        console.log(res);
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

                        <h1 className='font-bold text-center text-xl mb-4'>User Login</h1>

                        <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email : </label>
                        <Field class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                        />

                        <br />

                        <label htmlFor="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password: </label>
                        <Field class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='password' id="lastName" name="password" placeholder="password" />

                        <br />

                        <div className="text-center">
                            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Submit</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )



}
export default Login