import { Link } from 'react-router-dom/cjs/react-router-dom'
const Header = () => {
    return (
        <>
            <div className="w-full bg-color">
                <div className="container p-r">
                    <div className="flex just-between align-center">
                        <div className="w-20">
                            <span> The Garage</span>
                        </div>
                        <div className="w80 mega">
                            <ul className='flex'>
                                <li className='padding'><Link to='/'>Home</Link></li>
                                <li className='padding'><Link to='/Singup'>Singup</Link></li>
                                <li className='padding'><Link to='/Login'>Login</Link></li>
                                <li className='padding'><Link to='/UServices'>Services</Link></li>
                                <li className='p-r padding text-white'><a className='cursor-pointer'>Admin</a>
                                    <ul className='ul font-bold'>
                                        <li className='bg-red-600 p-2 hover:bg-blue-300'><Link to='/AdminSingup'>Admin SingUp</Link></li>
                                        <li className='bg-red-600 p-2 hover:bg-blue-300'><Link to='/AdminLogin'>Admin Login</Link></li>
                                        <li className='bg-red-600 p-2 hover:bg-blue-300'><Link to='/Services'>Services</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Header