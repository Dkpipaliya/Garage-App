import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
const Services = () => {
    const [data, setData] = useState([])
    const [edit, setEdit] = useState({
        name: '',
        price: '',
    })
    const [id, setId] = useState('')
    const getData = () => {
        const token = localStorage.getItem('token')
        axios.get('http://localhost:3000/services', {
            headers: { authorization: token },
        })
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const DeleteHandler = (id) => {
        const token = localStorage.getItem('token')
        axios.delete('http://localhost:3000/services/' + id, {
            headers: { authorization: token },
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

    const EditHandler = (id) => {
        setId(data[id]._id)
        setEdit(data[id])
    }
    return (
        <div>
            <Formik
                enableReinitialize={true}
                initialValues={edit}
                onSubmit={async (values, action) => {
                    if (id) {
                        const token = localStorage.getItem('token')
                        axios.put("http://localhost:3000/services/" + id, values, {
                            headers: { authorization: token },
                        })
                            .then((res) => {
                                console.log(res);
                                getData()
                                setId('')
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    } else {
                        const token = localStorage.getItem('token')
                        axios.post("http://localhost:3000/services", values, {
                            headers: { authorization: token },
                        })
                            .then((res) => {
                                console.log(res);
                                getData()
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    }

                    action.resetForm()
                    setEdit({
                        name: '',
                        price: '',
                    })
                }}
            >
                <Form className='flex justify-center'>
                    <div className="mt-5 border-2 border-blue-600 p-8 rounded-md">
                        <label htmlFor="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name: </label>
                        <Field class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="lastName" name="name" placeholder="Services Name" />

                        <br />

                        <label htmlFor="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price: </label>
                        <Field class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="lastName" name="price" placeholder="Services Price" />

                        <br />

                        <div className="text-center">
                            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Add Services</button>
                        </div>
                    </div>
                </Form>
            </Formik>

            <table className=''>
                <tr>
                    <th className='p-2 text-lg'>Services Name</th>
                    <th className='p-2 text-lg'>Services Price</th>
                    <th className='p-2 text-lg'>Services Delete</th>
                    <th className='p-2 text-lg'>Services Edit</th>
                </tr>
                {
                    data.map((el, i) => {
                        return <tr className='text-center'>
                            <td className=' font-bold mt-1'>{el.name}</td>
                            <td className=' font-bold mt-1'>{el.price + '$'}</td>
                            <td><button class="text-white mt-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => DeleteHandler(el._id)}> Delete</button></td>
                            <td><button onClick={() => EditHandler(i)} class="text-white mt-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-1"> Edit</button></td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default Services