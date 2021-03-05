import React from 'react';
import ReactDOM from 'react-dom';

class HeadTemp extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            Temp : "20°",
            Cond : "Clear",
            AQI : "AQI"
        }
    }
    render( ) {
        const { Temp, Cond, AQI } = this.state;
        return (
            <>
                <div className="col-md-auto col-lg-auto col-sm-auto col-xl-auto mb-5 text-white text-center">
                    <p className="mb-1 display-1 text-center"> {Temp} </p>
                    <p className="mb-1 text-center"> {Cond} </p>
                    <p className=" mb-3"> AQI : {AQI} </p>
                    <p className="float-right mb-3">More Details</p>
                </div>
                            
            </>
        )
    }
}
export default HeadTemp;