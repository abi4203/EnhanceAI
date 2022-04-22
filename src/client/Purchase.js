import React from "react";
import "./purchase.css";
import { Card, Container, Button, Row, Col } from "react-bootstrap";


const Purchase = () => {
  return (
    <div>
      <body class="u-body">
        <div class="bg-light">
          <Container fluid="lg">
            <div>
              <h1 class="text-center fw-bolder">Purchase</h1>
              <Row>
                <Col>
                  <p class="fs-5 " style={{ margin: "0" }}>
                    Pricing Options-You can try the free trial option to begin
                    testing Enhance AI, or commit to a entry or pro plan to get
                    started immediately!
                  </p>
                </Col>
                <Col>
                  Unlimited code conversion <br />
                  Unlimited regex pattern
                </Col>
                <Col>
                  Fix and clean code <br />
                  24/7 Support
                </Col>
              </Row>
            </div>
            <div style={{ height: "2rem" }}></div>
            <Row>
              <Col>
                <div
                  class="shadow p-3 mb-3 bg-primary bg-gradient   "
                  style={{
                    width: "18rem",
                    height: "19rem",
                    borderRadius: "15px",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="fw-bold text-white">
                      STARTERS PLAN
                    </Card.Title>
                    <div>
                      <h1 class="fw-bolder text-white">Free-Trail</h1>
                    </div>
                    <div style={{height: "10px"}}></div>
                    <Button
                      variant="light"
                      size="lg"
                      href="https://buy.stripe.com/test_28odUB1ay3LL7jq3cc"
                      className="d-grid text-start"
                    >
                      Proceed
                    </Button>
                  </Card.Body>
                </div>
              </Col>

              <Col>
                <div
                  class="shadow p-3 mb-3  bg-gradient  "
                  style={{
                    width: "18rem",
                    height: "19rem",
                    backgroundColor: "white",
                    borderRadius: "15px",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="fw-bold">STARTERS PLAN</Card.Title>
                    <div>
                      <Row>
                        <Col> <h1 class="fw-bolder ">Rs.100</h1></Col>
                        <Col> <p class='fs-6 fw-bolder'> /Month</p></Col>
                      </Row>
                     
                    </div>
                    <div style={{height: "10px"}}></div>
                    <Button
                      class="btn "
                      size="lg"
                      href="https://buy.stripe.com/test_9AQcQx5qO5TT6fm5kp"
                      className="d-grid text-start"

                    >
                      Proceed Monthly
                    </Button>
                  </Card.Body>
                </div>
              </Col>

              <Col>
                <div
                  class="shadow p-3 mb-3  bg-gradient r "
                  style={{
                    width: "18rem",
                    height: "19rem",
                    backgroundColor: "white",
                    borderRadius: "15px",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="fw-bold">STARTERS PLAN</Card.Title>
                    <div>
                      <Row>
                        <Col> <h1 class="fw-bolder ">Rs.500</h1></Col>
                        
                      </Row>
                      <Row>
                      <Col> <p class='fs-6 fw-bolder'> /Year</p></Col>
                      </Row>
                     
                    </div>
                    <div style={{height: "10px"}}></div>
                    <Button
                      class=" btn"
                      size="lg"
                      href="https://buy.stripe.com/test_8wM7wdbPc0zz5biaEI"
                      className="d-grid text-start"
                    >
                      Proceed Annualy
                    </Button>
                    
                  </Card.Body>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </body>
    </div>
  );
};

export default Purchase;