import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UServices = () => {
    const [data, setData] = useState([])

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
    return (
        <div className=''>
            <table className='flex justify-center'>
                <div>
                    <tr>
                        <th className='p-2 text-lg'>Services Name</th>
                        <th className='p-2 text-lg'>Services Price</th>
                    </tr>
                    {
                        data.map((el, i) => {
                            return <tr className='text-center'>
                                <td className=' font-bold mt-1'>{el.name}</td>
                                <td className=' font-bold mt-1'>{el.price + '$'}</td>
                                <td><button class="text-white mt-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Add </button></td>
                            </tr>
                        })
                    }
                </div>
            </table>
        </div>
    )
}

export default UServices