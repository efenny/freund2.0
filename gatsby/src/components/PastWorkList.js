import React from "react"
// import styled from "styled-components"
import PastWork from "./PastWork"

const PastWorkList = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <PastWork
          key={`${item.slug.current}-${index}`}
          name={item.name}
          slug={item.slug.current}
          role={item.role}
          image={item.image}
          siteUrl={item.siteUrl}
          techStack={item.techStack}
        />
      ))}
    </>
  )
}

export default PastWorkList
