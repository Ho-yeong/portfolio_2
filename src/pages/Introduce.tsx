import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import TiltingCard from '../components/TiltingCard';
import TypingEffect from '../components/TypeEffect';

const I = {
  Wrapper: styled.section`
    width: 100%;
    background: #1c0522;
    color: white;
    padding: 0 30px;
  `,
  Container: styled.article`
    max-width: 1140px;
    margin: 0 auto;
    padding: 100px 0;
  `,
  Title: styled.div`
    padding: 20px 0;
    display: flex;

    @media (max-width: 450px) {
      flex-direction: column;
    }
  `,
  Card: styled.div`
    width: 300px;
    margin-right: 50px;

    @media (max-width: 450px) {
      width: 80%;
      margin: 0;
    }
  `,
  Contents: styled.div``,
  Text: styled.div`
    font-size: 22px;
    line-height: 32px;

    &.title {
      font-size: 42px;
      font-weight: 700;
      height: 80px;
    }

    &.desc {
      margin-top: 70px;
    }

    &.desc > p:nth-child(2) {
      margin-left: 50px;
    }
  `,
};

const Introduce: React.FC = () => {
  const { t } = useTranslation();

  return (
    <I.Wrapper>
      <I.Container>
        <I.Title>
          <I.Card>
            <TiltingCard />
          </I.Card>
          <I.Contents>
            <I.Text className="title">
              <TypingEffect
                text={[`${t('intro_title')}`]}
                speed={45}
                eraseDelay={18000}
                eraseSpeed={70}
                typingDelay={500}
              />
            </I.Text>
            <I.Text>I'm currently located in Seoul</I.Text>
            <I.Text>
              <TypingEffect
                staticText={'Speciallized in'}
                text={['Node.js', 'React', 'Go']}
                speed={40}
                typingDelay={50}
                eraseSpeed={35}
                eraseDelay={2500}
              />
            </I.Text>

            <I.Text className="desc">
              <p>{t('intro_desc_1')}</p>
              <p>{t('intro_desc_2')}</p>
            </I.Text>
          </I.Contents>
        </I.Title>
      </I.Container>
    </I.Wrapper>
  );
};

export default Introduce;
