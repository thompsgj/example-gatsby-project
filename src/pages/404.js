import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/banner"
import { Link } from "gatsby"

export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <Link to="/" className="btn-white">
            Back to Home Page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
