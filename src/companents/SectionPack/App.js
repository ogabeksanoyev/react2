import React from "react";
import './App.css'
import Vektor from '../../image/Vector.png'


class Pack extends React.Component{
    render(){
        return <div className="App">
            <section>
            <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <p className="sectionTitle">Get ahead of the pack.</p>
                <p className="sectionText my-2">Framer is the best way to create interactive designs from start to finish.</p>
                <div className="inputs input-group w-75">
                    <input type="text" placeholder="Email" className="form-control" />
                    <a href="#">Strat your free trial</a>
                </div>
                <div className="d-flex align-items-center">
                    <img src={Vektor} alt="" className="me-2" />
                    <a href="#">Watch intro video</a>
                </div>
            </div>
        </div>
            </section>
       </div>
    }
}
export default Pack