import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>title: {info.title}</h1>
      <h1>author:{info.author}</h1>
    </div>
  )
}

export default Header
