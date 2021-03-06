/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faAt,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

library.add(faAt, faPhone, faMapMarkerAlt)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      ></link>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main style={{ margin: "-5rem 0 0 0" }}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
