import { lazy } from 'react';
import React from 'react';

const MarkdownPreview = lazy(() => import('./Movies.js'));

function Movies() {
    return (
        <>
            <h3>Movies</h3>
        </>
    )
}
export default Movies;
