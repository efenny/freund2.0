import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"
import GobalStyles from "../styles/GobalStyles"
import GlobalFonts from "../fonts/fonts"

import "../styles/LocomotiveScroll.css"
import styled from "styled-components"
import { maxWidth } from "../styles/GobalStyles"
import Scroll from "../components/locomotiveScroll"

const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: ${maxWidth};
  width: 100%;
`

const Layout = ({ children }) => {
  return (
    <>
      <Scroll />
      <GlobalFonts />
      <GobalStyles />
      <main data-scroll-container>
        <Header />
        <MainWrapper data-scroll-section>{children}</MainWrapper>
        <Footer />
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
