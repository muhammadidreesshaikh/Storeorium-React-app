import React from 'react';
import '../assets/css/slider.css';

function Slider(props) {
    const { name, city, image } = props;

    console.log("slider - name > ", name);
    console.log("slider - city > ", city);
    console.log("slider - image > ", image);

    return(
        <div>
            <div className="slider">
                <div className="container">
                    <div className="row justify-content-center">
                       
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <h1>Lowest Prices All Over Pakistan</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;