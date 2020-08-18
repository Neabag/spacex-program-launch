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
                <div className="missionId">Mission Id: {data.mission_id[0]}</div>
                <div className="launchYear">Launch Year: {data.launch_year}</div>
                <div className="launchSuccess">Successful Launch: {data.launch_success ? "true" : "false"}</div>
                <div className="landSuccess">Successful Landing: {data.launch_landing ? data.launch_landing : "N/A"}</div>
            </div>

        </div>
    )
}
