import React from 'react';
import ReactDOM from 'react-dom';
import TextSymTitle from './TextSymTitle';
class TemperaturesForToday extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            Timing : [ "Now", "Today", "01:30", "02:30"],
            Temp : [ "20°", "18°", "17°", "18°"],
            Wind : [ "7.5 Km/h", "7.5 Km/h", "7.5 Km/h", "7.5 Km/h"]
        }
    }
    render( ) {
        const { Timing, Temp, Wind } = this.state;
        return (
            <>
                <div className="d-flex justify-content-around overflow-auto">
                    {
                        Timing.map( (val, index) => {
                                return (
                                    <TextSymTitle Timing = {Timing[index]} icon = "fas fa-cloud-moon" Temp = { Temp[index] } Wind = { Wind[index] } />    
                                )
                        })
                    };
                    
                </div>
            </>
        )
    }
}
export default TemperaturesForToday;