import {Link} from 'react-router-dom/cjs/react-router-dom'
import '../App.css';
const Demo = ()=>{
    return(

        <>
            <span><Link to='/'>SingUp</Link></span>
            <span><Link to='/Login'>Login</Link></span>
            <span><Link to='/Blog'>Blog</Link></span>
        </>
    )
}
export default Demo
