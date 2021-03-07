import React from 'react';
import ReactDOM from 'react-dom';

class TextSymTitle extends React.Component {
    constructor( props ) {
        super( props );
    }
    render( ) {
        return (
            <>
                <div className="col-md-auto col-lg-auto col-sm-auto col-xl-auto mb-1 text-white">
                                        <p className="mb-1"> {this.props.Timing} </p>
                                        <p ><i class={this.props.icon}></i></p>
                                        <p className="mb-1"> {this.props.Temp} </p>
                                        <p> {this.props.Wind} </p>
                </div>
            </>
        )
    }
}
export default TextSymTitle;