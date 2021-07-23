import React from "react";
import './App.css'
import card1 from "../../image/asset 2.1.png";
import card2 from "../../image/asset 2.2.png";
import card3 from "../../image/asset 2.3.png";
import card4 from "../../image/asset 3.1.png";
import card5 from "../../image/asset 3.2.png";
import card6 from "../../image/asset 3.3.png";
class Card extends React.Component{
render(){
    return <div className="App">
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-4 col-sm-6 col-7">
                        <div className="card mb-3">
                            <img src={card1} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-7">
                        <div className="card mb-3">
                            <img src={card2} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-7">
                        <div className="card mb-3">
                            <img src={card3} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-7">
                        <div className="card mb-3">
                            <img src={card4} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-7">
                        <div className="card mb-3">
                            <img src={card5} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-7">
                        <div className="card mb-3">
                            <img src={card6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}
}
export default Card