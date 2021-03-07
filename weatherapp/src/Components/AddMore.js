import React from 'react';
import ReactDOM from 'react-dom';

class AddMore extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            Place : "Ambala",
        }
    }
    render( ) {
        const { Place } = this.state;
        return (
            <>
                        <div className = " Add-more">
                            <p className = " display-4 "> + </p>
                        </div>
            </>
        )
    }
}
export default AddMore;