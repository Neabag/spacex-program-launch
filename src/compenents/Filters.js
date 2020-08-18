import React from 'react'
import './Filters.css';

const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
const launchSuccess = ["true", "false"];
const landSuccess = ["true", "false"];

const Filters = (props) => {
    return (
        <div className="filters">
            <div className="title">Filters</div>
            <div className="launch_year">
                <div className="headingText">Launch Year</div>
                <hr className="break" />
                <div className="flexBox">{years.map((year, index) => { return <span className={props.year == year ? "flex selected" : "flex"} key={index} onClick={() => { props.clicks(year, "launch_year") }}>{year}</span> })}</div>
            </div>
            <div className="launch_success">
                <div className="headingText">Successful Launch</div>
                <hr className="break" />
                <span className="flexBox"> {launchSuccess.map((launch, index) => { return <span className={props.launch == launch ? "flex selected" : "flex"} key={index} onClick={() => { props.clicks(launch, "launch_success") }}>{launch}</span> })}</span>
            </div>
            <div className="land_success">
                <div className="headingText">Successful Landing</div>
                <hr className="break" />
                <span className="flexBox"> {landSuccess.map((land, index) => { return <span className={props.land == land ? "flex selected" : "flex"} key={index} onClick={() => { props.clicks(land, "land_success") }}>{land}</span> })}</span>
            </div>
        </div>
    )
}
export default Filters;