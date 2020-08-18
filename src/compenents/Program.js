import React from 'react'

import './Program.css';

export default function Program({ data }) {
    return (
        <div className="programCard">
            <div className="programImgDiv">
                <img className="programImg" src={data.links.mission_patch_small} height="200px" width="200px" />
            </div>
            <div className="programDetails" >
                <div className="missionName">{data.mission_name} #{data.flight_number}</div>
                <div className="missionId"><span className="heading">Mission Ids: </span><span className="insideContent">{data.mission_id.map((id, index) => { return <span className="missionIds" key={index}>{id}</span> })}</span></div>
                <div className="launchYear"><span className="heading">Launch Year: </span><span className="insideContent" >{data.launch_year}</span></div>
                <div className="launchSuccess"><span className="heading">Successful Launch: </span><span className="insideContent">{data.launch_success ? "true" : "false"}</span></div>
                <div className="landSuccess"><span className="heading">Successful Landing: </span><span className="insideContent">{data.launch_landing ? data.launch_landing : "N/A"}</span></div>
            </div>

        </div>
    )
}
