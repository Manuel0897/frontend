import React from 'react';
import '../styles/components/Skills.styl';

export default ({ skills }) => (
    <div className="Skills-container Card-container">
        <h2 className="Skills-title">Skills</h2>
        {skills.length > 0 ? 
            skills.map((item, i) => (
                <div className="Skills-item" key={`Ski-${i}`}>
                    <p>{item.name} - {item.percentage}</p>
                </div>
            ))
        : <p>No Data</p>
        }
    </div>
);