import React from 'react';
import styled from 'styled-components';
import Attribution from './Attribution';
import ApplicationBar from './ApplicationBar';
import Canvas from './Canvas';

const Base = styled.div`
  font-family: Oswald;
  color: #ffffff;
`;

export default function Application() {
  return (
    <Base>
      <ApplicationBar />
      <Attribution />
      <Canvas />
    </Base>
  );
}
