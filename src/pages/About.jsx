import { Container, Row, Col, Image, Button, ListGroup } from 'react-bootstrap';

export default function About() {
  return (
    <>
      <main>
        <section className="welcome-about d-flex justify-content-center text-center">
          <Container className="d-flex flex-column align-items-center justify-content-center my-5">
            <Row className="w-100 mb-4 d-flex justify-content-center">
              <Col xs={12} md={10} xl={10}>
                <h2 className="text-uppercase">
                  <span>about</span>{" "}
                  <span className="text-primary">us</span>
                </h2>
                <p className="m-0">
                  Welcome to Cloud Nexus, where innovation meets reliability in the world of web
                  hosting. We're more than just a hosting provider—we're your trusted partner in building,
                  scaling, and managing your digital presence.
                </p>
              </Col>
            </Row>
            <Row className="w-100 px-0 mb-3 mb-md-0 mb-xl-3 row-gap-3">
              <Col xs={12} md={6} xl={6} className="d-flex flex-column justify-content-center">
                <h2 className="text-uppercase">
                  <span>who we</span>{" "}
                  <span className="text-primary">are</span>
                </h2>
                <p className="m-0">
                  Founded with a vision to empower businesses and
                  individuals, Cloud Nexus combines cutting-edge
                  technology with unparalleled customer service to deliver
                  hosting solutions that are fast, secure, and scalable. Our
                  team of experienced engineers, developers, and support
                  specialists are passionate about ensuring your online
                  success.
                </p>
              </Col>
              <Col xs={12} md={6} xl={6} className="d-flex align-items-center">
                <Image src="/assets/images/woman-in-datacenter.jpg" alt="Woman in datacenter" className="object-fit-cover rounded-3" />
              </Col>
            </Row>
            <Row className="w-100 px-0 d-flex flex-column-reverse flex-md-row row-gap-3">
              <Col xs={12} md={6} xl={6} className="d-flex align-items-center">
                <Image src="/assets/images/datacenter.jpg" alt="Datacenter" className="object-fit-cover rounded-3" />
              </Col>
              <Col xs={12} md={6} xl={6} className="d-flex flex-column justify-content-center">
                <h2 className="text-uppercase">
                  <span>our</span>{" "}
                  <span className="text-primary">promise</span>
                </h2>
                <p className="m-0">
                  We don't just provide hosting; we build lasting
                  partnerships. Our team is committed to ensuring that your
                  experience with Cloud Nexus is seamless, personalized,
                  and effective. Whether you're launching a small project or
                  managing a complex infrastructure, we're here every step
                  of the way.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="services-about d-flex justify-content-center text-center bg-light">
          <Container className="d-flex flex-column align-items-center justify-content-center my-5">
            <Row className="w-100 mb-3 row-gap-3">
              <Col xs={12} md={5} xl={5}>
                <h2 className="text-uppercase">
                  <span className="text-primary">what we</span>{" "}
                  <span>do</span>
                </h2>
                <ListGroup>
                  <ListGroup.Item className="border-0 p-0 bg-light">Cloud Hosting</ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0 bg-light">Dedicated Server Hosting</ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0 bg-light">Managed Server Hosting</ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0 bg-light">Colocation Services</ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0 bg-light">Storage Buckets</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={12} md={7} xl={7} className="d-flex flex-column">
                <h2 className="text-uppercase">
                  <span className="text-primary">why choose</span>{" "}
                  <span>cloud nexus</span>
                  <span className="text-primary">?</span>
                </h2>
                <ListGroup>
                  <ListGroup.Item className="border-0 p-0 bg-light">Performance-Driven</ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0 bg-light">Security First</ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0 bg-light">24/7 Expert Support</ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0 bg-light">Eco-Friendly Commitment</ListGroup.Item>
                  <ListGroup.Item className="border-0 p-0 bg-light">Global Reach</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Button variant="primary" href="/services" className="fw-bold text-uppercase text-white rounded-1">view services</Button>
          </Container>
        </section>
        <section className="join-about d-flex justify-content-center text-center">
          <Container className="d-flex flex-column align-items-center justify-content-center my-5">
            <Col xs={12} md={10} xl={8} className="mb-3">
              <h2 className="text-uppercase">
                <span>join the</span>{" "}
                <span className="text-primary">nexus</span>
              </h2>
              <p className="m-0">
                Become part of a community that values excellence, innovation, and
                support. With Cloud Nexus, your digital ambitions have a home.
              </p>
            </Col>
            <Button variant="primary" href="/contact" className="fw-bold text-uppercase text-white rounded-1">get in touch</Button>
          </Container>
        </section>
      </main>
    </>
  )
}