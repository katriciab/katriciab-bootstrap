import styled from 'styled-components';
import media from './media-queries';

export const ScreenHeightWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background: ${props => (props.theme.colours.themeAccentPrimary)};
`;

export const Header = styled.div`
    font-size: 64px;
    margin-bottom: 56px;

    ${media.tablet`
      font-size: 46px;
    `}

    span {
        display: block;
        font-size: 42px;

        ${media.tablet`
          font-size: 32px;
        `}
    }
`;

export const Paragraph = styled.div`
    font-size: 20px;
    span {
        font-size: 32px;
        ${media.tablet`
          font-size: 20px;
        `}
    }
`;

export const LeftSection = styled.div`
    width: 40%;
    padding: 0 55px;
`;

export const RightSection = styled.div`
    width: 60%;
    padding: 0 55px 0 0;
`;