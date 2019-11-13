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
import Table from "react-bootstrap/Table";

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Katia Yoga";
    return (
      <Layout>
        <SEO title="Katia Yoga" />
        <Helmet title={siteTitle} />

        <section id="styles" className="yoga-styles">
          <div className="styles-header">
            <h1 class="section-title">
              Adipiscing a commodo ante nunc accumsan interdum.
            </h1>
            <hr className="styles-hr"></hr>
          </div>

          <CardDeck className="card-deck">
            <Card>
              <Card.Img className="card-img" variant="top" src={hatha} />
              <Card.Body className="card-body">
                <Card.Title style={{ fontSize: 25, fontWeight: 500 }}>Hatha</Card.Title>
                <Card.Text style={{ fontSize: 18, fontWeight: 200 }}>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img className="card-img" variant="top" src={anusara} />
              <Card.Body>
                <Card.Title style={{ fontSize: 25, fontWeight: 500 }}>Anusara</Card.Title>
                <Card.Text style={{ fontSize: 18, fontWeight: 200 }}>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img className="card-img" variant="top" src={restorative} />
              <Card.Body>
                <Card.Title style={{ fontSize: 25, fontWeight: 500 }}>Restorativo</Card.Title>
                <Card.Text style={{ fontSize: 18, fontWeight: 200 }}>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
              </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </section>

        <section id="about" className="main style2">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5">
              <span className="img-container">
                <img className="img-responsive center-block" src={profile} alt="Imagen de Perfil"
                  style={{ width: 380, height: 400, paddingRight: 0, float: "center" }} />
              </span>
            </div>
            <div className="col-12 col-sm-12 col-md-6"
              style={{ paddingLeft: 60, paddingRight: 60, paddingTop: 20 }}>
              <header className="major" >
                <h2 class="section-title">Sobre mi</h2>
                {/* <hr className="about-hr"></hr> */}
              </header>
              <div className="about-text" style={{ textAlign: "left" }}>
                <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="classes" className="class-section">
          <header className="major" >
            <h2 class="section-title">Clases</h2>
          </header>
          <Table striped bordered hover
            style={{
              textAlign: "center", fontFamily: 'Josefin Slab', fontWeight: "bold",
            }}>
            <thead>
              <tr>
                <th>Martes</th>
                <th>Miércoles</th>
                <th>Jueves</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan="3">Mañana</th>
              </tr>
              <tr>
                <td>9:00 - 10:15</td>
                <td>9:00 - 10:15</td>
                <td>9:00 - 10:15</td>
              </tr>
              <tr>
                <th colSpan="3">Tarde</th>
              </tr>
              <tr>
                <td>19:00 - 20:15</td>
                <td>19:00 - 20:15</td>
                <td>19:00 - 20:15</td>
              </tr>
            </tbody>
          </Table>
        </section>

        <section id="contact" className="contact-section">
          <div class="contact-content">
            <h1 class="contact-title">
              Contactar
            </h1>
            <h2 class="contact-subtitle">
              xxx-xxx-xxxx
            </h2>
            <h2 class="contact-subtitle">
              name@domain.com
            </h2>
          </div>
        </section>

      </Layout>
    );
  }
}

export default IndexPage
