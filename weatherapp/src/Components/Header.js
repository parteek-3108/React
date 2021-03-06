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
                        <nav class="navbar navbar-expand-lg navbar-light text-white">
                            <a class="navbar-brand  text-white" href="#">Navbar</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                <a class="nav-item nav-link active text-white" href="#">Home <span class="sr-only">(current)</span></a>
                                <a class="nav-item nav-link disabled text-white" href="#">Disabled</a>
                                </div>
                            </div>
                        </nav>
                        </div>
                </div>
            </>
        )
    }
}
export default Header;