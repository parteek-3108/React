import React from 'react';
import ReactDOM from 'react-dom';

class HeadTemp extends React.Component {
    constructor( props ) {
        super( props );
    }
    render( ) {
        return (
            <>
                <div className="col-md-auto col-lg-auto col-sm-auto col-xl-auto mb-5 text-white text-center">
                    <p className="mb-1 display-1 text-center"> {this.props.Temp} </p>
                    <p className="mb-1 text-center"> {this.props.Cond} </p>
                    <p className=" mb-3"> UVI : {this.props.UVI} </p>
                </div>
                            
            </>
        )
    }
}
export default HeadTemp;