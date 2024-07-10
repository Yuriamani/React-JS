import React from 'react';
import './Features.css';

function Features() {
    return (
        <div className='features-container'>
            <h2 className='features-title'>Key Features</h2>
            <div className="features-section">
                <div className="feature">
                    <i className="fas fa-check-circle"></i>
                    <p className="feature-text">Feature 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-check-circle"></i>
                    <p className="feature-text">Feature 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-check-circle"></i>
                    <p className="feature-text">Feature 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-check-circle"></i>
                    <p className="feature-text">Feature 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-check-circle"></i>
                    <p className="feature-text">Feature 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;
