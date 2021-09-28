import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import History from "./History";

export default function Creator() {
    const { url, path } = useRouteMatch();
    return (
        <>
            <h2>Creator</h2>
            <p>Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Facilisi cras fermentum odio eu feugiat pretium. Nulla facilisi nullam vehicula ipsum a. Dolor sit amet consectetur adipiscing. Odio euismod lacinia at quis risus sed vulputate odio. Id aliquet lectus proin nibh nisl condimentum id venenatis. Nisi scelerisque eu ultrices vitae auctor eu augue. Proin fermentum leo vel orci porta non pulvinar neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Non odio euismod lacinia at quis risus sed vulputate. Libero nunc consequat interdum varius sit. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Ultrices vitae auctor eu augue. Fames ac turpis egestas integer eget aliquet nibh. Cursus mattis molestie a iaculis. Ac turpis egestas maecenas pharetra. Auctor urna nunc id cursus metus aliquam eleifend. Condimentum mattis pellentesque id nibh.</p>
            <Link to={`${url}/history`}>History</Link>
            <Route path={`${path}/history`}>
                <History />
            </Route>
        </>
    )
}