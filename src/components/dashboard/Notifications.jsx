import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Heading = styled.h4`
  border: 1px solid #ddd;
  background: rebeccapurple;
  color: white;
  padding: 15px;
  margin-bottom: 0;
`;

const Content = styled.div`
  border: 1px solid gray;
  border-top: none;
  opacity: ${props => (props.open ? "1" : "0")};
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: ${props => (props.open ? "15px" : "0 15px")};
  transition: all 0.3s;

  p {
    margin: 0;
  }
`;

export class Notifications extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div>
        <p>Notifications</p>
        <div>
          <Heading onClick={this.toggleOpen}>Click me to open</Heading>
          <Content open={this.state.open}>
            <p>Consider me opened!</p>
          </Content>
        </div>
        <div>
          <Input defaultValue="@probablyup" type="text" />
          <Input
            defaultValue="@geelen"
            type="text"
            inputColor="rebeccapurple"
          />
        </div>
      </div>
    );
  }
}
