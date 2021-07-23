import React from "react";
import car1 from '../../image/Screenshot_5.png';
import car2 from '../../image/Screenshot_6.png';
import car3 from '../../image/Screenshot_7.png';

class Frame extends React.Component{
    render(){
        return <div className="App">
            <section className="" style={{ backgroundColor: 'rgba(0, 0, 0, 1)',}}>
                <div className="container">
                    <div className="d-flex flex-column align-items-center justify-content-center mb-5">
                    <p className="sectionTitle text-white">Framer is for teams, too.</p>
                <p className="sectionText my-2 text-light">Join a growing list of companies who use Framer to make all the products you know and love.</p>
               <a href="#" className="btn btn-outline-light">Learn about Enterprise</a>
                    </div>
                    
                    
                    <div className="d-flex justify-content-center flex-wrap justify-content-left">
                        <div className="me-4 mb-4">
                            <img src={car1} alt="" />
                        </div>
                        <div className="me-4 mb-4">
                            <img src={car2} alt="" />
                        </div>
                        <div className="me-4 mb-4">
                            <img src={car3} alt="" />
                        </div>
                        <div className="me-4 mb-4">
                            <img src={car1} alt="" />
                        </div>
                        <div className="me-4 mb-4">
                            <img src={car2} alt="" />
                        </div>
                        <div className="me-4 mb-4">
                            <img src={car3} alt="" />
                        </div>
                        <div className="me-4 mb-4">
                            <img src={car1} alt="" />
                        </div>
                        <div className="me-4 mb-4">
                            <img src={car2} alt="" />
                        </div>
                        <div className="me-4 mb-4">
                            <img src={car3} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }
}
export default Frame