import React from 'react';
import './App.css';
import ToDoList from './Components/ToDoList';

import styled from 'styled-components'

const AppDiv = styled.div`
  width: 300px;
`

function App() {
  return (
    <AppDiv>
      <ToDoList />
    </AppDiv>
  );
}

export default App;
