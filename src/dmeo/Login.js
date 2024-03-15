import { Formik, Field, Form } from 'formik';
import axios from 'axios';
const LOGIN = () => {
    return (
        <>
            <Formik
                initialValues={{
                    uname: '',
                    password: '',
                }}
                onSubmit={async (values, action) => {
                    console.log(values);
                    axios.post('http://localhost:3000/user/login', values)
                        .then((res) => {
                            localStorage.setItem("token", res.data.usertoken)
                            console.log(res);
                            alert('Login saccessFull')
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                    action.resetForm();
                }}
            >
                <Form className='flex justify-center'>
                    <div className="border-black border-[2px] rounded-lg p-3 text-center">
                    <h1 className='bg-blue-600 mx-auto w-[200px] mb-5 -mt-8 text-3xl font-bold text-white p-5 rounded-lg '>Login</h1>

                        <label htmlFor="lastName">UName : </label>
                        <Field class=' border-black outline-none  border-b-[2px] mb-5 text-center' id="lastName" name="uname" placeholder="User Name" />

                        <br />

                        <label htmlFor="password">Password: </label>
                        <Field class=' border-black outline-none  border-b-[2px] mb-5 text-center' id="lname" name="password" placeholder="L Name" />
                        <br />

                        <button type="submit" class=' font-bold mb-4 bg-rose-600 text-white rounded-lg py-1 px-9'>Submit</button>
                    </div>

                </Form>
            </Formik>

        </>
    )
}
export default LOGIN