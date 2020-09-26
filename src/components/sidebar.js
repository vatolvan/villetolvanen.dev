import React from "react"
import { Link } from "gatsby"

export default function Sidebar() {
  return (
    <div style={{ float: "left", padding: "10px", margin: "0" }}>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ padding: "10px 10px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ padding: "10px 10px" }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ padding: "10px 10px" }}>
          <Link to="/links">Links</Link>
        </li>
      </ul>
    </div>
  )
}
