import React from 'react';
import ReactDOM from 'react-dom';
import TextSymTitle from './TextSymTitle';
class TemperaturesForToday extends React.Component {
    constructor( props ) {
        super( props );
        // this.state = {
        //     Timing : [ "Now", "Today", "01:30", "02:30"],
        //     Temp : [ "20°", "18°", "17°", "18°"],
        //     Wind : [ "7.5 Km/h", "7.5 Km/h", "7.5 Km/h", "7.5 Km/h"]
        // }
    }
    render( ) {
        // const { Timing, Temp, Wind } = this.state;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2,'0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var hr = today.getHours();
        let count = 9;
        return (
            <>
                <div className="d-flex justify-content-between overflow-auto">
                    {
                        this.props.list.map( (val, index) => {
                            if((index + 1) > hr && count>0) {
                                count--; 
                                return ( 
                                    <TextSymTitle Timing = {String((index + 1)%25) + ":" + "00"} icon = "fas fa-cloud-moon" Temp = { this.props.list[index].temp } Wind = { this.props.list[index].wind_speed } />  
                                );
                            }
                        })
                    };
                    
                </div>
            </>
        )
    }
}
export default TemperaturesForToday;