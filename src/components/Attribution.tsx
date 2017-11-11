import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.2rem 1rem;
  width: 200px;
  position: fixed;
  left: 0;
  top: 100px;
  z-index: 100;
`;


const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export default function Attribution() {
  return (
    <Container>
      <div>Currently drawing</div>
      <List>
        <li>
          <img src="https://avatars3.githubusercontent.com/u/90512?s=64&v=4" width="24" height="24" />
          <span>James Canning</span>
        </li>
      </List>
    </Container>
  );
}
