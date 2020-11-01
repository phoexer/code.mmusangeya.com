import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello world.</h1>
    <p>Welcome to the site.</p>
    <p>I just use this to host some running apps or code pieces I wrote. I haven't put that much effort into this site yet.</p>
    <p>One day I probably will.. hopefully.</p>
    <Link to="/code-directory/">See a list of code samples</Link> <br />
  </Layout>
)

export default IndexPage
