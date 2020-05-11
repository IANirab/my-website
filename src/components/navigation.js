import React from "react"
import {Link} from "gatsby"
import Social from "../components/Social"

export default (props) => (
  <nav className="navigation">
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/about-me">About me</Link>
    <Link to="/blog">Blog</Link>
    <a href="https://www.fiverr.com/pronirab" target="_blank">Hire Me</a>
    <Social />
  </nav>
)