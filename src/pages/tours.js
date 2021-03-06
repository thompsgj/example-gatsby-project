import React from "react"
import Layout from "../components/layout"
import StyledHero from "../components/styledhero"
import { graphql } from "gatsby"
import Tours from "../components/tours/tours"
import SEO from "../components/SEO"

const tours = ({ data }) => {
  return (
    <Layout>
      <SEO title="Tours" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <Tours />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours
