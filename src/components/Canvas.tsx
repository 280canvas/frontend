import React from 'react';
import styled from 'styled-components';
import { registerCanvas } from "../engine"


const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  object-fit: cover;
`;

const Canvas = styled.canvas`
  object-fit: cover;
  width: 100%;
  height: 100%
`;

export default class RendCanvas extends React.Component {
  private canvasEl: any;

  componentDidMount() {
    registerCanvas(this.canvasEl);
  }

  render() {
    return (
      <Container>
        <Canvas innerRef={(ref: any) => (this.canvasEl = ref)} width="1200" height="1200" />
      </Container>
    )
  }
}
