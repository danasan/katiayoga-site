import React from "react"
import "../assets/css/main.css"
import "./image.js"

class Header extends React.Component {
  render() {
      return (
          <section id="header">
              <div className="hero-img">
                  <h1>Hi, I'm <strong>Photon</strong>, another fine<br />
                  little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
                  <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
                  lobortis feugiat sapien sed etiam volutpat accumsan.</p>
                  <ul className="actions">
                      <li><a href="#" className="button scrolly">Discover</a></li>
                  </ul>
              </div>
          </section>
      )
  }
}
export default Header
