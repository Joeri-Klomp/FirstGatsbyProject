import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <Layout pageTitle={"About Me"}>
            <p>Hi there! You shouldn't be interested in me, I'm not even Giel! Or Daan! You should meet them!</p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>
//Gatsby lets us define metadata like title with the Gatsby Head api. You just have to export a component called Head
//from the page template to apply the metadata. It works because we're exporting Head in aan page inside src/pages.

//pages created in src/pages directory use the name of the file as the route for the page

export default AboutPage