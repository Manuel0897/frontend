import React from 'react';
import '../styles/components/Languages.styl';

export default ({ languages }) => (
    <div className="Languages-container Card-container">
        <h2 className="Languages-title">Languages</h2>
        {languages.length > 0 ? 
            languages.map((item, i) => (
                <div className="Languages-item" key={`Lan-${i}`}>
                    <p>{item.name} - {item.percentage}</p>
                </div>
            ))
        : <p>No Data</p>
        }
    </div>
);