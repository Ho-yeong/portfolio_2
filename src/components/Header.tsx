import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { LogoWhite } from '../assets';

const H = {
  Wrapper: styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: all 0.25s ease-in-out;
    background: rgba(255,255,255, 0); color: white;
  }
  `,
  InnerWrapper: styled.div`
    width: 100%;
    max-width: 1140px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  `,
  Logo: styled.a``,
  Img: styled.img`
    width: 72px;
    height: auto;
    object-fit: contain;

    @media (max-width: 450px) {
      width: 64px;
    }
  `,
  List: styled.ul`
    display: flex;
  `,
  Item: styled.li`
    margin: 0 14px;
    cursor: pointer;
    user-select: none;
    letter-spacing: 1px;
    font-size: 0.95rem;

    @media (max-width: 450px) {
      margin: 0 7px;
      font-size: 0.9rem;
    }
  `,
};

const Header: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <H.Wrapper>
      <H.InnerWrapper>
        <H.Logo onClick={() => window.location.reload()}>
          <H.Img src={LogoWhite} />
        </H.Logo>
        <H.List>
          <H.Item onClick={() => i18n.changeLanguage('ko-KR')}>한국어</H.Item>
          <H.Item onClick={() => i18n.changeLanguage('en-US')}>English</H.Item>
          <H.Item onClick={() => i18n.changeLanguage('ja-JP')}>日本語</H.Item>
        </H.List>
      </H.InnerWrapper>
    </H.Wrapper>
  );
};

export default Header;
