import React from "react"
import {StaticQuery, graphql} from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{__html: data.site.siteMetadata.home.description}}
        />
        <a href='https://www.fiverr.com/pronirab' target="_blank" rel="noopener noreferrer" className="button -primary">Hire Me &rarr;</a>
      </div>
    )}
  />
)