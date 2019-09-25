import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import About from "../components/home/about"
import Services from "../components/home/services"
import StyledHero from "../components/styledhero"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FeaturedTours from "../components/home/featuredTours"
import SEO from "../components/SEO"
export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="continue exploring"
        info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
      >
        <AniLink fade to="/tours" className="btn-white">
          explore tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
