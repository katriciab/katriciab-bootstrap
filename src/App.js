import React, { Component } from 'react';
import styled from 'styled-components';
import Introduction from './components/introduction';
import Blurb from './components/blurb';

const KatApp = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <KatApp>
        <Introduction />
        <Blurb />
      </KatApp>
    );
  }
}

export default App;
