import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about-container'>
            <h2 className='about-title'>Our Evolution</h2>
            <div className="about-section">
                <div className="about-content">
                    <p className='about-text'>
                        At Breweries, our journey is a testament to growth and transformation. From our humble beginnings in a small brewery, we have evolved into a global brand known for quality, innovation, and community.
                    </p>
                    <p className='about-text'>
                        We started with a simple idea: to craft exceptional brews that delight the senses and bring people together. Over the years, our dedication to excellence has driven us to expand our horizons, innovate with new flavors, and foster a vibrant community of beer enthusiasts worldwide.
                    </p>
                    <p className='about-text'>
                        Every batch of beer we produce is a reflection of our evolution—a blend of tradition and innovation that continues to push boundaries and redefine what it means to enjoy a great beer.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
