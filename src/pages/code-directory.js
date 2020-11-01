import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Code Samples</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><a href="/bouncing_balls">Bouncing Balls</a> </td>
        <td>A bunch of bouncing balls.</td>
      </tr>
    </table>
  </Layout>
)

export default IndexPage
