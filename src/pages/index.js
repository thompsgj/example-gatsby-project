import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SimpleHero from "../components/simplehero"
import Banner from "../components/banner"
import About from "../components/home/about"
import Services from "../components/home/services"

export default () => {
  return (
    <>
      <Layout>
        <SimpleHero>
          <Banner
            title="continue exploring"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cum?"
          >
            <Link to="/tours" className="btn-white">
              explore tours
            </Link>
          </Banner>
        </SimpleHero>
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
