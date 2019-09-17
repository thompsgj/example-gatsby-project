import React from "react"

//import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
//import SimpleHero from "../components/simplehero"
import Banner from "../components/banner"
import About from "../components/home/about"
import Services from "../components/home/services"
import StyledHero from "../components/styledhero"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <>
      <Layout>
        {/*<SimpleHero>Banner here </SimpleHero>*/}
        <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
          <Banner
            title="continue exploring"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cum?"
          >
            <AniLink fade to="/tours" className="btn-white">
              explore tours
            </AniLink>
          </Banner>
        </StyledHero>
        <About />
        <Services />
        Hello Page!
        {/* Use CamelCase and "" for inline styles
        <h1 style={{ textTransform: "capitalize", color: "red" }}>
        */}
        <div>Hello from Backroads!</div>
      </Layout>
    </>
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
