import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <ul style={{ listStyle: "none" }}>
        <li>
          <a href="https://github.com/vatolvan">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ville-tolvanen-2b443184/">
            LinkedIn
          </a>
        </li>
      </ul>
    </Layout>
  )
}
