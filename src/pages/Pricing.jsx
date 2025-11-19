import { Container, Row, Col, Button, ButtonGroup, Card, ListGroup } from 'react-bootstrap';

export default function Pricing() {
  return (
    <>
      <main>
        <section className="plans-pricing d-flex justify-content text-center">
          <Container className="d-flex flex-column align-items-center justify-content-start my-5">
            <h1 className="fw-bold text-uppercase">
              <span>plans</span>{" "}
              <span className="text-primary">&</span>{" "}
              <span>pricing</span>
            </h1>

            <ButtonGroup aria-label="Pricing Plans">
              <Button href="#cloud" variant="primary" className="fw-bold text-uppercase active rounded-start-1 fs-5">cloud</Button>
              <Button href="#colocation" variant="primary" className="fw-bold text-uppercase text-white fs-5">colocation</Button>
              <Button href="#dedicated" variant="primary" className="fw-bold text-uppercase text-white rounded-end-1 fs-5">dedicated</Button>
            </ButtonGroup>

            <Row className="d-flex justify-content-center w-100 mt-4">
              <Col xl={4} className="mt-3">
                <Card className="shadow-sm border-0 rounded-0">
                  <Card.Body>
                    <Card.Title className="text-uppercase fw-bold m-0 fs-4">cloud</Card.Title>
                    <Card.Title className="text-uppercase fw-bold fs-1">starter</Card.Title>
                    <Card.Text>
                      <ListGroup>
                        <ListGroup.Item className="border-0 p-0 fs-5 text-black-50 fw-bold">
                          <span>$10</span>
                          <span className="small">/month</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 fs-5"><p className="m-0">1 vCPU</p></ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 fs-5">1 GB RAM</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 fs-5">50 GB NVME SSD</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 fs-5">24/7 support</ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4}>
                <Card className="shadow-sm bg-light border-0 rounded-0">
                  <Card.Body>
                    <Card.Title className="text-uppercase fw-bold m-0 fs-4">cloud</Card.Title>
                    <Card.Title className="text-uppercase fw-bold fs-1">professional</Card.Title>
                    <Card.Text>
                      <ListGroup>
                        <ListGroup.Item className="border-0 p-0 fs-5 text-black-50 fw-bold bg-light">
                          <span>$25</span>
                          <span className="small">/month</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 fs-5 bg-light">2 vCPU</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 fs-5 bg-light">4 GB RAM</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 fs-5 bg-light">100 GB NVME SSD</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 fs-5 bg-light">Daily Backups</ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} className="mt-3">
                <Card className="shadow-sm border-0 rounded-0">
                  <Card.Body>
                    <Card.Title className="text-uppercase fw-bold m-0 fs-4">cloud</Card.Title>
                    <Card.Title className="text-uppercase fw-bold fs-1">enterprise</Card.Title>
                    <Card.Text>
                      <ListGroup>
                        <ListGroup.Item className="border-0 p-0 fs-5 text-black-50 fw-bold">
                          <span>$50</span>
                          <span className="small">/month</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 fs-5">4 vCPU</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 fs-5">8 GB RAM</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 fs-5">250 GB NVME SSD</ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0 fs-5">Priority Support</ListGroup.Item>
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