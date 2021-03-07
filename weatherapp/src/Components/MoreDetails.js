import React from 'react';
import ReactDOM from 'react-dom';
import "./MoreDetails.css";
import TextOnlyTitle from "./TextOnlyTitle"
class MoreDetails extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
           SunriseTime : "05:45 AM",
           SunsetTime : "06:22 AM",
           Realfeel : "19.5°C",
           Humidity : "35%",
           ChanceOfRain : "3%",
           Pressure : "1010.101 mbar",
           WindSpeed : "8.45 Km/h",
           UVIndex : "0.2"
        }
    }
    render( ) {
        const { SunriseTime, SunsetTime, Realfeel, Humidity, ChanceOfRain, Pressure, WindSpeed, UVIndex } = this.state;
        return (
            <>
                <div className = "jumbotron container mb-4 text-white bg-lightgrey w-70 mb-5 py-5">
                    <div className = " Details-1 d-flex justify-content-around ">
                        <TextOnlyTitle title = "SunriseTime" Condition = {SunriseTime} /> 
                        <TextOnlyTitle title = "SunsetTime" Condition = {SunsetTime} />
                    </div>
                    <div className = " Details-2 d-flex justify-content-around ">
                        <TextOnlyTitle title = "Real Feel" Condition = {Realfeel} />
                        <TextOnlyTitle title = "Humidity" Condition = {Humidity} />
                    </div>
                    <div className = " Details-3 d-flex justify-content-around ">
                        <TextOnlyTitle title = "ChanceOfRain" Condition = {ChanceOfRain} />
                        <TextOnlyTitle title = "Pressure" Condition = {Pressure} />
                    </div>
                    <div className = " Details-4 d-flex justify-content-around ">
                        <TextOnlyTitle title = "WindSpeed" Condition = {WindSpeed} />
                        <TextOnlyTitle title = "UVIndex" Condition = {UVIndex} />
                    </div>
                </div>
            </>
        )
    }
}
export default MoreDetails;