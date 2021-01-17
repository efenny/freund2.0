import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"
import { maxWidth, mainWhite } from "../styles/GobalStyles"
import { mediaQueries } from "../styles/mediaQueries"

const FooterStyles = styled.footer`
  height: 100vh;
  min-height: 500px;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: clamp(1rem, 10vw, 4rem);

  ${mediaQueries("max", "md")`
    padding-left: 2rem;
    padding-right: 2rem;
  `}

  .footer-wrapper {
    max-width: ${maxWidth};
    width: 100%;

    h2 {
      font-size: 4rem;
      line-height: 1.2;

      ${mediaQueries("max", "md")`
        font-size: 9vw;
      `}
    }

    h3 {
      font-size: 1.75rem;
      line-height: 1.2;
      margin: 0;

      ${mediaQueries("max", "md")`
        font-size: 1.25rem;
      `}

      a {
        color: ${mainWhite};
        text-decoration: none;
      }
    }
  }
`

const Footer = ({ data }) => {
  const { email } = data.siteSettings.nodes[0]
  return (
    <FooterStyles data-scroll-section>
      <div className="footer-wrapper">
        <h2 data-scroll data-scroll-speed="1.25">
          Contact Me
        </h2>
        <h3 data-scroll data-scroll-speed="2">
          <a href={`mailto:${email}`}>{email}</a>
        </h3>
      </div>
    </FooterStyles>
  )
}

const MyFooter = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        siteSettings: allSanitySiteSettings {
          nodes {
            email
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default MyFooter
