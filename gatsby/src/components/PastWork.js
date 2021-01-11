import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { transition, mainColor, mainWhite } from "../styles/GobalStyles"
import { mediaQueries } from "../styles/mediaQueries"

const PastWorkStyles = styled.section`
  margin-bottom: 10vh;

  &:last-child {
    margin-bottom: 0;
  }
  .image {
    margin-bottom: 2rem;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    ${mediaQueries("max", "md")`
      flex-wrap: wrap;`}

    .info-left {
      ${mediaQueries("max", "md")`
      width: 100%;`}
    }

    .info-right {
      display: flex;
      justify-content: flex-end;

      ${mediaQueries("max", "md")`
      width: 100%;
      margin-top: 2rem;`}
    }

    .info-inner {
      display: flex;
      align-items: flex-end;
    }

    .info-title {
      font-weight: 400;

      ${mediaQueries("max", "md")`
      margin-bottom: 1rem;
      font-size: 1.2rem;`}
    }

    .info-client {
      opacity: 0.5;
      margin-left: 1rem;
      font-weight: 300;

      ${mediaQueries("max", "md")`
      margin-bottom: 1rem;
      font-size: 1rem;`}
    }
    .info-stack {
      margin-top: 1.25rem;
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;

      li {
        list-style: none;
        opacity: 0.25;
        margin-right: 0.75em;
        font-weight: 400;
        font-size: 0.85rem;
        transition: ${transition};

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`

const ButtonStyles = styled.a`
  font-size: 1rem;
  line-height: 1em;
  padding: 0.75em 1.5em;
  padding-top: 0.85em;
  background: transparent;
  border: 1px solid ${mainWhite};
  display: inline-block;
  letter-spacing: 0.5px;
  font-weight: 400;
  text-decoration: none;
  color: ${mainWhite};
  cursor: pointer;
  transition: ${transition};

  &:hover {
    color: ${mainColor};
    background-color: ${mainWhite};
  }
`

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const PastWork = ({ name, slug, role, image, siteUrl, techStack }) => (
  <PastWorkStyles>
    {image ? (
      <ImageWrapper>
        <div
          className="image-scroll-wrapper"
          data-scroll
          data-scroll-speed="1.5"
        >
          <Img className="image" fluid={image.asset.fluid} alt={name} />
        </div>
      </ImageWrapper>
    ) : (
      ""
    )}
    <div class="info" data-scroll data-scroll-speed="0.5">
      <div class="info-left">
        <div class="info-inner">
          <h3 class="info-title">{name}</h3>
          <h4 class="info-client">{role}</h4>
        </div>
        <ul class="info-stack">
          {techStack.map(stack => (
            <li>{stack}</li>
          ))}
        </ul>
      </div>
      <div class="infright">
        <ButtonStyles
          href={siteUrl}
          className="button"
          target="_blank"
          rel="noreferrer"
        >
          View Site
        </ButtonStyles>
      </div>
    </div>
  </PastWorkStyles>
)

export default PastWork
