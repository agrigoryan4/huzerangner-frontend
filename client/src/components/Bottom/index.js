import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const FooterContentWrapper = styled.div`
  background-color: #242526;
  color: rgba(256,256,256,0.8);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: inherit;
    transition: color 0.4s ease-in;
    :hover {
      color: rgba(256,256,256,1);
    }
  }
`;

const Social = styled.div`
  font-size: 1.2rem;
`;

const Credit = styled.div`
  font-size: 0.9rem;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
  opacity: 0.8;
`;

const Bottom = () => {
  return (
    <footer>
      <FooterContentWrapper>
        <Social>
          <a href='https://www.facebook.com/hamlet.ghukasyan.7' target='_blank' rel='noreferrer'>
            <span>Համ Ղուկասյան</span> <Icon name='facebook f' />
          </a>
        </Social>
        <Credit>
          Պատրաստված է <Icon name='heart outline' />-ով&nbsp;
          <a href='https://www.facebook.com/arman.grigoryan.7311' target='_blank' rel='noreferrer'>Ա․ Գրիգորյան</a>ի կողմից
        </Credit>
        <div>2021</div>
      </FooterContentWrapper>
    </footer>
  );
};

export default Bottom;
