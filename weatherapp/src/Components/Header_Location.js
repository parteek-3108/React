import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import AddMore from './AddMore'
class Location extends React.Component {
    constructor( props ) {
        super( props );
    }
    render( ) {
        return (
            <>
                <div className = " text-center display-4">
                            {this.props.place}
                </div>   
            </>
        )
    }
}
export default Location;