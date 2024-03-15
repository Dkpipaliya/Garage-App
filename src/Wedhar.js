import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Wedhar() {
    const [data, setData] = useState([])
    console.log(data);
    const [country, setCountry] = useState('');

    const Addhandler = () => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=c92cc06629e74da18c041757241201&q=${country}&aqi=no`)
            .then((res) => {
                console.log(res.data.current.temp_c);
                setData(res.data);
                //   setCountry('');
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            <label htmlFor="">City Name</label>
            <input type="text" className='border' name="" id="" value={country} onChange={(evt) => setCountry(evt.target.value)} />
            <button onClick={Addhandler}>Click</button>
            <h1 id='dispaly'></h1>

            {
                data.map((el) => {
                    return<>
                        console.log({el});
                    </>
                })
            }
            
        </div>
    )
}

export default Wedhar