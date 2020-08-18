import React from 'react'

import Program from './Program';
import './programs.css';

export default function Programs(props) {
    return (
        <div className="programs">
            {(props.data) ? (props.data.map((program, index) => {
                return (<Program className="flex" data={program} key={index} />)
            })) : "No Data Exist On Server"}
        </div>
    )
}
