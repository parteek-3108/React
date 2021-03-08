import React from 'react';
import ReactDOM from 'react-dom';
import "./MoreDetails.css";
import TextOnlyTitle from "./TextOnlyTitle"
class MoreDetails extends React.Component {
    constructor( props ) {
        super( props );
    }
    get = (time) => {
        var date = new Date(time * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        return (hours + ":" + minutes);
    }
    render( ) {
        return (
            <>
                <div className = "jumbotron container mb-4 text-white bg-lightgrey w-70 mb-5 py-5">
                    <div className = " Details-1 d-flex justify-content-around ">
                        <TextOnlyTitle title = "SunriseTime" Condition = {this.get(this.props.SunriseTime)} /> 
                        <TextOnlyTitle title = "SunsetTime" Condition = {this.get(this.props.SunsetTime)} />
                    </div>
                    <div className = " Details-2 d-flex justify-content-around ">
                        <TextOnlyTitle title = "Real Feel" Condition = {this.props.Realfeel} />
                        <TextOnlyTitle title = "Humidity" Condition = {this.props.Humidity} />
                    </div>
                    <div className = " Details-3 d-flex justify-content-around ">
                        <TextOnlyTitle title = "ChanceOfRain" Condition = {this.props.ChanceOfRain} />
                        <TextOnlyTitle title = "Pressure" Condition = {this.props.Pressure} />
                    </div>
                    <div className = " Details-4 d-flex justify-content-around ">
                        <TextOnlyTitle title = "WindSpeed" Condition = {this.props.WindSpeed} />
                        <TextOnlyTitle title = "UVIndex" Condition = {this.props.UVIndex} />
                    </div>
                </div>
            </>
        )
    }
}
export default MoreDetails;