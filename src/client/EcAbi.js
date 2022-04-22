import React from "react";
import { Container, Nav, Card, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import got from 'got';
import AceEditor from "react-ace";
// import mode-<language> , this imports the style and colors for the selected language.
// there are many themes to import, I liked monokai.
// this is an optional import just improved the interaction.
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";
import "bootstrap/dist/css/bootstrap.min.css";

const UI_PARAMS_API_URL = "/params";
const TRANSLATE_API_URL = "/translate";

const DEBOUNCE_INPUT = 250;
const languageMode = ["java", "python", "javascript", "typescript"];

class EcAbi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      input: "",
      buttonText: "Submit",
      description: "Code Convetor",
      dropDownVal: "0",
      languageMode: "java",
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

    this.setState({
      dropDownVal: e.target.value,
      languageMode: languageMode[e.target.value - 1],
      input: "",
      output: "",
    });
    Location.reload();
  };

  handleClick(e) {
    e.preventDefault();
    this.setState({ isLoading: true, output: "" });
    this.apiRequest(this.state.input);
  }

  // Code conversion
  apiRequest = async (inputValue) => {
    const question1 =
      "# Convertion from Java to Python\n# Java version\nJava SE 17\n[ Java code ]\n";
    const answer1 =
      "n# End\n# Python version\nPython 3.10.0\n[ Python code ]\n";

    const question2 =
      "# Convertion from Python to Java\n# Python version\nPython 3.10.0\n[ Python code ]\n";
    const answer2 = "\n# End\n# Java version\nJava SE 17\n[ Java code ]\n";

    const question3 = "# Convertion from React to Vue\n[ React code ]\n";
    const answer3 = "\n# End\n[ Vue code ]\n";

    const question4 = "# Convertion from Vue to React\n[ Vue code ]\n";
    const answer4 = "\n# End\n[ React code ]\n";

    const url =
      "https://api.openai.com/v1/engines/code-davinci-001/completions";

    let promptValue;
    if (this.state.dropDownVal === "1") {
      promptValue = `${question1}${inputValue}${answer1}`;
    } else if (this.state.dropDownVal === "2") {
      promptValue = `${question2}${inputValue}${answer2}`;
    } else if (this.state.dropDownVal === "3") {
      promptValue = `${question3}${inputValue}${answer3}`;
    } else if (this.state.dropDownVal === "4") {
      promptValue = `${question4}${inputValue}${answer4}`;
    } else {
      promptValue = null;
    }
    const params = {
      prompt: promptValue,
      temperature: 0.5,
      max_tokens: 500,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: "#End",
    };
    const headers = {
      headers: {
        Authorization:
          "Bearer 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",
      },
    };

    try {
      axios.post(url, params, headers).then((response) => {
        const outputVal = response.data.choices["0"].text.split("# End")["0"];
        this.setState({ output: outputVal, isLoading: false });
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Explain code
  apiRequest1 = async (inputValue) => {
    const question = "#enter the code here :\n";
    const answer = '\n"""\nHere\'s what the above code snippet is doing:\n1.\n';
    const url =
      "https://api.openai.com/v1/engines/code-davinci-001/completions";
    const prompt = `${question}${inputValue}${answer}`;
    const params = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 500,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: "",
    };
    const headers = {
      headers: {
        Authorization:
          "Bearer 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",
      },
    };

    try {
      axios.post(url, params, headers).then((response) => {
        const outputVal = response.data.choices["0"].text.split("# End")["0"];
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
                  defaultActiveKey="/Ec"
                  style={{
                    fontSize: "1.2rem",
                  }}
                  size="lg"
                >
                  <Nav.Item>
                    <Nav.Link href="/Ec">Start using</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/sec2">Example</Nav.Link>
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
                      onChange={this.handleDropDownValueChange}
                    >
                      <option value="0">select</option>
                      <option value="1">java</option>
                      <option value="2">python</option>
                      <option value="3">React</option>
                      <option value="4">Vue</option>
                    </select>
                  </Col>
                  <Col className="d-grid gap-2" variant="primary">
                    <select
                      id="langB"
                      style={{ fontSize: "1.2rem", padding: "0.5rem" }}
                      name="lang"
                    >
                      <option value="0">select</option>
                      <option value="1">python</option>
                      <option value="2">java</option>
                      <option value="3">Vue JS</option>
                      <option value="4">React</option>
                    </select>
                  </Col>
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
                        mode={this.state.languageMode}
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
                            fontSize: "1.8rem",
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

export default EcAbi;
