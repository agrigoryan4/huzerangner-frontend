import React from 'react';
import styled from 'styled-components';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../actions'
//
import { Icon } from 'semantic-ui-react';
import { SMALL } from '../../constants/rs-breakpoints';

const FooterContentWrapper = styled.div`
  background-color: #242526;
  color: rgba(256,256,256,0.8);
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  > * {
    margin: 1rem;
  }
  a {
    color: inherit;
    transition: color 0.4s ease-in;
    :hover {
      color: rgba(256,256,256,1);
    }
  }
  @media screen and (max-width: ${SMALL}px) {
    flex-direction: column;
  }
`;

const Toolbar = styled.div`
  .darkModeToggler {
    outline: none;
    border: 1px solid #fff;
    color: inherit;
    background: none;
    padding: 1rem;
    
  }
`;

const Disclaimer = styled.div`
  font-size: 0.8rem;
`;

const Credit = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  @media screen and (max-width: ${SMALL}px) {
    font-size: 0.8rem;
    align-self: flex-start;
  }
`;

const Bottom = () => {
  const themeMode = useSelector(props => props.themeMode);

  const dispatch = useDispatch();

  const themeChangeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <footer>
      <FooterContentWrapper>
        <Toolbar>
          <button className='darkModeToggler' onClick={themeChangeHandler}>
            {themeMode === 'dark' ? 'Անջատել' : 'Միացնել'} մութ ռեժիմը&nbsp;
            <Icon name={`toggle ${themeMode === 'dark' ? 'off' : 'on'}`} />
          </button>
        </Toolbar>
        <Disclaimer>
          <p>
            <a href='https://www.facebook.com/hamlet.ghukasyan.7' target='_blank' rel='noreferrer'>
              <span>Համլետ Ղուկասյանը</span> <Icon name='facebook f' />
            </a>&nbsp;
            հանդիսանում է կայքում տեղ գտած բոլոր նյութերի հեղինակ
          </p>
          <p>Կայքի նյութերը տարածելու դեպքում պարտադիր է նշել հեղինակին</p>
          <p>Հարգենք մեկս մյուսի աշխատանքը <Icon name='smile outline'></Icon></p>
        </Disclaimer>
        <Credit>
          Պատրաստված է <Icon name='heart outline' />-ով&nbsp;
          <a href='https://www.facebook.com/arman.grigoryan.7311' target='_blank' rel='noreferrer'>Ա․ Գրիգորյան</a>ի կողմից <br/>
          <span>2021</span>
        </Credit>
      </FooterContentWrapper>
    </footer>
  );
};

export default Bottom;
