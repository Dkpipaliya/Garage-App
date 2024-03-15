import { Formik, Field, } from 'formik';
import axios from 'axios';
const SINGUP = () => {
    return (
        < >
            <Formik
                initialValues={{
                    fname: '',
                    lname: '',
                    uname: '',
                    password: '',
                    email: '',
                    contact: '',
                    profilepic: ''
                }}

                onSubmit={async (values, action) => {
                    console.log(values);
                    let signupForm = new FormData()
                    signupForm.append('fname', values.fname)
                    signupForm.append('lname', values.lname)
                    signupForm.append('uname', values.uname) 
                    signupForm.append('password', values.password)
                    signupForm.append('email', values.email)
                    signupForm.append('contact', values.contact)
                    signupForm.append('profilepic', values.profilepic)
                    console.log(signupForm);
                    axios.post('http://localhost:3000/user/signup', signupForm, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        }
                    })
                        .then((res) => {
                            console.log(res);
                            alert('Sing Up SuccessFully')
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                    action.resetForm();
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit} className='flex justify-center '>

                       <div className="border-black border-[2px] rounded-lg text-center">
                        
                    <h1 className='bg-blue-600 mx-auto w-[200px] mb-5 -mt-5 text-3xl font-bold text-white p-5 rounded-lg '>Sing Up</h1>
                     
                       <label htmlFor="lastName">F Name : </label>
                        <Field class=' border-black outline-none  border-b-[2px] mb-5 text-center' id="lastName" name="fname" placeholder="User Name" />

                        <br />

                        <label htmlFor="lastName">L Name : </label>
                        <Field class=' border-black border-b-[2px] outline-none mb-5 text-center ' id="lname" name="lname" placeholder="L Name" />

                        <br />

                        <label htmlFor="lastName">U Name : </label>
                        <Field class=' border-black border-b-[2px] outline-none mb-5 text-center' id="uname" name="uname" placeholder="U Name" />

                        <br />

                        <label htmlFor="lastName">password : </label>
                        <Field class=' border-black border-b-[2px] outline-none mb-5 text-center' type='password' id="password" name="password" placeholder="password" />

                        <br />

                        <label htmlFor="email">Email : </label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                            class=' border-black border-b-[2px] outline-none mb-5 text-center'
                        />

                        <br />

                        <label htmlFor="lastName">Contact : </label>
                        <Field class='border-black border-b-[2px] outline-none mb-5 text-center' id="contact" name="contact" placeholder="Contact" />

                        <br />

                        <label htmlFor="lastName">Profilepic : </label>
                        <input className='text-center outline-none mb-5 '  type="file" onChange={(e) => props.setFieldValue('profilepic', e.target.files[0])} />
                        
                        <br />

                        <button class=' font-bold mb-4 bg-rose-600 text-white rounded-lg py-1 px-9' type="submit">Submit</button>
                       </div>
                    </form>
                )}
            </Formik>

           
        </>
    )
}
export default SINGUP