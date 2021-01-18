import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PastWorkList from "../components/PastWorkList"

function IndexPage({ data }) {
  const pastWorkListArr = data.allSanityPastWork.nodes
  return (
    <Layout>
      <SEO title="Frontend Developer" />
      <PastWorkList items={pastWorkListArr} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allSanityPastWork(sort: { order: DESC, fields: datePublished }) {
      nodes {
        name
        role
        siteUrl
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1024, maxHeight: 576) {
              ...GatsbySanityImageFluid
            }
          }
        }
        techStack
      }
    }
  }
`
