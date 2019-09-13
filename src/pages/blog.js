import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const blog = () => {
  return (
    <Layout>
      Blog Page
      <Link to="/"> Back Home</Link>
      <Link to="blog.js">Blog</Link>
    </Layout>
  )
}

export default blog
