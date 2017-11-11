import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.2rem 1rem;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  justify-content: flex-start;
  align-items: center;
  z-index: 100;
`;

const Logotype = styled.h1`
  margin: 0;
  margin-right: 2rem;
`;



const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  text-decoration: none;
  padding: 0 0.2rem;
  margin-right: 2rem;
`;

export default function ApplicationBar() {
  return (
    <Container>
      <Logotype>280canvas</Logotype>
      <nav>
        <List>
          <ListItem>how to draw</ListItem>
          <ListItem>about</ListItem>
        </List>
      </nav>
    </Container>
  );
}
