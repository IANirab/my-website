import React from "react"
import Helmet from 'react-helmet';
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import Pagination from "../components/Pagination"

const IndexPage = ({
  data: {
    allMarkdownRemark: {edges},
  }, pageContext
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => {
      if (edge.node.frontmatter.template === 'BlogPost') {
        return (<PostLink key={edge.node.id + "-blog"} post={edge.node} />)
      }
    })
  return (
    <Layout>
      <Helmet>
        <title>My Blogs | nirab.xyz</title>
        <meta name="description" content="ALL portfolios of istiaq nirab" />
      </Helmet>
      <h2>Blog &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
      <Pagination currentPage={pageContext.currentPage} numPages={pageContext.numPages} />
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query blogListQuery($skip: Int! = 0, $limit: Int! = 6){
    allMarkdownRemark(sort: { order: DESC,  fields: [frontmatter___date] }, filter: {frontmatter: {template: {eq: "BlogPost"}}}, limit: $limit, skip: $skip) {
    edges {
      node {
        id
        frontmatter {
          title
          template
          path
          date(formatString: "MMMM DD, YYYY")
          thumbnail
          metaDescription
        }
      }
    }
  }
  }
`