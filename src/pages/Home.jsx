import { Container, Image, Row, Col, Button, Card } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <main>
        <section className="welcome home-img position-relative">
          <Image src="/assets/images/server-rack.jpg" alt="Server Rack" className="object-fit-cover w-100" />
          <div className="overlay position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center">
            <h1 className="fw-bold text-white text-uppercase">welcome to cloud nexus</h1>
          </div>
        </section>
        <section className="short-about d-flex justify-content-center text-center">
          <Container className="d-flex flex-column align-items-center my-5" fluid>
            <h1 className="fw-bold text-uppercase mb-4 mb-lg-2">
              <span>your</span>{" "}
              <span className="text-primary">partner</span>{" "}
              <span>in reliable, scalable</span>{" "}
              <span className="text-primary">hosting solutions</span>
            </h1>
            <Row className="d-flex justify-content-center w-100 row-gap-3">
              <Col xs={12} md={6} lg={6} xl={5} className="fs-5 d-flex align-items-center pe-0 ps-0 ps-lg-4">
                <p className="mb-0 ms-0">
                  At Cloud Nexus, we provide cutting-edge hosting services designed to empower businesses and individuals to succeed in a fast-paced digital world. Wheter you're launching a startup, managing a growing enterprise, or creating a personal project, we've got the tools and expertise to make it happen.
                </p>
              </Col>
              <Col xs={12} md={6} lg={6} xl={4} className="">
                <Image src="/assets/images/computer-monitor-in-datacenter.jpg" alt="Computer monitor in datacenter" className="ms-lg-3 object-fit-cover" rounded />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="why-us d-flex justify-content-center bg-light text-center">
          <Container className="d-flex flex-column align-items-center justify-content-center my-5" fluid>
            <h1 className="fw-bold text-uppercase mb-4">
              <span className="text-primary">why choose</span>{" "}
              <span>cloud nexus?</span>
            </h1>
            <Row className="d-flex justify-content-center w-100 mb-2 mb-xl-0">
              <Col md={6} lg={4} xl={4} className="d-flex flex-column align-items-center mb-4">
                <Image src="/assets/icons/speedometer.svg" alt="Speedometer Icon" className="icon-speed" />
                <h4 className="fw-bold text-uppercase">
                  <span className="text-primary">lightning-fast</span>{" "}
                  <span>performance</span>
                </h4>
                <p className="mb-0 fs-5">
                  Experience blazing speeds with our state-of-the-art infrastructure and optimized servers.
                </p>
              </Col>
              <Col md={6} lg={4} xl={4} className="d-flex flex-column align-items-center mb-4 mb-lg-3">
                <Image src="/assets/icons/support-agent.svg" alt="Support Agent Icon" className="icon-support" />
                <h4 className="fw-bold text-uppercase">
                  <span className="text-primary">24/7</span>{" "}
                  <span>expert support</span>
                </h4>
                <p className="mb-0 fs-5">
                  Our dedicated support team is here around the clock to answer questions and resolve issues.
                </p>
              </Col>
              <Col md={6} lg={4} xl={4} className="d-flex flex-column align-items-center mb-4 mb-lg-3">
                <Image src="/assets/icons/chart-bar.svg" alt="Chart Icon" className="icon-chart" />
                <h4 className="fw-bold text-uppercase">
                  <span className="text-primary">scalable</span>{" "}
                  <span>solutions</span>
                </h4>
                <p className="mb-0 fs-5">
                  From cloud hosting to colocation, our services grow with your business.
                </p>
              </Col>
              <Col md={6} lg={4} xl={4} className="d-flex flex-column align-items-center mb-4 mb-lg-3">
                <Image src="/assets/icons/shield-lock.svg" alt="Shield Lock Icon" className="icon-shield-lock" />
                <h4 className="fw-bold text-uppercase">
                  <span className="text-primary">unparalleled</span>{" "}
                  <span>security</span>
                </h4>
                <p className="mb-0 fs-5">
                  Protect your data with industry-leading security measures, including DDoS protection and data encryption.
                </p>
              </Col>
              <Col md={6} lg={4} xl={4} className="d-flex flex-column align-items-center mb-4 mb-lg-3">
                <Image src="/assets/icons/globe.svg" alt="Globe Icon" className="icon-globe" />
                <h4 className="fw-bold text-uppercase">
                  <span className="text-primary">global</span>{" "}
                  <span>presence</span>
                </h4>
                <p className="mb-0 fs-5">
                  With data centers strategically located around the globe, you can count on low-latency performance wherever your audience is.
                </p>
              </Col>
            </Row>
            <Button variant="primary" href="/services" className="text-white rounded-1 text-uppercase d-flex gap-1">
              <span className="fw-bold">get started today</span>
              <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
            </Button>
          </Container>
        </section>
        <section className="partner d-flex justify-content-center text-center text-md-start">
          <Container className="d-flex flex-column align-items-center justify-content-center my-5" fluid>
            <h1 className="fw-bold text-uppercase mb-4 mb-lg-2">
              <span>a hosting</span>{" "}
              <span className="text-primary">partner</span>{" "}
              <span>you can</span>{" "}
              <span className="text-primary">trust</span>
            </h1>
            <Row className="d-flex justify-content-center row-gap-3 w-100">
              <Col md={5} lg={4} xl={3} className="d-flex justify-content-center justify-content-lg-end">
                <Image src="/assets/images/harddisks-in-server.jpg" alt="Hard Disks in server" loading="lazy" className="" rounded />
              </Col>
              <Col md={7} lg={7} xl={6} className="d-flex align-items-center">
                <p className="mb-0 fs-5">
                  At Cloud Nexus, we don't just provide hosting services; we provide peace of mind. Our mission is to deliver reliable, innovative, and scalable solutions to help you thrive online. Whether you're building a website, managing a team, or scaling an application, we're with you every step of the way.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="services d-flex justify-content-center bg-light text-center">
          <Container className="d-flex flex-column align-items-center justify-content-center my-5 row-gap-4" fluid>
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
        <section className="get-started d-flex justify-content-center text-center">
          <Container className="d-flex flex-column align-items-center justify-content-center my-5" fluid>
            <h1 className="fw-bold text-uppercase">
              <span>get started</span>{" "}
              <span className="text-primary">today</span>
            </h1>
            <p className="fs-5">
              Explore our hosting solutions and find the perfect fit for your needs.
            </p>
            <Button variant="outline-primary" href="/pricing" className="fw-bold text-uppercase rounded-1">view plans & pricing</Button>
          </Container>
        </section>
      </main>
    </>
  )
}