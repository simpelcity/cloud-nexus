import { Container, Row, Col, Button, Card, ListGroup, Image } from 'react-bootstrap';

export default function Services() {
  return (
    <>
      <main>
        <section className="services d-flex justify-content-center text-center">
          <Container className="d-flex flex-column align-items-center justify-content-center my-5" fluid>
            <h1 className="fw-bold text-uppercase">services</h1>
            <Row className="d-flex justify-content-center row-gap-4 w-100">
              <Col xs={12} md={6} lg={4}>
                <Card className="border-0 rounded-0 shadow-sm h-100">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Image src="/assets/icons/cloud.svg" alt="Cloud Icon" className="icon-cloud" />
                    <Card.Title className="fs-4 text-uppercase fw-bold">cloud</Card.Title>
                    <Card.Text className="text-center fs-5">
                      A little money gets you lots of cloud. Flexible cloud servers with high-end hardware.
                    </Card.Text>
                    <Button variant="outline-primary" href="/pricing" className="text-uppercase fw-bold rounded-1 mt-auto">view options</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Card className="border-0 rounded-0 shadow-sm h-100">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Image src="/assets/icons/server.svg" alt="Servers Icon" className="icon-servers" />
                    <Card.Title className="fs-4 text-uppercase fw-bold">dedicated server</Card.Title>
                    <Card.Text className="text-center fs-5">
                      Dedicated root servers to meet any end. Top performance with an exellent connection.
                    </Card.Text>
                    <Button variant="outline-primary" href="/pricing" className="text-uppercase fw-bold rounded-1 mt-auto">view options</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Card className="border-0 rounded-0 shadow-sm h-100">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Image src="/assets/icons/server-plus.svg" alt="Server Plus Icon" className="icon-server-plus" />
                    <Card.Title className="fs-4 text-uppercase fw-bold">managed server</Card.Title>
                    <Card.Text className="text-center fs-5">
                      Stress-free server connection. We'll take care of the technical stuff.
                    </Card.Text>
                    <Button variant="outline-primary" href="/pricing" className="text-uppercase fw-bold rounded-1 mt-auto">view options</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Card className="border-0 rounded-0 shadow-sm h-100">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Image src="/assets/icons/server-network.svg" alt="Server Network Icon" className="icon-colocation" />
                    <Card.Title className="fs-4 text-uppercase fw-bold">colocation</Card.Title>
                    <Card.Text className="text-center fs-5">
                      State-of-the-art infrastructure for your project. A range of colocation rack to choose from.
                    </Card.Text>
                    <Button variant="outline-primary" href="/pricing" className="text-uppercase fw-bold rounded-1 mt-auto">view options</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Card className="border-0 rounded-0 shadow-sm h-100">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Image src="/assets/icons/database.svg" alt="Database Icon" className="icon-database" />
                    <Card.Title className="fs-4 text-uppercase fw-bold">storage buckets</Card.Title>
                    <Card.Text className="text-center fs-5">
                      Access your storage from everywhere and at any time via PC, smartphone, and tablet.
                    </Card.Text>
                    <Button variant="outline-primary" href="/pricing" className="text-uppercase fw-bold rounded-1 mt-auto">view options</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="why-us-services d-flex justify-content-center text-center bg-light">
          <Container className="d-flex flex-column align-items-center my-5">
            <h1 className="fw-bold text-uppercase">why choose cloud nexus?</h1>
            <Row className="d-flex justify-content-center justify-content-xl-start row-gap-4 w-100">
              <Col lg={9} xl={9}>
                <p className="fs-5">
                  At Cloud Nexus, we're committed to empowering your business with hosting solutions that combine cutting-edge technology, flexibility, and peace of mind. Whether you need customized configurations, proactive support, or a secure environment for your critical infrastructure, we deliver excellence at every step. Experience the difference today!
                </p>
              </Col>
              <Col lg={3} xl={2} className="d-flex justify-content-center">
                <ListGroup className="text-start">
                  <ListGroup.Item className="border-0 p-0 bg-light">
                    <p className="fs-5 m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>99.9% Uptime</span>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0 bg-light">
                    <p className="fs-5 m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>Top Tier Security</span>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0 bg-light">
                    <p className="fs-5 m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>24/7 support</span>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0 bg-light">
                    <p className="fs-5 m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>100% scalable</span>
                    </p>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="hosting-services d-flex justify-content-center text-start">
          <Container className="my-5 d-flex justify-content-center" fluid>
            <Row className="d-flex justify-content-center justify-content-xl-start row-gap-4 column-gap-xl-5 w-100">
              <Col lg={4} xl={3} className="d-flex align-items-center justify-content-center">
                <ListGroup className="">
                  <ListGroup.Item className="border-0 p-0">
                    <p className="fs-5 m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>Tailored Infrastructure</span>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0">
                    <p className="fs-5 m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>Flexible Configurations</span>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0">
                    <p className="fs-5 m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>Dedicated Account Management</span>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0">
                    <p className="fs-5 m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>Seamless Integration</span>
                    </p>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg={7} xl={8} className="text-center text-lg-start">
                <h1 className="fw-bold text-uppercase">custom hosting solutions for unique requirements</h1>
                <p className="fs-5">
                  We understand that every business has unique needs, and one-size-fits-all solutions might not always work. That's why we offer custom hosting solutions designed specifically for your requirements. Whether you need specialized hardware, bespoke configurations, or tailored support, we've got you covered.
                </p>
                <p className="fs-5">
                  Partner with us to build a hosting solution that's as unique as your business. Reach out today to discuss your custom requirements and let us help you bring your vision to life!
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}