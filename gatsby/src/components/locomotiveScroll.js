import { useEffect } from "react"

// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from "locomotive-scroll"

const scrollOptions = {
  // Locomotive Scroll
  // https://github.com/locomotivemtl/locomotive-scroll#instance-options
  container: "main",
  options: {
    smooth: true,
    smoothMobile: true,
    getDirection: true,
    touchMultiplier: 2.5,
    lerp: 0.15,
    smartphone: {
      smooth: true,
    },
  },
}

const Scroll = callbacks => {
  useEffect(() => {
    let locomotiveScroll
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scrollOptions.container),
      ...scrollOptions.options,
    })
    locomotiveScroll.update()

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll

    locomotiveScroll.on("scroll", func => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute("data-direction", func.direction)
    })

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll
