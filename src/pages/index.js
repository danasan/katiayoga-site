import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Helmet from "react-helmet";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import hatha from "../assets/images/hatha.jpeg";
import anusara from "../assets/images/anusara.jpeg";
import restorative from "../assets/images/restorative.jpeg";
import profile from "../assets/images/profile.jpeg";

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Katia Yoga";
    return (
      <Layout>
        <SEO title="Katia Yoga" />
        <Helmet title={siteTitle} />

        <section id="styles" className="yoga-styles">
          <h5 class="hero-subtitle">
            Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing!
          </h5>
          <hr></hr>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={hatha} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={anusara} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={restorative} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
              </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </section>

        <section id="about" className="main style2">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={profile} alt="Imagen de Perfil" />
              </div>
              <div className="col-6">
                <header className="major">
                  <h2>Lorem ipsum dolor adipiscing<br />
                    amet dolor consequat</h2>
                </header>
                <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="classes" className="class-section">
          <ul class="list-group">
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <h5 class="mb-1">Keynote: Internet of Things</h5>
                <span class="badge badge-pill badge-info p-2">9:00am</span>
              </div>
              <p class="mb-1">NodeStradamus</p>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <h5 class="mb-1">React Basics</h5>
                <span class="badge badge-pill badge-info p-2">10:00am</span>
              </div>
              <p class="mb-1">Vivianne McVue</p>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <h5 class="mb-1">Hey, Mongo!</h5>
                <span class="badge badge-pill badge-info p-2">11:00am</span>
              </div>
              <p class="mb-1">Jay Query</p>
            </li>
            <li class="list-group-item list-group-item-success">
              <div class="d-flex justify-content-between">
                <h5 class="mb-1">Lunch</h5>
                <span class="badge badge-pill badge-info p-2">12:00pm</span>
              </div>
              <p class="mb-1">Free pizza for everyone!</p>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <h5 class="mb-1">Introducing ES2015</h5>
                <span class="badge badge-pill badge-info p-2">1:00pm</span>
              </div>
              <p class="mb-1">Ecma Scriptnstuff</p>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <h5 class="mb-1">Getting Started With Redux</h5>
                <span class="badge badge-pill badge-info p-2">2:00pm</span>
              </div>
              <p class="mb-1">Robbie Redux</p>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <h5 class="mb-1">What's Babel?</h5>
                <span class="badge badge-pill badge-info p-2">3:00pm</span>
              </div>
              <p class="mb-1">Json Babel</p>
            </li>
          </ul>
        </section>

        <section id="contact" className="class-section">
          <div className="container">
            <header className="major">
              <h2>Contactar</h2>
            </header>
            <p>Sed lacus nascetur ac ante amet sapien.</p>
          </div>
        </section>

      </Layout>
    );
  }
}

export default IndexPage
