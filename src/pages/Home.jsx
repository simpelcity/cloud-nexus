import { Container, Image, Row, Col, Button } from 'react-bootstrap';

export default function Home() {
    return (
        <>
            <main>
                <section className="home-img position-relative">
                    <Image src="/assets/images/server-rack.jpg" className="object-fit-cover w-100" />
                    <div className="overlay position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center">
                        <h1 className="fw-bold text-white text-uppercase">welcome to cloud nexus</h1>
                    </div>
                </section>
                <section className="short-about d-flex justify-content-center">
                    <Container className="d-flex flex-column align-items-center my-5">
                        <h1 className="fw-bold text-uppercase d-flex justify-content-center gap-3">
                            <span>your</span>
                            <span className="text-primary">partner</span>
                            <span>in reliable, scalable</span>
                            <span className="text-primary">hosting solutions</span>
                        </h1>
                        <Row className="d-flex justify-content-center">
                            <Col md={5} className="text-center fs-5 d-flex align-items-center">
                                <p className="mb-0 ms-2">
                                    At Cloud Nexus, we provide cutting-edge hosting services designed to empower businesses and individuals to succeed in a fast-paced digital world. Wheter you're launching a startup, managing a growing enterprise, or creating a personal project, we've got the tools and expertise to make it happen.
                                </p>
                            </Col>
                            <Col md={4}>
                                <Image src="/assets/images/computer-monitor-in-datacenter.jpg" className="h-100 ms-3" rounded />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="why-us d-flex justify-content-center bg-light">
                    <Container className="d-flex flex-column align-items-center justify-content-center my-5" fluid>
                        <h1 className="fw-bold text-uppercase d-flex justify-content-center gap-3 mb-4">
                            <span className="text-primary">why choose</span>
                            <span>cloud nexus?</span>
                        </h1>
                        <Row className="mb-3">
                            <Col md={4} className="text-center d-flex flex-column align-items-center">
                                <span className="material-symbols-outlined icon-speed">speed</span>
                                <h4 className="fw-bold text-uppercase d-flex justify-content-center gap-2">
                                    <span className="text-primary">lightning-fast</span>
                                    <span>performance</span>
                                </h4>
                                <p className="mb-0 fs-5">
                                    Experience blazing speeds with our state-of-the-art infrastructure and optimized servers.
                                </p>
                            </Col>
                            <Col md={4} className="text-center d-flex flex-column align-items-center">
                                <span className="material-symbols-outlined icon-support">support_agent</span>
                                <h4 className="fw-bold text-uppercase d-flex justify-content-center gap-2">
                                    <span className="text-primary">24/7</span>
                                    <span>expert support</span>
                                </h4>
                                <p className="mb-0 fs-5">
                                    Our dedicated support team is here around the clock to answer questions and resolve issues.
                                </p>
                            </Col>
                            <Col md={4} className="text-center d-flex flex-column align-items-center">
                                <span className="material-symbols-outlined icon-chart">bar_chart_4_bars</span>
                                <h4 className="fw-bold text-uppercase d-flex justify-content-center gap-2">
                                    <span className="text-primary">scalable</span>
                                    <span>solutions</span>
                                </h4>
                                <p className="mb-0 fs-5">
                                    From cloud hosting to colocation, our services grow with your business.
                                </p>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center mb-3">
                            <Col md={4} className="text-center d-flex flex-column align-items-center">
                                <span className="material-symbols-outlined icon-filled icon-shield">shield_lock</span>
                                <h4 className="fw-bold text-uppercase d-flex justify-content-center gap-2">
                                    <span className="text-primary">unparalleled</span>
                                    <span>security</span>
                                </h4>
                                <p className="mb-0 fs-5">
                                    Protect your data with industry-leading security measures, including DDoS protection and data encryption.
                                </p>
                            </Col>
                            <Col md={4} className="text-center d-flex flex-column align-items-center">
                                <span className="material-symbols-outlined icon-public">public</span>
                                <h4 className="fw-bold text-uppercase d-flex justify-content-center gap-2">
                                    <span className="text-primary">global</span>
                                    <span>presence</span>
                                </h4>
                                <p className="mb-0 fs-5">
                                    With data centers strategically located around the globe, you can count on low-latency performance wherever your audience is.
                                </p>
                            </Col>
                        </Row>
                        <Button variant="primary" href="/pricing" className="text-white rounded-1 text-uppercase d-flex gap-1">
                            <span className="fw-bold">get started today</span>
                            <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
                        </Button>
                    </Container>
                </section>
                <section className="partner d-flex justify-content-center">
                    <Container className="d-flex flex-column align-items-center justify-content-center my-5">
                        <h1 className="fw-bold text-uppercase d-flex justify-content-center gap-3">
                            <span>a hosting</span>
                            <span className="text-primary">partner</span>
                            <span>you can</span>
                            <span className="text-primary">trust</span>
                        </h1>
                        <Row className="d-flex justify-content-center">
                            <Col md={3}>
                                <Image src="/assets/images/harddisks-in-server.jpg" className="h-100 w-100" rounded />
                            </Col>
                            <Col md={7} className="">
                                <p className="mb-0 fs-5">
                                    At Cloud Nexus, we don't just provide hosting services; we provide peace of mind. Our mission is to deliver reliable, innovative, and scalable solutions to help you thrive online. Whether you're building a website, managing a team, or scaling an application, we're with you every step of the way.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}