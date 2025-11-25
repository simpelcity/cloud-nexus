import { Container, Row, Col, Button, Card, ListGroup, Image } from 'react-bootstrap';

export default function Services() {
  return (
    <>
      <title>Services | Cloud Nexus</title>
      <meta name="description" content="Check out what we have to offer for your hosting needs, from flexible cloud servers to remote accessable storage buckets." />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Services | Cloud Nexus" />
      <meta property="og:description" content="Check out what we have to offer for your hosting needs, from flexible cloud servers to remote accessable storage buckets." />
      <meta property="og:url" content="https://www.cloudnexus.com/services" />
      <meta property="og:image" content="https://www.cloudnexus.com/assets/images/logo.png" />
      <link rel="canonical" href="https://www.cloudnexus.com/services" />

      <main>
        {/* --- SERVICES SECTION --- */}
        <section className="services d-flex justify-content-center text-center">
          <Container className="d-flex flex-column align-items-center justify-content-center my-5">
            <h1 className="text-uppercase">services</h1>
            <Row className="d-flex justify-content-center row-gap-4 w-100">
              <Col xs={12} md={6} lg={4}>
                <Card className="border-0 rounded-0 shadow-sm h-100">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Image src="/assets/icons/cloud.svg" alt="Cloud Icon" className="icon-cloud" />
                    <Card.Title className="fs-4 text-uppercase">cloud</Card.Title>
                    <Card.Text className="text-center">
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
                    <Card.Title className="fs-4 text-uppercase">dedicated server</Card.Title>
                    <Card.Text className="text-center">
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
                    <Card.Title className="fs-4 text-uppercase">managed server</Card.Title>
                    <Card.Text className="text-center">
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
                    <Card.Title className="fs-4 text-uppercase">colocation</Card.Title>
                    <Card.Text className="text-center">
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
                    <Card.Title className="fs-4 text-uppercase">storage buckets</Card.Title>
                    <Card.Text className="text-center">
                      Access your storage from everywhere and at any time via PC, smartphone, and tablet.
                    </Card.Text>
                    <Button variant="outline-primary" href="/pricing" className="text-uppercase fw-bold rounded-1 mt-auto">view options</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        {/* --- WHY CHOOSE US SECTION --- */}
        <section className="why-us-services d-flex justify-content-center text-center text-xl-start bg-light">
          <Container className="d-flex align-items-center justify-content-center my-5">
            <Row className="d-flex justify-content-center row-gap-4 w-100">
              <Col xs={12} md={9} xl={8}>
                <h2 className="text-uppercase">why choose cloud nexus?</h2>
                <p className="m-0">
                  At Cloud Nexus, we're committed to empowering your business with hosting solutions that combine cutting-edge technology, flexibility, and peace of mind. Whether you need customized configurations, proactive support, or a secure environment for your critical infrastructure, we deliver excellence at every step. Experience the difference today!
                </p>
              </Col>
              <Col xs={12} md={3} xl={2} className="d-flex justify-content-xl-start justify-content-center align-items-center">
                <ListGroup className="text-start mt-xl-4">
                  <ListGroup.Item className="border-0 p-0 bg-light">
                    <p className=" m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>99.9% Uptime</span>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0 bg-light">
                    <p className=" m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>Top Tier Security</span>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0 bg-light">
                    <p className=" m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>24/7 support</span>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0 bg-light">
                    <p className=" m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>100% scalable</span>
                    </p>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </section>
        {/* --- HOSTING SERVICES SECTION --- */}
        <section className="hosting-services d-flex justify-content-center text-start">
          <Container className="my-5 d-flex justify-content-center">
            <Row className="d-flex justify-content-center row-gap-4 w-100">
              <Col xs={12} md={3} xl={4} className="d-flex align-items-center justify-content-center">
                <ListGroup className="">
                  <ListGroup.Item className="border-0 p-0">
                    <p className="m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>Tailored Infrastructure</span>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0">
                    <p className="m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>Flexible Configurations</span>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0">
                    <p className="m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>Dedicated Account Management</span>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0">
                    <p className="m-0 d-flex align-items-center column-gap-1">
                      <span className="material-symbols-outlined icon-check text-success">check</span>
                      <span>Seamless Integration</span>
                    </p>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={12} md={8} xl={7} className="text-center text-lg-start">
                <h2 className="text-uppercase">custom hosting solutions for unique requirements</h2>
                <p className="">
                  We understand that every business has unique needs, and one-size-fits-all solutions might not always work. That's why we offer custom hosting solutions designed specifically for your requirements. Whether you need specialized hardware, bespoke configurations, or tailored support, we've got you covered.
                </p>
                <p className="m-0">
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