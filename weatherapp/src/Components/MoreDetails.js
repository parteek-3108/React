import React from 'react';
import ReactDOM from 'react-dom';
import "./MoreDetails.css";
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
                        <div className = " Sunrise-Time" ><p>Sunrise Time</p>  <p>{SunriseTime} </p> </div>
                        <div className = " SunSet-Time"> <p>SunsetTime</p>  <p>{SunsetTime} </p> </div>
                    </div>
                    <div className = " Details-2 d-flex justify-content-around ">
                        <div className = " Real-Feel" ><p>Realfeel</p>  <p> {Realfeel}</p> </div>
                        <div className = " Humidity"><p>Humidity</p>  <p> {Humidity} </p> </div>
                    </div>
                    <div className = " Details-3 d-flex justify-content-around ">
                        <div className = " ChanceOfRain" ><p>ChanceOfRain</p>  <p> {ChanceOfRain} </p> </div>
                        <div className = " Pressure"><p>Pressure</p>  <p> {Pressure} </p> </div>
                    </div>
                    <div className = " Details-4 d-flex justify-content-around ">
                        <div className = " WindSpeed" ><p>WindSpeed</p>  <p> {WindSpeed} </p> </div>
                        <div className = " UVIndex"><p>UVIndex</p>  <p> {UVIndex} </p> </div>
                    </div>
                </div>
            </>
        )
    }
}
export default MoreDetails;