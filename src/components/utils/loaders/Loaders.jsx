// a default loading component

import React from 'react';

import './Loaders.css';

export const WholeWindow = () => {

    return (
        <div className="wholeWindow">
            <div className="spinner"></div>
            <div className="text">Loading ...</div>
        </div>
    )

}

export const InlineDots = () => {
    
        return (
            <div className="inlineDots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        )
    
}