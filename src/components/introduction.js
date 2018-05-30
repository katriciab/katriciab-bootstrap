import React from 'react';
import styled from 'styled-components';
import IntroImage from '../images/katriciab_intro.png';
import { ScreenHeightWrap, Header, Paragraph } from '../styled';

const TextWrap = styled.div`
  width: 50%;
  margin: auto -10% auto 10%;
  z-index: 1;
`;

const IntroImg = styled.img`
    width: 50%;
    margin: auto;
    z-index: 0;
`;

const Introduction = () => (
  <ScreenHeightWrap>
    <TextWrap>
        <Header>
          Creating things.<span>Developer, designer, maker.</span>
        </Header>
        <Paragraph>
          <span>Hello, my name is Katricia.</span> I love to eat, travel, and adore all things in the cat family - including myself and pomeranians (shhh).
        </Paragraph>
        <Paragraph>
          I’m swift to learn new things, take delight in the technical details, and enjoy wearing many hats.
        </Paragraph>
        <Paragraph>
          I get excited about a lot of things, but nothing lights me up like talking nerdy about technology. Oh, and plants. Bicycles too.
        </Paragraph>
    </TextWrap>
    <IntroImg src={IntroImage} alt="Katricia Barleta digital painting"/>
  </ScreenHeightWrap>
);

export default Introduction;
