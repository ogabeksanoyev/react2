import React from "react";


class Why extends React.Component{
render(){
    return <div className="App">
        <section className="pb-0">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md=6 col-sm-6 col-12" style={{ backgroundColor: 'rgba(0, 65, 255, 0.52)',}}>
                    <div className="d-flex flex-column align-items-center text-center py-4 text-white">
                        <p className="sectionTitle">Why Framer</p>
                        <p className="sectionText text-secondary">Easily bring designs to life with code, then share them with teammates.</p>
                      <div className="d-flex">
                            <a href="#" className="btn btn-outline-light me-4">See Features</a>
                            <a href="#" className="btn btn-primary">See Features</a>
                      </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md=6 col-sm-6 col-12"  style={{ backgroundColor: 'rgba(0, 0, 0, 1)',}}>
                    <div className="d-flex flex-column align-items-center text-center py-4 text-white">
                        <p className="sectionTitle">Subscribe Today</p>
                        <p className="sectionText text-secondary">Get 20% off when you choose our yearly subscription plan.</p>
                            <a href="#" className="btn btn-outline-light me-4">See Features</a>
                           
                    </div>
                </div>
            </div>
        </section>
    </div>
}
}
export default Why