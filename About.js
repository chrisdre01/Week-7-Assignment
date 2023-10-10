import { lazy } from 'react';

import React from 'react';

const MarkdownPreview = lazy(() => import('./About.js'));

function About() {
    return (
        <>
            <h3>About</h3>
        </>
    )
}
export default About;


