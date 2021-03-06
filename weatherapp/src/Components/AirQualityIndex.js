import React from 'react';
import ReactDOM from 'react-dom';
import "./MoreDetails.css";
class AirQualityIndex extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
           AQI : 133
        }
    }
    render( ) {
        const { AQI } = this.state;
        return (
            <>
                <div className = "jumbotron container mb-4 text-white bg-lightgrey w-70 mb-5 py-5">
                    <div className = " Details-1 d-flex justify-content-around ">
                        <div className = " Sunrise-Time" ><p>Air Quality Index</p>  <p>{AQI} </p> </div>
                        <div className = " SunSet-Time"> Full Air Quality Forecast </div>
                    </div>
                </div>
            </>
        )
    }
}
export default AirQualityIndex;