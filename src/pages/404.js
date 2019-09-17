import React from "react"
import Layout from "../components/layout"
import styles from "../css/error.module.css"
import Banner from "../components/banner"
//import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink fade to="/" className="btn-white">
            Back to Home Page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
