import React, { Component } from 'react';
import styled from 'styled-components';
import Introduction from './components/introduction';
import Blurb from './components/blurb';
import Play from './components/play';
import Content from './components/content';
import Links from './components/links';

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
        <Play />
        <Content />
        <Links />
      </KatApp>
    );
  }
}

export default App;
