import React from 'react';
import ReactDOM from 'react-dom';

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
                <div className="row d-flex justify-content-around overflow-auto">
                    {
                        Timing.map( (val, index) => {
                                return (
                                    <div className="col-md-auto col-lg-auto col-sm-auto col-xl-auto mb-1 text-white">
                                        <p className="mb-1"> {Timing[index]} </p>
                                        <p ><i class="fas fa-cloud-moon"></i></p>
                                        <p><i class="fas fa-sun"></i></p>
                                        <p className="mb-1"> {Temp[index]} </p>
                                        <p> {Wind[index]} </p>
                                    </div>
                                    
                                )
                        })
                    };
                    
                </div>
            </>
        )
    }
}
export default TemperaturesForToday;