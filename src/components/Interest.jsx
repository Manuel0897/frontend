import React from 'react';
import '../styles/components/Interest.styl';

export default ({ interest }) => (
    <div className="Interest-container Card-container">
        <h2 className="Interest-title">Interest</h2>
        {interest.length > 0 ? 
            interest.map((item, i) => (
                <p className="Interest-item" key={`Int-${i}`}>
                    {item}
                </p>
            ))
        : <p>No Data</p>
        }
    </div>
);