import React from 'react';
import '../styles/components/Header.styl';

export default props => (
    <header className="Hader-container Card-container">
        {props.children}
    </header>
);