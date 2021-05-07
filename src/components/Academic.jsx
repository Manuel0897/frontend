import React from 'react';
import '../styles/components/Academic.styl';

export default ({ academic }) => (
    <div className="Academic-container Card-container">
        <h2 className="Academic-title">Academic</h2>
        {academic.length > 0 ? 
            academic.map((item, i) => (
                <div className="Academic-item" key={`Aca-${i}`}>
                    <h3>{item.degree} @ {item.institution}
                        <span>{item.startDate} - {item.endDate}</span>
                    </h3>
                    <p>{item.description}</p>
                </div>
            ))
        : <p>No Data</p>
        }
    </div>
);