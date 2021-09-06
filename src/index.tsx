import * as React from "react";
import { render } from "react-dom";
import ReactJson from "react-json-view";
import {
  ForkButton,
  Container,
  H1,
  H2,
  RefreshButton,
  UserAgent,
  Result
} from "./styled";
import { Github } from "styled-icons/fa-brands/Github";
import { Refresh } from "styled-icons/material/Refresh";
import bots from "./user-agents/bots";
import consoles from "./user-agents/consoles";
import desktops from "./user-agents/desktops";
import smartphones from "./user-agents/smartphones";
import tablets from "./user-agents/tablets";
import televisions from "./user-agents/televisions";
import "./styles.css";

// Using require because code sandbox does
// not support allowSyntheticDefaultImports
const DeviceDetector = require("device-detector-js");
const deviceDetector = new DeviceDetector();
const { dependencies } = require("../package.json");
const libVersion = dependencies["device-detector-js"];
const userAgentsSamples = [
  ...bots,
  ...consoles,
  ...desktops,
  ...smartphones,
  ...tablets,
  ...televisions
];

const pickRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

class App extends React.Component {
  state = {
    userAgent: undefined,
    executionTime: undefined,
    device: undefined
  };

  componentDidMount() {
    if (window.location.hash) {
      const userAgent = decodeURIComponent(window.location.hash.substr(1));

      return this.parseUserAgent(userAgent);
    }

    this.parseUserAgent(navigator.userAgent);
  }

  handleChange = event => {
    this.parseUserAgent(event.currentTarget.value);
    window.location.hash = event.currentTarget.value;
  };

  parseUserAgent = userAgent => {
    if (userAgent.trim() === (this.state.userAgent || "").trim()) {
      return this.setState({ userAgent });
    }

    const startTime = +new Date();
    const device = deviceDetector.parse(userAgent);
    const executionTime = +new Date() - startTime;

    this.setState({
      userAgent,
      executionTime,
      device
    });
  };

  randomizeUserAgent = () => {
    const userAgent = pickRandomItem(userAgentsSamples);

    this.setState({ userAgent });
    this.parseUserAgent(userAgent);
    window.location.hash = userAgent;
  };

  render() {
    const { userAgent, executionTime, device } = this.state;

    return (
      <React.Fragment>
        <ForkButton href="https://github.com/etienne-martin/device-detector-js">
          <Github />
        </ForkButton>
        <Container>
          <H1 data-version={libVersion}>
            <a href="https://github.com/etienne-martin/device-detector-js">
              device-detector-js
            </a>
          </H1>
          <H2>
            User Agent
            <RefreshButton onClick={this.randomizeUserAgent}>
              <Refresh />
              Randomize
            </RefreshButton>
          </H2>
          <UserAgent
            value={userAgent}
            onChange={this.handleChange}
            autoCorrect="off"
            spellCheck={false}
          />
          <H2>Result</H2>
          <Result>
            <ReactJson
              name={false}
              displayObjectSize={false}
              displayDataTypes={false}
              enableClipboard={false}
              src={device}
              theme="monokai"
            />
          </Result>
          {executionTime && <p>Execution time: {executionTime}ms</p>}
        </Container>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
