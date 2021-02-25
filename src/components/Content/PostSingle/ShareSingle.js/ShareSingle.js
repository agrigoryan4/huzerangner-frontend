import React from 'react';
import {
  FacebookShareButton,
  PinterestShareButton,
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
  PinterestIcon,
  TelegramIcon
} from "react-share";

const iconSize = (window.innerWidth > 480) ? 48 : 32;

const ShareSingle = ({ title, url }) => {
  const titleFormatted = `«${title}» \nՀուզերանգներ | Հ․ Ղուկասյանը հեղինակային բլոգը`;
  // const url = 'https://huzerangner.netlify.app/posts/post/60364b9766d5a32854cd376b';
  return (
    <div>
      <FacebookShareButton quote={titleFormatted} url={url}>
        <FacebookIcon size={iconSize} />
      </FacebookShareButton>

      <TwitterShareButton title={titleFormatted} url={url}>
        <TwitterIcon size={iconSize} />
      </TwitterShareButton>

      <WhatsappShareButton
        title={titleFormatted}
        url={url}
        separator=":: "
      >
        <WhatsappIcon size={iconSize} />
      </WhatsappShareButton>

      <ViberShareButton title={titleFormatted} url={url}>
        <ViberIcon size={iconSize} />
      </ViberShareButton>

      <PinterestShareButton title={titleFormatted} url={url}>
        <PinterestIcon size={iconSize} />
      </PinterestShareButton>

      <TelegramShareButton title={titleFormatted} url={url}>
        <TelegramIcon size={iconSize} />
      </TelegramShareButton>
    </div>
  );
};

export default ShareSingle;
