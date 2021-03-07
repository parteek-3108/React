import React from 'react';
import ReactDOM from 'react-dom';

class TextOnlyTitle extends React.Component {
    constructor( props ) {
        super( props );
    }
    render( ) {
        return (
            <>
                    <div ><p className = " display-5 "> { this.props.title}  </p>  <p > {this.props.Condition} </p> </div>
            </>
        )
    }
}
export default TextOnlyTitle;