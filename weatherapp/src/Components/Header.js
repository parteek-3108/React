import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import AddMore from './AddMore';
import Location from './Header_Location';
class Header extends React.Component {
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
                <div className="row d-flex justify-content-around overflow-auto mb-4 text-white">

                        <Location place = {Place} />  
                        <Navbar />
                </div>
            </>
        )
    }
}
export default Header;