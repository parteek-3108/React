import React from 'react';
import ReactDOM from 'react-dom';
import "./MoreDetails.css";
import TextOnlyTitle from "./TextOnlyTitle"
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
                <div className = "container  text-white bg-lightgrey w-70 py-5">
                    <div className = " Details-1 d-flex justify-content-around ">
                        <TextOnlyTitle title = "Air Quality Index" Condition = {AQI} />
                        <div className = " SunSet-Time"> Full Air Quality Forecast </div>
                    </div>
                </div>
            </>
        )
    }
}
export default AirQualityIndex;