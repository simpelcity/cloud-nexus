import { Container, Row, Col, ListGroup, Card, Image } from 'react-bootstrap';

export default function Contact() {
  return (
    <>
      <title>Contact Us | Cloud Nexus</title>
      <meta name="description" content="Get in touch with Cloud Nexus. Contact our sales, technical, billing, or customer service teams for all your questions." />
      <link rel="canonical" href="https://www.cloudnexus.com/contact" />

      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Cloud Nexus",
            "url": "https://www.cloudnexus.com",
            "logo": "https://www.cloudnexus.com/logo.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "info@cloudnexus.com",
                "areaServed": "US"
              },
              {
                "@type": "ContactPoint",
                "contactType": "sales & general inquiries",
                "email": "sales@cloudnexus.com",
                "areaServed": "US"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+1-555-987-6543",
                "contactType": "technical support",
                "email": "support@cloudnexus.com",
                "website": "www.cloudnexus.com/support",
                "areaServed": "US"
              },
              {
                "@type": "ContactPoint",
                "contactType": "billing support",
                "email": "billing@cloudnexus.com",
                "areaServed": "US"
              },
            ]
          }
        }
      `}</script>

      <main>
        <section className="welcome-about d-flex justify-content-center text-center">
          <Container className="d-flex flex-column align-items-center justify-content-center mt-5 mb-4">
            <Row className="w-100 d-flex justify-content-center">
              <Col xs={12} md={10} xl={9}>
                <h2 className="text-uppercase">contact us</h2>
                <p className="m-0">
                  We're here to help! Whether you have questions about our services, need technical
                  support, or want to discuss your hosting needs, our team is just a message away.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="cards-contact d-flex justify content-center text-center">
          <Container className="d-flex justify-content-center mb-5">
            <Row className="w-100 d-flex justify-content-center row-gap-4">
              <Col xs={12} md={6} xl={4}>
                <Card className="border-0 rounded-0 shadow-sm h-100 bg-light">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Image src="/assets/icons/contact-card.svg" alt="Contact Card Icon" className="icon-contact-card" />
                    <Card.Title className="text-uppercase fs-3">
                      <span>get in</span>{" "}
                      <span className="text-primary">touch</span>
                    </Card.Title>
                    <Card.Text>
                      <ListGroup>
                        <ListGroup.Item className="border-0 p-0 bg-light">
                          <span className="fw-bold">Phone:</span>{" "}
                          <span>+1 (555) 123-4567</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 bg-light">
                          <span className="fw-bold">Email:</span>{" "}
                          <span>info@cloudnexus.com</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 bg-light">
                          <span className="fw-bold">Live Chat:</span>{" "}
                          <span>Available 24/7 on our website</span>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} xl={4}>
                <Card className="border-0 rounded-0 shadow-sm h-100">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Image src="/assets/icons/sales.svg" alt="Sales Woman Icon" className="icon-sales" />
                    <Card.Title className="text-uppercase fs-3">
                      <span>sales & general</span>{" "}
                      <span className="text-primary">inquiries</span>
                    </Card.Title>
                    <Card.Text>
                      <p>
                        Interested in learning more about how Cloud Nexus
                        can support your business? Our sales team is happy
                        to provide tailored advice and solutions.
                      </p>
                      <ListGroup>
                        <ListGroup.Item className="border-0 p-0">
                          <span className="fw-bold">Email:</span>{" "}
                          <span>sales@cloudnexus.com</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0">
                          <span className="fw-bold">Hours:</span>{" "}
                          <span>Monday - Friday</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0">
                          <span>9:00 AM - 6:00 PM (PST)</span>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} xl={4}>
                <Card className="border-0 rounded-0 shadow-sm h-100 bg-light">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Image src="/assets/icons/support-agent.svg" alt="Support Agent Icon" className="icon-support-agent" />
                    <Card.Title className="text-uppercase fs-3">
                      <span>technical</span>{" "}
                      <span className="text-primary">support</span>
                    </Card.Title>
                    <Card.Text>
                      <p>
                        Need help with your hosting or account? Our expert
                        support team is available around the clock to assist
                        you with any technical issues.
                      </p>
                      <ListGroup>
                        <ListGroup.Item className="border-0 p-0 bg-light">
                          <span className="fw-bold">Support Portal:</span>{" "}
                          <span>www.cloudnexus.com/support</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 bg-light">
                          <span className="fw-bold">Email:</span>{" "}
                          <span>support@cloudnexus.com</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 bg-light">
                          <span className="fw-bold">Phone:</span>{" "}
                          <span>24/7 Support Line:</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 bg-light">
                          <span>+1 (555) 987-6543</span>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} xl={4}>
                <Card className="border-0 rounded-0 shadow-sm h-100">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Image src="/assets/icons/receipt.svg" alt="Receipt Icon" className="icon-receipt" />
                    <Card.Title className="text-uppercase fs-3">
                      <span>billing</span>{" "}
                      <span className="text-primary">support</span>
                    </Card.Title>
                    <Card.Text>
                      <p>
                        Have questions about invoices, payments, or account
                        details? Reach out to our billing department for
                        prompt assistance.
                      </p>
                      <ListGroup>
                        <ListGroup.Item className="border-0 p-0">
                          <span className="fw-bold">Email:</span>{" "}
                          <span>billing@cloudnexus.com</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0">
                          <span className="fw-bold">Hours:</span>{" "}
                          <span>Monday - Friday</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0">
                          <span>8:00 AM - 5:00 PM (PST)</span>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} xl={4}>
                <Card className="border-0 rounded-0 shadow-sm h-100 bg-light">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Image src="/assets/icons/office-building-marker.svg" alt="Office Building Marker Icon" className="icon-office" />
                    <Card.Title className="text-uppercase fs-3">
                      <span>visit</span>{" "}
                      <span className="text-primary">us</span>
                    </Card.Title>
                    <Card.Text>
                      <p>
                        If you're in the area, feel free to stop by our
                        headquarters for a consultation or a chat.
                      </p>
                      <ListGroup>
                        <ListGroup.Item className="border-0 p-0 bg-light">
                          <span className="fw-bold">Address:</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 bg-light">
                          <span>Cloud Nexus HQ</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 bg-light">
                          <span>123 Tech Boulevard</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 bg-light">
                          <span>Innovate City, CA 90210</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 bg-light">
                          <span>USA</span>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} xl={4}>
                <Card className="border-0 rounded-0 shadow-sm h-100">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Image src="/assets/icons/office-building-marker.svg" alt="Office Building Marker Icon" className="icon-office" />
                    <Card.Title className="text-uppercase fs-3">
                      <span>follow</span>{" "}
                      <span className="text-primary">us</span>
                    </Card.Title>
                    <Card.Text>
                      <p>
                        Stay up-to-date with the latest news, updates, and
                        hosting tips:
                      </p>
                      <ListGroup>
                        <ListGroup.Item className="border-0 p-0">
                          <span className="fw-bold">Twitter:</span>{" "}
                          <span>@CloudNexusHQ</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0">
                          <span className="fw-bold">LinkedIn:</span>{" "}
                          <span>Cloud Nexus</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0">
                          <span className="fw-bold">Facebook:</span>{" "}
                          <span>Cloud Nexus</span>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}