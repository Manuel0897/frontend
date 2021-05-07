import React from 'react';
import '../styles/components/About.styl';

export default ({ avatar, title, jobTitle, phone, email, website, address }) => (
    <div className="About-container">
        <div className="About-avatar">
            <figure>
                <img src={avatar} alt={`Photo`} />
            </figure>
        </div>
        <div className="About-info">
            <h2 className="About-title">{title}</h2>
            <p className="About-item">{jobTitle}</p>
            <p className="About-item Info-line">{phone}</p>
            <p className="About-item Info-line">{email}</p>
            <p className="About-item Info-line">{website}</p>
            <p className="About-item Info-line">{address}</p>
        </div>
    </div>
);