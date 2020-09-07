import React from 'react';
import Common from './Common';
import web from '../src/images/2.jpg';


const About = () => {
    return (
        <>
            <Common
            name = 'Welcome to about page'
            imgsrc = {web}
            visit = '/contact'
            btname = 'Contact Now'
            />
        </>
    );
};

export default About;

