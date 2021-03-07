import React from 'react';
import ReactDOM from 'react-dom';
import MultiCond from "./MultiCond";
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
                            <MultiCond title = "Today" Condition = {TodayCond} DayTemp = {TodayDayTemp} NightTemp = {TodayNightTemp} />
                        </div>

                        <div className = " Tommorow-nav row d-flex justify-content-between ">
                            <MultiCond title = "Tommorow" Condition = {TommorowCond} DayTemp = {TommorowDayTemp} NightTemp = {TommorowNightTemp} />
                        </div>   
                        <div className = " DayAfterTommorow-nav row d-flex justify-content-between ">
                            <MultiCond title = "Today" Condition = {DayAfterTommorowCond} DayTemp = {DayAfterTommorowDayTemp} NightTemp = {DayAfterTommorowNightTemp} />
                        </div>
                </div>
            </>
        )
    }
}
export default Navigator;