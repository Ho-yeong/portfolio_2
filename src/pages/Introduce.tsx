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
    padding-top: 100px;
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
    &.title {
      font-size: 42px;
      font-weight: 700;
      margin-bottom: 40px;
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
                text={['Full-stack Web & Game Developer']}
                speed={60}
                eraseDelay={12000}
                eraseSpeed={80}
                typingDelay={500}
              />
            </I.Text>
            <I.Text>어쩌고 저쩌고</I.Text>
          </I.Contents>
        </I.Title>
      </I.Container>
    </I.Wrapper>
  );
};

export default Introduce;
