import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
    return (
        // <main>
        //     <h1>Welcome to my Giel worship page!</h1>
        //     <Link to={"/about"}>About</Link>
        //     <p>This is where we worship the birth of Giel.</p>
        // </main>
        <Layout pageTitle={"Home Page"}>
            <p>This is where we worship Giel. Praise him!</p>
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage