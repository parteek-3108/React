import React from 'react';
import ReactDOM from 'react-dom';

class MultiCond extends React.Component {
    constructor( props ) {
        super( props );
    }
    render( ) {
        return (
            <>
                <div className = " Today-nav row d-flex justify-content-between ">
                    <div className="col"> <p className = " display-5 "> {this.props.title} : {this.props.Condition} </p> </div>
                    <div className="col"> <p className = " display-5 "> { this.props.DayTemp } / {this.props.NightTemp} </p> </div>
                </div>
            </>
        )
    }
}
export default MultiCond;