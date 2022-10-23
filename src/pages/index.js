import * as React from "react";
import {Link} from "gatsby";

const indexPage = () => {
    return (
        <main>
            <h1>Welcome to my Giel worship page!</h1>
            <Link to={"/about"}>About</Link>
            <p>This is where we worship the birth of Giel.</p>
        </main>
    )
}

export const Head = () => {<title>Home Page</title>}

export default indexPage