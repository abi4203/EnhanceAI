import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <body>
        <Container>
          <Row>
            <Col style={{ marginTop: "5rem" }}>
              <Card
                style={{ width: "18rem", height: "16.1rem", color: "#0070c9" }}
                className="border border-3"
                style={{
                  background: "linear-gradient(#fff,#e3e3e3)",
                  borderRadius: "15px",
                }}
              >
                <div>
                  <Card.Body style={{ height: "13.9rem" }}>
                    <Card.Title className="fw-bold">
                      Regex Expression{" "}
                    </Card.Title>
                    <Card.Text>
                      Need help with the coorect regex expression ddescribe it
                      and get it
                    </Card.Text>
                    <div style={{ height: "20px" }}></div>
                    <Button variant="primary" href="/RE">
                      Start working
                    </Button>
                  </Card.Body>
                </div>
              </Card>
            </Col>

            <Col style={{ marginTop: "5rem" }}>
              {/* <Card
                style={{ width: "18rem", height: "16.1rem", color: "#0070c9" }}
                className="border border-3 bg-gradient bg-primary"
              > */}
              <div
                className=" bg-primary bg-gradient border border-3   "
                style={{
                  color: "white",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{ height: "13.9rem" }}>
                  <Card.Title className="fw-bold">Clean Code</Card.Title>
                  <Card.Text>
                    Write a better code which is clean and simple
                  </Card.Text>
                  <div style={{ height: "20px" }}></div>
                  <Card.Link href="/fix">
                    <Button variant="light">Start working</Button>
                  </Card.Link>
                </Card.Body>
              </div>
              {/* </Card> */}
            </Col>

            <Col style={{ marginTop: "5rem" }}>
              <Card
                style={{ width: "18rem", height: "16.1rem", color: "#0070c9" }}
                className="border border-3"
                style={{
                  background: "linear-gradient(#fff,#e3e3e3)",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{ height: "13.9rem" }}>
                  <Card.Title className="fw-bold">Code Convertor </Card.Title>
                  <Card.Text>
                    Swap languages or frameworks for code like React to Vue
                  </Card.Text>
                  <Card.Link href="/Ec">
                    <div style={{ height: "20px" }}></div>
                    <Button variant="primary">Start working</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ marginTop: "5rem" }}>
              {/* <Card
                style={{ width: "18rem", height: "16.1rem", color: "#0070c9" }}
                className="border border-3 bg-gradient bg-primary"
              > */}
              <div
                className=" bg-primary bg-gradient border border-3   "
                style={{
                  color: "white",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{ height: "13.9rem" }}>
                  <Card.Title className="fw-bold">Explain Code</Card.Title>
                  <Card.Text>
                    Get your code exlpained based on language and the code
                    provided
                  </Card.Text>
                  <div style={{ height: "20px" }}></div>
                  <Card.Link href="/Cc">
                    <Button variant="light">Start working</Button>
                  </Card.Link>
                </Card.Body>
              </div>
              {/* </Card> */}
            </Col>
          </Row>

          <Row>
            <Col style={{ marginTop: "5rem" }}>
              <div
                className=" bg-primary bg-gradient border border-3   "
                style={{
                  color: "white",
                  borderRadius: "15px",
                }}
              >
                <Card.Body>
                  <Card.Title className="fw-bold">Explain Code</Card.Title>
                  <Card.Text>
                    Trying to solve a debug,try the bug solving code
                  </Card.Text>
                  <div style={{ height: "20px" }}></div>
                  <Card.Link href="/Clean">
                    <Button variant="light">Start working</Button>
                  </Card.Link>
                </Card.Body>
              </div>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </body>
    </div>
  );
};

export default Home;
