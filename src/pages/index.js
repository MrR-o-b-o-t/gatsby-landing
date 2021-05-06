import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Sams Gatsby Page"
        description="You can customize the SEO text here."
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <section>
        <h1>LOREM</h1>
        <div>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>
        <h2>Lorem</h2>
      </section>
    </Layout>
  )
}

export default IndexPage
