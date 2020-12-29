/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import GobalStyles from "../styles/GobalStyles"
import styled from "styled-components"

const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          jobDescription
        }
      }
    }
  `)

  return (
    <>
      <GobalStyles />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <h1>{data.site.siteMetadata.jobDescription}</h1>
      <MainWrapper>
        <main>{children}</main>
      </MainWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
