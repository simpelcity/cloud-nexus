import { Container, Row, Col, Button, ButtonGroup, Card, ListGroup } from 'react-bootstrap';

export default function Pricing() {
  return (
    <>
      <main>
        <section className="plans-pricing d-flex justify-content text-center">
          <Container className="d-flex flex-column align-items-center justify-content-start my-5">
            <h2 className="text-uppercase">
              <span>plans</span>{" "}
              <span className="text-primary">&</span>{" "}
              <span>pricing</span>
            </h2>

            <ButtonGroup aria-label="Pricing Plans">
              <Button href="#cloud" variant="primary" className="fw-bold text-uppercase active rounded-start-1">cloud</Button>
              <Button href="#colocation" variant="primary" className="fw-bold text-uppercase text-white">colocation</Button>
              <Button href="#dedicated" variant="primary" className="fw-bold text-uppercase text-white rounded-end-1">dedicated</Button>
            </ButtonGroup>

            <Row className="d-flex justify-content-center w-100 mt-4 row-gap-4">
              <Col xs={12} md={6} xl={4} className="mt-0 mt-xl-3">
                <Card className="shadow-sm border-0 rounded-0 h-100">
                  <Card.Body>
                    <Card.Title className="text-uppercase m-0 fs-6">cloud</Card.Title>
                    <Card.Title className="text-uppercase fs-3">starter</Card.Title>
                    <Card.Text>
                      <ListGroup>
                        <ListGroup.Item className="border-0 p-0 text-body-secondary fw-bold">
                          <span>$10</span>
                          <span className="small">/month</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0"><p className="m-0">1 vCPU</p></ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0">1 GB RAM</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0">50 GB NVME SSD</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0">24/7 support</ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} xl={4} className="mb-0 mb-xl-3">
                <Card className="shadow-sm bg-light border-0 rounded-0 h-100">
                  <Card.Body>
                    <Card.Title className="text-uppercase m-0 fs-6">cloud</Card.Title>
                    <Card.Title className="text-uppercase fs-3">professional</Card.Title>
                    <Card.Text>
                      <ListGroup>
                        <ListGroup.Item className="border-0 p-0 text-body-secondary fw-bold bg-light">
                          <span>$25</span>
                          <span className="small">/month</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 bg-light">2 vCPU</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 bg-light">4 GB RAM</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 bg-light">100 GB NVME SSD</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 bg-light">Daily Backups</ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} xl={4} className="mt-0 mt-xl-3">
                <Card className="shadow-sm border-0 rounded-0 h-100">
                  <Card.Body>
                    <Card.Title className="text-uppercase m-0 fs-6">cloud</Card.Title>
                    <Card.Title className="text-uppercase fs-3">enterprise</Card.Title>
                    <Card.Text>
                      <ListGroup>
                        <ListGroup.Item className="border-0 p-0 text-body-secondary fw-bold">
                          <span>$50</span>
                          <span className="small">/month</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0">4 vCPU</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0">8 GB RAM</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0">250 GB NVME SSD</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0">Priority Support</ListGroup.Item>
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