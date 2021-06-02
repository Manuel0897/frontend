import React from 'react';
import '../styles/components/Experience.styl';

export default ({ experience }) => (
    <div className="Experience-container Card-container">
        <h2 className="Experience-title">Experience</h2>
        {experience.length > 0 ? 
            experience.map((item, i) => (
                <div className="Experience-item" key={`Exp-${i}`}>
                    <h3>
                        {item.jobTitle} @ {item.company} 
                        <span>
                            {item.startDate} - {item.endDate}
                        </span>
                    </h3>
                    <p>{item.jobDescription}</p>
                </div>
            ))
        : <p>No Data</p>
        }
    </div>
);