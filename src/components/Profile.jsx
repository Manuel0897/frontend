import React from 'react';
import '../styles/components/Profile.styl';

export default ({ profile }) => (
    <div className="Profile-container Card-container">
        <h2 className="Profile-title">Profile</h2>
        <p className="Profile-desc">{profile}</p>
    </div>
);