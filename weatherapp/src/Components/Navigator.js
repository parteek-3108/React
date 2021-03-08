import React from 'react';
import ReactDOM from 'react-dom';
import MultiCond from "./MultiCond";
class Navigator extends React.Component {
    constructor( props ) {
        super( props );
    }
    getDaTe = (dd, mm)=> {
        let obj = {};
        if( mm == 2) {
            obj = {
                day : (dd%29),
                month : (mm + dd/29)%12
                }
        }
        else if(  (mm >=8 && mm%2 ==0 ) || (mm <=7 && mm%2 == 1)) {
            obj = {
                day : (dd%32),
                month : (mm + dd/32)%12
                }
        } 
        else {
            obj = {
                day : (dd%31),
                month : (mm + dd/31)%12
                }
            return obj;
        }
        return ( parseInt(obj.day) + "/" + parseInt(obj.month) );
    }
    render( ) {
        console.log(this.props.list);
        var today = new Date();
        var dd = String(today.getDate()).padStart(2,'0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        return (
                <div className=" d-flex justify-content-around overflow-auto mb-4 text-white">
                        {
                        this.props.list.map( (val, ind) => {
                            return (
                        <div className = " Tommorow-nav d-flex justify-content-center oveflow-auto ">
                            <MultiCond title ={ this.getDaTe(dd + ind, mm)}  Condition = {this.props.list[ind].weather[0].main} DayTemp = {parseInt(this.props.list[ind].temp.day)} NightTemp = {parseInt(this.props.list[ind].temp.night)} />
                        </div>
                            ) 
                        } )  
                        }
                </div>
        )
    }
}
export default Navigator;