import styled from 'styled-components';
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from 'react-share';
import SocialIconFacebook from '@/assets/icons/SocialIconFacebook';
import { generalStyles } from '@/styles/variables';
import SocialIconWhatsApp from '@/assets/icons/SocialIconWhatsApp';
import SocialIconTwitter from '@/assets/icons/SocialIconTwitter';
import CopyIcon from '@/assets/icons/CopyIcon';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 12px;
  fill: ${generalStyles.colors.red};

  button {
    height: 24px;
    width: 24px;
    transition: fill 250ms ease-out;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;

    &:hover,
    &:focus {
      fill: ${generalStyles.colors.darkGray};
      outline: none;
    }
  }
`;

const ShareButtons = () => {
  return (
    <Container>
      <button>
        <CopyIcon />
      </button>
      <FacebookShareButton url={window.location.href}>
        <SocialIconFacebook />
      </FacebookShareButton>
      <TwitterShareButton url={window.location.href}>
        <SocialIconTwitter />
      </TwitterShareButton>
      <WhatsappShareButton url={window.location.href}>
        <SocialIconWhatsApp />
      </WhatsappShareButton>
    </Container>
  );
};

export default ShareButtons;
