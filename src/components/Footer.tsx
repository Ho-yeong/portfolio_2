import React from 'react';
import styled from 'styled-components';
import { AiTwotonePhone, AiOutlineMail } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { LogoBlack, GitHub, LinkedIn } from '../assets';

const S = {
  Wrapper: styled.footer`
    width: 100%;
    background: #e2e2e2;
    padding: 0 30px;
  `,
  Container: styled.article`
    max-width: 1140px;
    margin: 0 auto;
    padding: 80px 0;
    display: flex;
    justify-content: space-between;

    @media (max-width: 450px) {
      flex-direction: column;
      padding: 50px 0;
    }
  `,

  Title: styled.h3`
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 20px;
  `,
  Description: styled.div`
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  `,
  Logo: styled.img`
    width: 80px;
    height: auto;
    object-fit: contain;

    @media (max-width: 450px) {
      width: 70px;
      margin-top: 30px;
    }
  `,
  A: styled.a``,
  Img: styled.img`
    width: 35px;
    height: auto;
    margin-top: 5px;
    margin-right: 10px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  `,
};

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <S.Wrapper id="Contact">
      <S.Container>
        <div>
          <S.Title>{t('contact')}</S.Title>
          <S.Description>
            <AiTwotonePhone />
            <span>&nbsp; +82 10-7663-5663</span>
          </S.Description>
          <S.Description>
            <FiMapPin />
            <span>&nbsp; {t('address')}</span>
          </S.Description>
          <S.Description>
            <AiOutlineMail />
            <span>&nbsp; ghdud0503@gmail.com</span>
          </S.Description>
          <S.A target="__blank" href="https://github.com/Ho-yeong">
            <S.Img src={GitHub} />
          </S.A>
          <S.A target="__blank" href="https://www.linkedin.com/in/hoyeong-jo-7547351a7/">
            <S.Img src={LinkedIn} />
          </S.A>
        </div>
        <S.Logo src={LogoBlack} />
      </S.Container>
    </S.Wrapper>
  );
};

export default Footer;
