import imag from './img/2.jpg'
import imag3 from './img/3.jpg'
import imag4 from './img/4.webp'
import imag5 from './img/5.jpg'
import imag6 from './img/6.jpg'
import imag7 from './img/7.jpg'
const Home = () => {
    return (
        <>
            <div className="w-full bg">
                <div className="container">
                    <div className="w-60">
                        <div className="title">
                            <h1>We Are Chooper</h1>
                            <h2>ALWAYS BE ORIGINAL</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br /> ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis  <br /> parturient montes, nascetur ridiculus mus.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full pading">
                <div className="container">
                    <div className="flex align-center">
                        <div className="w-50 p">
                            <img src={imag} alt="" width='100%' height='400px' />
                            <div className="w">
                                <img src={imag3} alt="" width='100%' />
                            </div>
                        </div>
                        <div className="w-50">
                            <div className="pp">
                                <span className='au'>OAR GARAGE</span>
                                <h1>WE OVER 5 YEARS EXPERIENCE</h1>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
                                <div className="m">
                                    <a href="https://camaro.garagewebsite.online/repairs/" target='_blank' className='btn'>More Info...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full pading">
                <div className="container">
                    <div className="flex align-center">
                        <div className="w-50 p">
                            <img src={imag4} alt="" width='100%' height='400px' />
                            <div className="w">
                                <img src={imag5} alt="" width='100%' />
                            </div>
                        </div>
                        <div className="w-50">
                            <div className="pp">
                                <span className='au'>Garax</span>
                                <h1>WE OVER 6 YEARS EXPERIENCE</h1>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
                                <div className="m">
                                    <a href="https://garage.thimpress.com/services/" target='_blank' className='btn'>More Info...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

            <div className="w-full pading">
                <div className="container">
                    <div className="flex align-center">
                        <div className="w-50 p">
                            <img src={imag6} alt="" width='100%' height='400px' />
                            <div className="w">
                                <img src={imag7} alt="" width='100%' />
                            </div>
                        </div>
                        <div className="w-50">
                            <div className="pp">
                                <span className='au'>CARSERVICE</span>
                                <h1>WE OVER 9 YEARS EXPERIENCE</h1>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
                                <div className="m">
                                    <a href="https://quanticalabs.com/wp_themes/carservice/services/" target='_blank' className='btn'>More Info...</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home