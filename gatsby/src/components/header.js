import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import { maxWidth } from "../styles/GobalStyles"
import { mediaQueries } from "../styles/mediaQueries"

const HeaderStyles = styled.header`
  height: 100vh;
  min-height: 400px;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: clamp(1rem, 10vw, 4rem);

  ${mediaQueries("max", "md")`
    padding-left: 2rem;
    padding-right: 2rem;
    height: 80vh;
  `}

  .header-wrapper {
    max-width: ${maxWidth};
    width: 100%;

    h1 {
      font-size: 1.75rem;
      line-height: 1.2;
    }

    h2 {
      font-size: 4rem;
      line-height: 1.2;
      margin: 0;

      span {
        position: relative;
        display: inline-block;
      }

      .space {
        display: initial;
      }
    }
  }
`

const Header = ({ data }) => {
  const { name, jobTitle } = data.siteSettings.nodes[0]

  return (
    <HeaderStyles data-scroll-section>
      <div className="header-wrapper">
        <h1 data-scroll data-scroll-speed="2">
          {name}
        </h1>
        <h2>{jobTitle}</h2>
      </div>
    </HeaderStyles>
  )
}
const MyHeader = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        siteSettings: allSanitySiteSettings {
          nodes {
            name
            jobTitle
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default MyHeader
