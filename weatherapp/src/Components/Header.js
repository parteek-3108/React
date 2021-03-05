import React from 'react';
import ReactDOM from 'react-dom';

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

                        <div className = " Add-more">
                            <p className = " display-4 "> + </p>
                        </div>

                        <div className = " text-center display-4">
                            {Place}
                        </div>   
                        <div>
                            Options still Pending
                        </div>
                </div>
            </>
        )
    }
}
export default Header;