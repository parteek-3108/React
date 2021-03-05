import React from 'react';
import ReactDOM from 'react-dom';

class Navigator extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            TodayDayTemp : "30°",
            TodayCond : "Clear",
            TodayNightTemp : "17°",
            TommorowDayTemp : "30°",
            TommorowCond : "Clear",
            TommorowNightTemp : "17°",
            DayAfterTommorowDayTemp : "30°",
            DayAfterTommorowNightTemp : "17°",
            DayAfterTommorowCond : "Haze"

        }
    }
    render( ) {
        const { TodayDayTemp, TodayCond, TodayNightTemp, TommorowDayTemp, TommorowCond, TommorowNightTemp, DayAfterTommorowDayTemp, DayAfterTommorowNightTemp, DayAfterTommorowCond } = this.state;
        return (
            <>
                <div className=" d-flex justify-content-around overflow-auto mb-4 text-white">

                        <div className = " Today-nav row d-flex justify-content-between ">
                            <div className="col"> <p className = " display-5 ">Today : {TodayCond} </p> </div>
                            <div className="col"> <p className = " display-5 "> { TodayDayTemp } / {TodayNightTemp} </p> </div>
                        </div>

                        <div className = " Tommorow-nav row d-flex justify-content-between ">
                            <div className="col"> <p className = " display-5 "> Tommorow : {TommorowCond} </p> </div>
                            <div className="col"> <p className = " display-5 "> { TommorowDayTemp } / {TommorowNightTemp} </p> </div>
                        </div>   
                        <div className = " DayAfterTommorow-nav row d-flex justify-content-between ">
                            <div className="col"> <p className = " display-5 "> NextDay : {DayAfterTommorowCond} </p> </div>
                            <div className="col"> <p className = " display-5 "> { DayAfterTommorowDayTemp } / {DayAfterTommorowNightTemp} </p> </div>
                        </div>
                </div>
            </>
        )
    }
}
export default Navigator;