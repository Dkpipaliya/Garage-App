import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';
const Blog = () => {
    const [Data, setdata] = useState([])
    const [Edit, setedit] = useState([{ title: '' , desc: '' , image: ''}])
    const [id, setId] = useState('')
    console.log(id);
    const getData = () => {
        const token = localStorage.getItem("token")
        axios.get('http://localhost:3000/blog/find', {
            headers: { usertoken: token }
        })
            .then((res) => {
                console.log(res.data.data);
                setdata(res.data.data)
            })  
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const Deletehendler = (id) => {
        const token = localStorage.getItem("token")
        axios.delete('http://localhost:3000/blog/delete?id=' + id, {
            headers: { usertoken: token }
        })
            .then((res) => {
                console.log(res.data);
                alert('Data Delete Successfully')
                getData()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const Edithendler = (id) => {
        setId(Data[id]._id)
        setedit(Data[id])
    }
    return (
        <>
            <Formik
                initialValues={Edit}
                enableReinitialize={true}
                onSubmit={async (values, action) => {
                    // console.log(values);
                    let blogfrom = new FormData()
                    blogfrom.append('title', values.title)
                    blogfrom.append('desc', values.desc)
                    blogfrom.append('image', values.image)
                    if (id)
                    {
                        const token = localStorage.getItem("token")
                        axios.patch('http://localhost:3000/blog/update?id='+id, blogfrom, {
                            headers: { usertoken: token },
                            "Content-Type": "multipart/form-data",

                        })
                            .then((res) => {
                                console.log(res.data);
                                getData();
                                setId('')
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    }
                    else {
                        const token = localStorage.getItem("token")
                        axios.post('http://localhost:3000/blog/create', blogfrom, {
                            headers: { usertoken: token },
                            "Content-Type": "multipart/form-data",
                        
                        })
                            .then((res) => {
                                console.log(res.data.data);
                                getData();
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    }
                    action.resetForm();
                    setedit({title: '' , desc: '' , image: ''  })

                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit} className='flex justify-center'>

                        <div className="border-black border-[2px] rounded-lg p-3 text-center">

                            <h1 className='bg-blue-600 mx-auto w-[200px] mb-5 -mt-8 text-3xl font-bold text-white p-5 rounded-lg '>Blog</h1>

                            <label htmlFor="lastName">Title : </label>
                            <Field class=' border-black outline-none  border-b-[2px] mb-5 text-center' id="lastName" name="title" placeholder="Title" />

                            <br />

                            <label htmlFor="password">Desc: </label>
                            <Field class=' border-black outline-none  border-b-[2px] mb-5 text-center' id="lname" name="desc" placeholder="Desc" />

                            <br />

                            <label htmlFor="password">Imag: </label>
                            <input className='mb-5' type='file' onChange={(e) => props.setFieldValue('image', e.target.files[0])} />

                            <br />

                            <button class=' font-bold mb-4 bg-rose-600 text-white rounded-lg py-1 px-9' type="submit">Submit</button>
                        </div>
                    </form>
                )}
            </Formik>
            <div className="container">
                <div className='flex'>
                    {
                        Data.map((el, i) => {
                            return (
                                <div className="w-[30%]  shadow-[0px_0px_5px_0.9px] rounded-lg overflow-hidden m-5">
                                    <img src={`http://localhost:3000/images/${el.image}`} alt="" width="100%" className='h-[250px]' />
                                    <ul className='border-black border-t-[2px] p-2'>
                                        <li className='font-bold mb-2 text-center text-xl'>{el.title}</li>
                                        <li>{el.desc}</li>
                                    </ul>
                                    <div className=" flex justify-center">
                                        <button className='font-bold mb-4 bg-rose-600 text-white rounded-lg py-1 px-9 me-3' onClick={() => Deletehendler(el._id)}>Delete</button>
                                        <button className='font-bold mb-4 bg-rose-600 text-white rounded-lg py-1 px-9' onClick={() => Edithendler(i)}>Edit</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Blog