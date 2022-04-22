import React from "react";
import { Nav, Card, Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { debounce } from "lodash";
// import got from 'got';
import AceEditor from "react-ace";
// import mode-<language> , this imports the style and colors for the selected language.
import "ace-builds/src-noconflict/mode-javascript";
// there are many themes to import, I liked monokai.
import "ace-builds/src-noconflict/theme-monokai";
// this is an optional import just improved the interaction.
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";  
// import got from 'got';

import "bootstrap/dist/css/bootstrap.min.css";

const UI_PARAMS_API_URL = "/params";
const TRANSLATE_API_URL = "/translate";

const DEBOUNCE_INPUT = 250;

class Clean extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      input: "",
      buttonText: "Submit",
      description: "Clean code ",
      dropDownVal: "0",
    };
    // Bind the event handlers
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Call API for the UI params
    axios
      .get(UI_PARAMS_API_URL)
      .then(({ data: { placeholder, button_text, description } }) => {
        this.setState({
          input: placeholder,
          buttonText: button_text,
          description: description,
          isLoading: false,
          copied: false,
        });
      });
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleDropDownValueChange = (e) => {
    if (document.getElementById("langA").value === "1")
      document.getElementById("langB").value = "1";
    else if (document.getElementById("langA").value === "2")
      document.getElementById("langB").value = "2";
    else if (document.getElementById("langA").value === "3")
      document.getElementById("langB").value = "3";
    else if (document.getElementById("langA").value === "4")
      document.getElementById("langB").value = "4";

    this.setState({ dropDownVal: e.target.value });
  };

  handleClick(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    this.apiRequest(this.state.input);
  }

  // clean code
  apiRequest = async (inputValue) => {
    const question =
      "convert the code into one line of JavaScript:\n";
    const answer = "\nJavaScript one line version:";
    const url =
      "https://api.openai.com/v1/engines/code-davinci-001/completions";
    const prompt = `${question}${inputValue}${answer}`;
    const params = {
      prompt: prompt,
      temperature: 1,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ["}"],
    };

    const headers = {
      headers: {
        Authorization:
          "Bearer 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",
      },
    };

    try {
      axios.post(url, params, headers).then((response) => {
        const outputVal = response.data.choices["0"].text.split("#}")["0"];
        this.setState({ output: outputVal, isLoading: false });
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <body id="bgimg">
          <Card>
            <Card.Header>
              <Container>
                <Nav
                  variant="tabs"
                  defaultActiveKey="/fix"
                  style={{
                    fontSize: "1.2rem",
                  }}
                >
                  <Nav.Item>
                    <Nav.Link href="/fix">Start using</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/sec1">Example</Nav.Link>
                  </Nav.Item>
                  <Nav.Item></Nav.Item>
                </Nav>
              </Container>
            </Card.Header>

            <Container>
              <form>
                <Row xs={1} md={2}>
                  <label
                    for="lang"
                    style={{ fontSize: "1.2rem", padding: "0.5rem" }}
                  >
                    Language{" "}
                  </label>
                </Row>
                <Row>
                  <Col className="d-grid gap-2">
                    <select
                      id="langA"
                      name="lang"
                      style={{ fontSize: "1.2rem", padding: "0.5rem" }}
                    >
                      <option value="0">select</option>
                      <option value="1">JavaScript</option>
                    </select>
                  </Col>
                  <Col></Col>
                </Row>
              </form>

              <Form onSubmit={this.handleClick}>
                <Form.Label style={{ fontSize: "1.2rem", padding: "0.5rem" }}>
                  {this.state.description}
                </Form.Label>

                <Row xs={1} md={2}>
                  <Col className="d-grid gap-2">
                    <Form.Group controlId="formBasicEmail">
                      <AceEditor
                        style={{ width: "39.7rem" }}
                        size="lg"
                        type="text"
                        as="textarea"
                        rows={this.state.rows}
                        placeholder="Start Coding"
                        mode="javascript"
                        theme="monokai"
                        name="basic-code-editor"
                        onChange={this.handleInputChange}
                        fontSize={18}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={this.state.input}
                        setOptions={{
                          enableBasicAutocompletion: true,
                          enableLiveAutocompletion: true,
                          enableSnippets: true,
                          showLineNumbers: true,
                          tabSize: 4,
                        }}
                      />
                    </Form.Group>
                  </Col>

                  <Col className="d-grid gap-2">
                    <Form.Group controlId="formBasicEmail">
                      {/* <Form.Control
                      size="lg"
                      type="text"
                      as="textarea"
                      rows={this.state.rows}
                      placeholder=""
                      value={this.state.output}
                    /> */}
                      <div></div>
                      <AceEditor
                        style={{ width: "39.7rem" }}
                        size="lg"
                        type="text"
                        as="textarea"
                        rows={this.state.rows}
                        value={this.state.output}
                        mode="javascript"
                        theme="monokai"
                        name="basic-code-editor"
                        fontSize={18}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Button
                      variant="primary"
                      name="submit"
                      id="submit"
                      type="submit"
                      size="lg"
                      style={{ float: "left", marginTop: "2rem" }}
                    >
                      {this.state.isLoading
                        ? "Loading…"
                        : this.state.buttonText}
                    </Button>
                  </Col>
                  <Col>
                    {this.state.output && (
                      <CopyToClipboard
                        text={this.state.output}
                        onCopy={() => this.setState({ copied: true })}
                      >
                        <Button
                          variant="primary"
                          name="copyButton"
                          type="button"
                          style={{
                            fontSize: "1.5rem",
                            float: "left",
                            marginTop: "2rem",
                          }}
                        >
                          Copy
                        </Button>
                      </CopyToClipboard>
                    )}
                  </Col>
                </Row>
              </Form>
            </Container>
          </Card>
        </body>
      </div>
    );
  }
}

export default Clean;
