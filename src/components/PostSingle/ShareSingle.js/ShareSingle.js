import React from 'react';
import styled from 'styled-components';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  ViberIcon,
  TelegramIcon
} from "react-share";
// constants
import { SMALL } from '../../../constants/rs-breakpoints';
// facebook
import FacebookLikes from '../Facebook/Likes';

const iconSize = (window.innerWidth > SMALL) ? 42 : 36;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: 1080px) {
    max-width: 100%;
    overflow: hidden;
    flex-direction: column;
    align-items: flex-start;
    > * {
      margin-bottom: 1rem;
    }
  }
`;

const ShareWrapper = styled.div`

`;

const FacebookWrapper = styled.div`

`;


const ShareSingle = ({ title, url }) => {
  const titleFormatted = `«${title}» \nՀուզերանգներ | Հ․ Ղուկասյանի հեղինակային բլոգը`;
  // const url = 'https://huzerangner.netlify.app/posts/post/60364b9766d5a32854cd376b';
  return (
    <Wrapper>
      <ShareWrapper>
        <FacebookShareButton quote={titleFormatted} url={url}>
          <FacebookIcon size={iconSize} />
        </FacebookShareButton>

        <TwitterShareButton title={titleFormatted} url={url}>
          <TwitterIcon size={iconSize} />
        </TwitterShareButton>

        <WhatsappShareButton title={titleFormatted} url={url} separator=" ">
          <WhatsappIcon size={iconSize} />
        </WhatsappShareButton>

        <ViberShareButton title={titleFormatted} url={url}>
          <ViberIcon size={iconSize} />
        </ViberShareButton>

        <TelegramShareButton title={titleFormatted} url={url}>
          <TelegramIcon size={iconSize} />
        </TelegramShareButton>
      </ShareWrapper>
      <FacebookWrapper>
        <FacebookLikes />
      </FacebookWrapper>
    </Wrapper>
  );
};

export default ShareSingle;
