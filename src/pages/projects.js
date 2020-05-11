import React from "react"
import Helmet from 'react-helmet';
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"

const IndexPage = ({
    data: {
        site,
        allMarkdownRemark: {edges},
    },
}) => {

    const Projects = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => {
            if (edge.node.frontmatter.template === 'projects') {
                return (<PostLink key={edge.node.id} post={edge.node} />)
            }
        })

    return (
        <Layout>
            <Helmet>
                <title>My Projects | nirab.xyz</title>
                <meta name="description" content="ALL portfolios of istiaq nirab" />
                {!site.siteMetadata.w3l_dom_key ? null : <meta name="w3l-domain-verification" content={site.siteMetadata.w3l_dom_key} />}
            </Helmet>
            <h2>Projects &darr;</h2>
            <div className="grids">
                {Projects}
            </div>
        </Layout>
    )
}

export default IndexPage
export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        w3l_dom_key
      }
    }
    allMarkdownRemark(sort: { order: DESC,  fields: [frontmatter___date] }, limit: 12) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            template
            thumbnail
          }
        }
      }
    }
  }
`